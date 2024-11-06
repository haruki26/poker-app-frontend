import Btn from "../Btn";

type Props = {
    modalName: string;
    closeModal: () => void;
    children: React.ReactNode;
};

const ModalFrame: React.FC<Props> = ({ modalName, closeModal, children }) => {
    return (
        <div className="w-80 bg-emerald-600 rounded-md">
            <div className="w-full py-2 bg-emerald-800 rounded-t-md">
                <h1 className="text-3xl text-center text-zinc-400">{modalName}</h1>
            </div>
            <div className="flex justify-center py-2">
                {children}
            </div>
            <div className="flex justify-center my-4">
                <Btn callback={closeModal} bgColor="bg-slate-700" className="w-24 py-1">
                    <span className="text-zinc-300 text-xl font-extrabol p-2">
                        Close
                    </span>
                </Btn>
            </div>
        </div>
    );
};

export default ModalFrame;
