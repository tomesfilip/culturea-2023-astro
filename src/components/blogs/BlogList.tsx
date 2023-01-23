import useFetchBlogList from '../../hooks/useFetchBlogList';
import useMonitorAuthUser from '../../hooks/useMonitorAuthUser';

import type { TBlogItem } from '../../lib/types/TBlogItem';
import BlogListItem from './BlogListItem';

const BlogList = () => {
  const { data: blogs, isLoading, error } = useFetchBlogList();
  const { loggedUser } = useMonitorAuthUser();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {blogs && (
        <div className="blog-articles grid grid-cols-1 md:grid-cols-2">
          {blogs.map((blog: TBlogItem) => (
            <BlogListItem key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogList;