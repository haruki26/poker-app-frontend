import Btn from "../Btn";

type Props = {
    handleModal: () => void;
    isPlaying: boolean;
};

const ActionBtn: React.FC<Props> = ({ handleModal, isPlaying }) => {
    return (
        <Btn onClick={handleModal} className="p-2  absolute bottom-40   bg-gradient-to-br from-blue-300 to-gray-300 " disabled={!isPlaying}>
            <span>Action</span>
        </Btn>
    );
};

export default ActionBtn;
