import { useStore } from '@nanostores/react';

import closeIcon from '../../assets/img/icons/close-icon.svg';
import useMonitorAuthUser from '../../hooks/useMonitorAuthUser';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import { isDetailModalOpen } from '../../stores/detailModalStore';
import ModalHeader from '../modal/ModalHeader';
import ModalOverlay from '../shared/ModalOverlay';
import EditDeleteActions from './admin/EditDeleteActions';

interface Props {
  blog: TBlogItem;
}

const BlogDetailModal = ({ blog }: Props) => {
  const { loggedUser } = useMonitorAuthUser();
  const $isDetailModalOpen = useStore(isDetailModalOpen);

  return (
    <ModalOverlay>
      <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-lg p-4 md:p-8">
        <ModalHeader closeModal={() => isDetailModalOpen.set(false)} />
        <h3>{blog.title}</h3>
        <img
          className="mt-2 mb-3"
          src={blog.bannerImage}
          alt={blog.title}
          width={300}
          height={300}
        />
        <p>{blog.brief}</p>
        {loggedUser && <EditDeleteActions />}
      </div>
      )
    </ModalOverlay>
  );
};

export default BlogDetailModal;
