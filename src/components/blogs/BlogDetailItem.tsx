import useFetchBlog from '../../hooks/useFetchBlog';
import type { TBlogItem } from '../../lib/types/TBlogItem';

interface Props {
  blogId: string;
}

const BlogDetailItem = ({ blogId }: Props) => {
  const { data: blog, isLoading, error } = useFetchBlog(blogId);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {blog && (
        <div className="flex flex-col items-center">
          <h3>{blog.title}</h3>
          <p>{blog.brief}</p>
          <img
            src={blog.bannerImage}
            alt={blog.title}
            width={300}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default BlogDetailItem;
