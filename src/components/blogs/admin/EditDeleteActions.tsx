import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import ActionBlogButton from './ActionBlogButton';

interface Props {
  docId: string;
}

const EditDeleteActions = ({ docId }: Props) => {
  const handleDeleteItem = async () => {
    try {
      const docRef = doc(db, 'blog-articles', docId);
      await deleteDoc(docRef);
      window.location.reload();
    } catch (error) {
      console.log('Error during deletion: ' + error);
    }
  };

  return (
    <div className="admin-actions flex gap-x-2">
      <ActionBlogButton onClick={() => handleDeleteItem()}>
        delete
      </ActionBlogButton>
      <ActionBlogButton onClick={() => console.log('edit')}>
        edit
      </ActionBlogButton>
    </div>
  );
};

export default EditDeleteActions;
