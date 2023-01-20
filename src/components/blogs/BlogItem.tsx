import type { TBlogItem } from '../../lib/types/TBlogItem';

interface Props {
  blog: TBlogItem;
}

const BlogItem = ({ blog }: Props) => {
  return (
    <article>
      <a href={`/blogy/${blog.id}`}>
        <h3>{blog.title}</h3>
        <p>{blog.brief}</p>
        <img src={blog.bannerImage} alt={blog.title} width={300} height={300} />
      </a>
    </article>
  );
};

export default BlogItem;
