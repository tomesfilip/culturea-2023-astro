import { useStore } from '@nanostores/react';
import useMonitorAuthUser from '../../hooks/useMonitorAuthUser';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import { isDetailModalOpen } from '../../stores/detailModalStore';
import EditDeleteActions from './admin/EditDeleteActions';
import BlogDetailModal from './BlogDetailModal';

interface Props {
  blog: TBlogItem;
}

const BlogListItem = ({ blog }: Props) => {
  const { loggedUser } = useMonitorAuthUser();
  const $isDetailModalOpen = useStore(isDetailModalOpen);

  return (
    <>
      <article
        onClick={() => isDetailModalOpen.set(true)}
        className="cursor-pointer"
      >
        <h4 className="text-xl text-center mb-1 font-bold">{blog.title}</h4>
        <img
          className="rounded-lg"
          src={blog.bannerImage}
          alt={blog.title}
          width={300}
          height={300}
        />
        {loggedUser && <EditDeleteActions />}
      </article>
      {isDetailModalOpen.get() && <BlogDetailModal blog={blog} />}
    </>
  );
};

export default BlogListItem;
