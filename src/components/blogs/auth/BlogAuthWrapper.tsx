import { useStore } from '@nanostores/react';
import { isAuthModalOpen } from '../../../stores/authModalStore';
import BlogAuthButton from './BlogAuthButton';
import BlogAuthForm from './BlogAuthForm';

interface Props {
  children: React.ReactNode;
}

const BlogAuthWrapper = ({ children }: Props) => {
  const $isAuthModalOpen = useStore(isAuthModalOpen);

  return (
    <>
      {isAuthModalOpen.get() && <BlogAuthForm />}
      {children}
      <BlogAuthButton onClick={() => isAuthModalOpen.set(!$isAuthModalOpen)} />
    </>
  );
};

export default BlogAuthWrapper;
