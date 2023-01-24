import closeIcon from '../../assets/img/icons/close-icon.svg';

interface Props {
  closeModal: () => void;
}

const ModalHeader = ({ closeModal }: Props) => {
  return (
    <div className="modal-header flex justify-end w-full">
      <button className="outline-none" onClick={closeModal}>
        <img src={closeIcon} alt="zavřít okno - ikona" />
      </button>
    </div>
  );
};

export default ModalHeader;
