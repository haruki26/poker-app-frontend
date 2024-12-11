import Btn from "../Btn";
import ModalFrame from "../Modal/ModalFrame";

type Props = {
    closeModal: () => void;
};

const SettingModal: React.FC<Props> = ({ closeModal }) => {
    return (
        <ModalFrame modalName="Setting" closeModal={closeModal}>
            <div className="flex flex-col space-y-4">
                <Btn
                    //onClick
                    className="w-24 py-1"
                    bgColor="bg-slate-700"
                    hoverBgColor="bg-slate-900"
                >
                    <span className="text-white text-xl font-bold p-2">
                        Change DB
                    </span>
                </Btn>
                
                <Btn
                    //onclick
                    className="w-24 py1"
                    bgColor="bg-slate-700"
                    hoverBgColor="bg-slate-900"
                >
                    <span className="text-white text-xl font-bold p-2">
                        Cange SB
                    </span>
                </Btn>
            </div>
        </ModalFrame>
    );
};

export default SettingModal;
