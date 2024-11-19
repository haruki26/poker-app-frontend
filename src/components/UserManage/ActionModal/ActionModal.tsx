import { useContext, useState } from "react";
import ModalFrame from "../../Modal/ModalFrame";
import InputChip from "./InputChip";
import Actions from "./Actions";
import { InputAction, NotInputAction } from "./types";
import { ActionType } from "../../../game/types";
import { openErrorModalContext } from "../../../hook/useErrorModal";

type Props = {
    action: (actionType: ActionType, chip?: number) => void;
    closeModal: () => void;
};

const ActionModal: React.FC<Props> = ({
    action,
    closeModal,
}) => {
    const [isInputOpen, setIsInputOpen] = useState<InputAction | null>(null);
    const openErrorModal = useContext(openErrorModalContext)
    const openInput = (kind: InputAction) => {
        setIsInputOpen(kind);
    };

    const handleClose = () => {
        setIsInputOpen(null);
        closeModal();
    };

    const handleAction = (actionType: ActionType, chip?: number) => {
        try {
            action(actionType, chip);
        } catch (error) {
            if (error instanceof Error) {
                openErrorModal(error);
            };
        };
    };

    const handleInputChip = (chip: number) => {
        if (isInputOpen !== null) {
            handleAction(isInputOpen, chip);
        };
        handleClose();
    };

    const handleNotInputChip = (actionType: NotInputAction) => {
        handleAction(actionType);
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
