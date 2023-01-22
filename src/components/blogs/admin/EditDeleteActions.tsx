import ActionBlogButton from './ActionBlogButton';

const EditDeleteActions = () => {
  return (
    <div className="admin-actions flex gap-x-2">
      <ActionBlogButton onClick={() => console.log('delete')}>
        delete
      </ActionBlogButton>
      <ActionBlogButton onClick={() => console.log('edit')}>
        edit
      </ActionBlogButton>
    </div>
  );
};

export default EditDeleteActions;
