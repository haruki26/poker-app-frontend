type Props = {
    handleModal: () => void;
};

const ActionBtn: React.FC<Props> = ({ handleModal }) => {
    return (
        <div className="h-full flex items-center justify-center">
            <button
            className="h-8 bg-blue-500 hover:bg-blue-700 rounded-md"
            onClick={handleModal}>
                <span className="text-white font-bold py-2 px-4">Action</span>
            </button>
        </div>
    );
};

export default ActionBtn;
