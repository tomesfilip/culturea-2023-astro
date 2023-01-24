import closeIcon from '../../../assets/img/icons/close-icon.svg';
import { isAuthModalOpen } from '../../../stores/authModalStore';

const BlogAuthFormHeader = () => {
  return (
    <div className="blog-auth-form-header flex justify-end w-full">
      <button
        className="outline-none"
        onClick={() => isAuthModalOpen.set(false)}
      >
        <img src={closeIcon} alt="zavřít okno - ikona" />
      </button>
    </div>
  );
};

export default BlogAuthFormHeader;
