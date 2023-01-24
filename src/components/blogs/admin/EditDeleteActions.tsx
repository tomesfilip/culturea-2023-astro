import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { isCreateModalOpen } from '../../../stores/createModalStore';
import { editBlogStore } from '../../../stores/editBlogStore';
import { getDocRef } from '../../../utils/getBlogRef';
import ActionBlogButton from './ActionBlogButton';

interface Props {
  blogId: string;
}

const EditDeleteActions = ({ blogId }: Props) => {
  const handleDeleteBlog = async () => {
    try {
      const docRef = getDocRef(blogId);
      await deleteDoc(docRef);
      window.location.reload();
    } catch (error) {
      console.log('Error during deletion: ' + error);
    }
  };

  const handleEditBlog = async () => {
    try {
      const docRef = getDocRef(blogId);
      const docData = await getDoc(docRef);
      if (!docData.data()) return;
      editBlogStore.set(docData.data());
      isCreateModalOpen.set(true);
    } catch (error) {
      console.log('Error during editing: ' + error);
    }
  };

  return (
    <div className="admin-actions flex gap-x-2">
      <ActionBlogButton onClick={() => handleDeleteBlog()}>
        delete
      </ActionBlogButton>
      <ActionBlogButton onClick={() => handleEditBlog()}>edit</ActionBlogButton>
    </div>
  );
};

export default EditDeleteActions;
