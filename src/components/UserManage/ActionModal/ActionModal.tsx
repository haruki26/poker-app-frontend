import { useState } from "react";
import ModalFrame from "../../Modal/ModalFrame";
import InputChip from "./InputChip";
import Actions from "./Actions";
import { InputAction } from "./types";
import { ActionType } from "../../../game/types";

type Props = {
    action: (actionType: ActionType, chip?: number) => void;
    closeModal: () => void;
};

const ActionModal: React.FC<Props> = ({
    action,
    closeModal,
}) => {
    const [isInputOpen, setIsInputOpen] = useState<InputAction | null>(null);
    const openInput = (kind: InputAction) => {
        setIsInputOpen(kind);
    };

    const handleClose = () => {
        setIsInputOpen(null);
        closeModal();
    };

    const handleInputChip = (chip: number) => {
        if (isInputOpen !== null) {
            action(isInputOpen, chip);
        };
        handleClose();
    };

    const handleNotInputChip = (actionType: ActionType) => {
        action(actionType);
        handleClose();
    };

    return (
        <ModalFrame modalName="Action" closeModal={closeModal}>
            <div className="h-72 flex justify-center">
                {!isInputOpen ? (
                    <Actions openInput={openInput} action={handleNotInputChip} />
                ) : (
                    <InputChip
                    actionType={isInputOpen}
                    action={handleInputChip}
                    />
                )}
            </div>
        </ModalFrame>
    );
};

export default ActionModal;
