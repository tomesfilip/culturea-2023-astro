import { useStore } from '@nanostores/react';
import { useState } from 'react';

import { isCreateBlogModalOpen } from '../../../stores/createBlogModalStore';
import ModalHeader from '../../modal/ModalHeader';
import ModalOverlay from '../../shared/ModalOverlay';
import LabelledInput from '../LabelledInput';
import ActionBlogButton from './ActionBlogButton';

const BlogCreateEditForm = () => {
  const $isCreateBlogModalOpen = useStore(isCreateBlogModalOpen);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  return (
    <ModalOverlay>
      <form className="flex flex-col flex-wrap gap-y-4 absolute w-[90%] md:w-[30vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-20">
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
        <button
          className="bg-flushOrange px-2 py-1 text-xl text-white rounded-lg max-w-max self-center"
          onClick={() => console.log('adding blog')}
        >
          Uveřejnit blog
        </button>
      </form>
    </ModalOverlay>
  );
};

export default BlogCreateEditForm;
