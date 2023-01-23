import { useStore } from '@nanostores/react';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { blogCollectionRef, db, storage } from '../../../config/firebase';

import { isCreateBlogModalOpen } from '../../../stores/createBlogModalStore';
import ModalHeader from '../../modal/ModalHeader';
import ModalOverlay from '../../shared/ModalOverlay';
import LabelledInput from '../LabelledInput';
import ActionBlogButton from './ActionBlogButton';

const BlogCreateEditForm = () => {
  const $isCreateBlogModalOpen = useStore(isCreateBlogModalOpen);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [imgUrl, setImageUrl] = useState<string | null>(null);

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
      setImageUrl(uploadedImgUrl);
    } catch (error) {
      console.log('File upload error: ' + error);
    }
  };

  const createBlog = async () => {
    await addDoc(blogCollectionRef, {
      title: title,
      body: body,
      bannerImage: imgUrl,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createBlog();
    isCreateBlogModalOpen.set(false);
  };

  useEffect(() => {
    if (imageUpload) {
      uploadImage();
    }
  }, [imageUpload]);

  return (
    <ModalOverlay>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col flex-wrap gap-y-4 absolute w-[90%] md:w-[30vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-20"
      >
        <ModalHeader closeModal={() => isCreateBlogModalOpen.set(false)} />
        <h4 className="text-xl text-center">Přidat blog</h4>
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
            className="border-[1px] border-black rounded-lg w-full"
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
          required={true}
          text="Obrázek"
        />
        <button className="bg-flushOrange px-2 py-1 text-xl text-white rounded-lg max-w-max self-center">
          Uveřejnit blog
        </button>
      </form>
    </ModalOverlay>
  );
};

export default BlogCreateEditForm;
