import type { TBlogItem } from '../../lib/types/TBlogItem';

const BlogItem = ({ headline, imageLink, text }: TBlogItem) => {
  return (
    <article>
      <h2>{headline}</h2>
      <img src={imageLink} alt={headline} />
      <p>{text}</p>
    </article>
  );
};

export default BlogItem;
