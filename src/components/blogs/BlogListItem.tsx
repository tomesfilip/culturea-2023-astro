import { useState } from 'react';

import useMonitorAuthUser from '../../hooks/useMonitorAuthUser';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import EditDeleteActions from './admin/EditDeleteActions';
import BlogDetailModal from './BlogDetailModal';

interface Props {
  blog: TBlogItem;
}

const BlogListItem = ({ blog }: Props) => {
  const { loggedUser } = useMonitorAuthUser();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <article
        onClick={() => setIsDetailModalOpen(true)}
        className="cursor-pointer"
      >
        <h4 className="text-xl text-center mb-1 font-bold">{blog.title}</h4>
        <img
          className="w-[300px] h-[300px] rounded-lg object-cover"
          src={blog.bannerImage}
          alt={blog.title}
          width={300}
          height={300}
        />
      </article>
      {loggedUser && <EditDeleteActions blogId={blog.id} />}
      {isDetailModalOpen && (
        <BlogDetailModal
          blog={blog}
          closeModalOnClick={() => setIsDetailModalOpen(false)}
        />
      )}
    </div>
  );
};

export default BlogListItem;
