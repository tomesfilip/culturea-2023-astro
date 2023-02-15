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
    <div className="flex flex-col max-w-[350px]">
      <article
        onClick={() => setIsDetailModalOpen(true)}
        className="cursor-pointer"
      >
        <h3 className="text-xl mb-1 font-bold px-1">{blog.title}</h3>
        <img
          className="w-[350px] h-[350px] rounded-lg object-cover"
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
