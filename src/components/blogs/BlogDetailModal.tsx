import parse from 'html-react-parser';

import useMonitorAuthUser from '../../hooks/useMonitorAuthUser';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import ModalHeader from '../modal/ModalHeader';
import ModalOverlay from '../shared/ModalOverlay';
import EditDeleteActions from './admin/EditDeleteActions';

interface Props {
  blog: TBlogItem;
  closeModalOnClick: () => void;
}

const BlogDetailModal = ({ blog, closeModalOnClick }: Props) => {
  const { loggedUser } = useMonitorAuthUser();

  return (
    <ModalOverlay>
      <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-lg p-4 md:p-8 w-11/12 md:w-4/5 lg:w-3/5 h-[75vh]">
        <ModalHeader closeModal={closeModalOnClick} />
        <h3 className="w-full text-center lg:text-left">{blog.title}</h3>
        <img
          className="mt-2 mb-3 max-w-[300px] max-h-[300px] rounded-lg object-cover"
          src={blog.bannerImage}
          alt={blog.title}
          width={300}
          height={300}
        />
        <div className="blog-body-text overflow-y-scroll max-h-[600px]">
          {parse(blog.body)}
        </div>
        {loggedUser && <EditDeleteActions blogId={blog.id} />}
      </div>
      )
    </ModalOverlay>
  );
};

export default BlogDetailModal;
