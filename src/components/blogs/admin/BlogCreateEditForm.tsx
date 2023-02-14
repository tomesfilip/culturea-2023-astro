import { addDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 } from 'uuid';

import { blogCollectionRef, storage } from '../../../config/firebase';
import { isCreateModalOpen } from '../../../stores/createModalStore';
import { editBlogStore } from '../../../stores/editBlogStore';
import { getDocRef } from '../../../utils/getBlogRef';
import ModalHeader from '../../modal/ModalHeader';
import Loader from '../../shared/Loader';
import ModalOverlay from '../../shared/ModalOverlay';
import LabelledInput from '../LabelledInput';

import '../../../styles/blogTextEditor.css';

const BlogCreateEditForm = () => {
  const [blog] = useState<any>(editBlogStore.get());
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);

  // TODO: add a loading and error indicator
  // TODO: move logic methods into separate files
  const uploadImage = async () => {
    if (!imageUpload) {
      return;
    }

    if (imageUpload.size > 3145728) {
      setError('Nahrávej obrázek menší než 3MB');
      return;
    }
    try {
      setIsImageUploading(true);
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      const res = await uploadBytes(imageRef, imageUpload);
      const uploadedImgUrl = await getDownloadURL(res.ref);
      setImgUrl(uploadedImgUrl);
    } catch (error) {
      console.log('File upload error: ' + error);
    } finally {
      setIsImageUploading(false);
    }
  };

  const createBlog = async () => {
    if (!title) return setError('Chybějící název blogu.');
    if (!body) return setError('Chybějíci text blogu.');
    if (!imgUrl) return setError('Chybějící obrázek blogu.');

    try {
      await addDoc(blogCollectionRef, {
        title: title,
        body: body,
        bannerImage: imgUrl,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log(error);
    }

    setError('');
  };

  const updateBlog = async () => {
    if (!title) return setError('Chybějící název blogu.');
    if (!body) return setError('Chybějíci text blogu.');
    if (!imgUrl) return setError('Chybějící obrázek blogu.');

    try {
      const blogRef = getDocRef(blog.blogId);
      await updateDoc(blogRef, {
        title: title,
        body: body,
        bannerImage: imgUrl,
      });
    } catch (error) {
      console.log('Error during update: ' + error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    blog ? await updateBlog() : await createBlog();
    isCreateModalOpen.set(false);
    if (blog) {
      editBlogStore.set(undefined);
    }
    window.location.reload();
  };

  useEffect(() => {
    if (imageUpload) {
      uploadImage();
    }
  }, [imageUpload]);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setBody(blog.body);
      setImgUrl(blog.bannerImage);
    }
  }, []);

  const closeModal = () => {
    isCreateModalOpen.set(false);
    editBlogStore.set(undefined);
  };

  return (
    <ModalOverlay>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col flex-wrap gap-y-4 absolute w-[90%] md:w-[60%] lg:w-[40%] max-w-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-50"
      >
        <ModalHeader closeModal={() => closeModal()} />
        <h4 className="text-xl text-center">
          {blog ? 'Upravit blog' : 'Přidat blog'}
        </h4>
        <LabelledInput
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
          text="Název"
        />
        <div className="grid gap-2">
          <p>Text</p>
          <ReactQuill theme="snow" value={body} onChange={setBody} />
        </div>
        <LabelledInput
          name="image"
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
          required={false}
          text="Obrázek"
        />
        {isImageUploading && (
          <div className="flex justify-center">
            <Loader />
          </div>
        )}
        <LabelledInput
          name="image url"
          type="text"
          value={imgUrl ?? ''}
          onChange={(e) => setImgUrl(e.target.value)}
          required={false}
          text="Url obrázku"
        />
        <button className="bg-flushOrange px-2 py-1 text-xl text-white rounded-lg max-w-max self-center">
          Uveřejnit blog
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </ModalOverlay>
  );
};

export default BlogCreateEditForm;
