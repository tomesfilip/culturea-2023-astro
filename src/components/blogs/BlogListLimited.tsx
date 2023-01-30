import useFetchBlogList from '../../hooks/useFetchBlogList';
import type { TBlogItem } from '../../lib/types/TBlogItem';
import Loader from '../shared/Loader';
import BlogListItem from './BlogListItem';
import NoBlogsFound from './NoBlogsFound';

const BlogListLimited = () => {
  const { data: blogs, isLoading, error } = useFetchBlogList(3);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (!blogs || blogs.length < 1) && <NoBlogsFound />}
      {blogs && (
        <div className="blog-articles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogs.map((blog: TBlogItem) => (
            <BlogListItem key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogListLimited;
