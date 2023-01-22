import { useStore } from '@nanostores/react';
import { isAuthModalOpen } from '../../stores/authModalStore';
import Section from '../shared/Section';
import BlogAuthButton from './auth/BlogAuthButton';
import BlogAuthForm from './auth/BlogAuthForm';
import BlogList from './BlogList';

const BlogPageContent = () => {
  const $isAuthModalOpen = useStore(isAuthModalOpen);

  return (
    <div className="blog-page-content">
      {isAuthModalOpen.get() && <BlogAuthForm />}
      <Section sectionId="blogy" sectionName="Blogy">
        <BlogList />
        <BlogAuthButton
          onClick={() => isAuthModalOpen.set(!$isAuthModalOpen)}
        />
      </Section>
    </div>
  );
};

export default BlogPageContent;
