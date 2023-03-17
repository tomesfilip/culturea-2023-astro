import BlogListLimited from '../components/blogs/BlogListLimited';
import Section from '../components/shared/Section';

const SectionBlogs = () => {
  return (
    <Section sectionId="clanky" sectionName="Články">
      <BlogListLimited />
      <a
        className="text-2xl uppercase text-flushOrange border-2 rounded-lg border-flushOrange px-4 py-2 font-bold mt-8"
        href="/blogy"
      >
        Další
      </a>
    </Section>
  );
};

export default SectionBlogs;
