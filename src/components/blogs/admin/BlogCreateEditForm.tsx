import { useStore } from '@nanostores/react';

import { isCreateBlogModalOpen } from '../../../stores/createBlogModalStore';
import ModalHeader from '../../modal/ModalHeader';
import ModalOverlay from '../../shared/ModalOverlay';

const BlogCreateEditForm = () => {
  const $isCreateBlogModalOpen = useStore(isCreateBlogModalOpen);

  return (
    <ModalOverlay>
      <form className="flex flex-col items-center flex-wrap gap-y-4 absolute w-[90%] md:w-[30vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-20">
        <ModalHeader closeModal={() => isCreateBlogModalOpen.set(false)} />
        <h4>Přidat blog</h4>
        <input type="text" />
      </form>
    </ModalOverlay>
  );
};

export default BlogCreateEditForm;
