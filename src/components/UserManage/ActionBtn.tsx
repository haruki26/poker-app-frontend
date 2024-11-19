import Btn from "../Btn";

type Props = {
    handleModal: () => void;
    isPlaying: boolean;
};

const ActionBtn: React.FC<Props> = ({ handleModal, isPlaying }) => {
    return (
        <Btn onClick={handleModal} className="p-1" disabled={!isPlaying}>
            <span>Action</span>
        </Btn>
    );
};

export default ActionBtn;
