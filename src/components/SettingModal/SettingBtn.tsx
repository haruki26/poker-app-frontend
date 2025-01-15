import Btn from "../Btn";

type Props = {
    handleModal: () => void;
    isPlaying: boolean;
};

const SettingBtn: React.FC<Props> = ({ handleModal, isPlaying }) => {
    return (
        <Btn onClick={handleModal} className="p-2  flex  bg-gradient-to-br from-blue-300 to-gray-300 " disabled={!isPlaying}>
            <span>Setting</span>
        </Btn>
    );
};

export default SettingBtn;