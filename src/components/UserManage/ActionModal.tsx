import Modal from "../Modal/Modal"

type Props = {
    closeModal: () => void;
};

const ActionModal: React.FC<Props> = ({ closeModal }) => {
    return (
        <Modal closeModal={closeModal}>
            <div className="w-96 p-4 bg-slate-950 rounded-md">
                <h1 className="text-xl text-center text-white">Action Modal</h1>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="px-4 py-2 bg-slate-800 rounded-md text-white">Accept</button>
                    <button className="px-4 py-2 bg-slate-800 rounded-md text-white">Decline</button>
                </div>
            </div>
        </Modal>
    );
};

export default ActionModal;
