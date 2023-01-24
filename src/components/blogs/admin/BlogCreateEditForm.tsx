import { addDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { blogCollectionRef, storage } from '../../../config/firebase';
import { isCreateModalOpen } from '../../../stores/createModalStore';
import { editBlogStore } from '../../../stores/editBlogStore';
import ModalHeader from '../../modal/ModalHeader';
import ModalOverlay from '../../shared/ModalOverlay';
import LabelledInput from '../LabelledInput';

const BlogCreateEditForm = () => {
  const [blog] = useState<any>(editBlogStore.get());
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  // TODO: add a loading and error indicator
  // TODO: move logic methods into separate files
  const uploadImage = async () => {
    if (!imageUpload) {
      return;
    }
    try {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      const res = await uploadBytes(imageRef, imageUpload);
      const uploadedImgUrl = await getDownloadURL(res.ref);
      setImgUrl(uploadedImgUrl);
    } catch (error) {
      console.log('File upload error: ' + error);
    }
  };

  const createBlog = async () => {
    if (!title) return setError('Chybějící název blogu.');
    if (!body) return setError('Chybějíci text blogu.');
    if (!imgUrl) return setError('Chybějící obrázek blogu.');

    await addDoc(blogCollectionRef, {
      title: title,
      body: body,
      bannerImage: imgUrl,
    });

    setError('');
  };

  const updateBlog = async () => {
    if (!title) return setError('Chybějící název blogu.');
    if (!body) return setError('Chybějíci text blogu.');
    if (!imgUrl) return setError('Chybějící obrázek blogu.');

    try {
      await updateDoc(blog, {
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
        <div className="flex gap-2">
          <p>Text</p>
          <textarea
            className="border-[1px] border-black rounded-lg w-full p-1"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required={true}
          />
        </div>
        <LabelledInput
          name="image"
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
          required={false}
          text="Obrázek"
        />
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
