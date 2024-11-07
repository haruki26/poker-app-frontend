import Btn from "../Btn";

type Props = {
    handleModal: () => void;
};

const ActionBtn: React.FC<Props> = ({ handleModal }) => {
    return (
        <Btn onClick={handleModal} className="p-1 bg-green-500 hover:bg-green-700">
            <span>Action</span>
        </Btn>
    );
};

export default ActionBtn;
