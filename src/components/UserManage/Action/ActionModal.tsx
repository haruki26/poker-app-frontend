import { useState } from "react";
import ModalFrame from "../../Modal/ModalFrame";
import InputChip from "./InputChip";
import Actions from "./Actions";
import { InputAction } from "./types";

type Props = {
    closeModal: () => void;
};

const ActionModal: React.FC<Props> = ({ closeModal }) => {
    const [isInputOpen, setIsInputOpen] = useState<InputAction | null>(null);
    const openInput = (kind: InputAction) => {
        setIsInputOpen(kind);
    }

    return (
        <ModalFrame modalName="Action" closeModal={closeModal}>
            <div className="h-72 flex justify-center">
                {!isInputOpen ? (
                    <Actions openInput={openInput} closeModal={closeModal} />
                ) : (
                    <InputChip
                    kind={isInputOpen}
                    action={() => console.log(`Action: ${isInputOpen}`)}
                    closeModal={closeModal}
                    />
                )}
            </div>
        </ModalFrame>
    );
};

export default ActionModal;
