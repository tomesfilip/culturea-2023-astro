import { useStore } from '@nanostores/react';

import useMonitorAuthUser from '../../../hooks/useMonitorAuthUser';
import { isAuthModalOpen } from '../../../stores/authModalStore';
import { isCreateModalOpen } from '../../../stores/createModalStore';
import ActionBlogButton from '../admin/ActionBlogButton';
import BlogCreateEditForm from '../admin/BlogCreateEditForm';
import BlogAuthForm from './BlogAuthForm';
import BlogAuthLoginButton from './BlogAuthLoginButton';
import BlogAuthLogoutButton from './BlogAuthLogoutButton';

interface Props {
  children: React.ReactNode;
}

const BlogAuthWrapper = ({ children }: Props) => {
  const $isAuthModalOpen = useStore(isAuthModalOpen);
  const $isCreateModalOpen = useStore(isCreateModalOpen);
  const { loggedUser, isLoading, error } = useMonitorAuthUser();

  return (
    <>
      {isAuthModalOpen.get() && <BlogAuthForm />}
      {loggedUser && isCreateModalOpen.get() && <BlogCreateEditForm />}
      {children}
      <div className="auth-action-buttons flex flex-col fixed gap-y-4 bottom-4 right-4">
        {loggedUser ? (
          <>
            <ActionBlogButton onClick={() => isCreateModalOpen.set(true)}>
              Přidat blog
            </ActionBlogButton>
            <BlogAuthLogoutButton />
          </>
        ) : (
          <BlogAuthLoginButton />
        )}
      </div>
    </>
  );
};

export default BlogAuthWrapper;
