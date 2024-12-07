import ModalFrame from "../Modal/ModalFrame";

type Props = {
    closeModal: () => void;
};

const SettingModal: React.FC<Props> = ({ closeModal }) => {
    return (
        <ModalFrame modalName="Setting" closeModal={closeModal}>
            
        </ModalFrame>
    );
};

export default SettingModal;
