import { useModal } from "../../Modal/useModal";
import ActionBtn from "../ActionBtn";
import ActionModal from "../ActionModal/ActionModal";
import Label from "./Label";

import { Action, ActionType, UserInfo } from "../../../game/types";

type Props = {
    userInfo: UserInfo;
    index: number;
    action: Action;
};

const User: React.FC<Props> = ({
    userInfo,
    index,
    action,
}) => {
    const { Modal, openModal, closeModal } = useModal();
    const handleAction = (actionType: ActionType, chip?: number) => {
        action(index, actionType, chip);
    };

    return (
        <>
        <div className="h-12 flex w-full gap-3">
            <Label className="w-32">
                <span className="text-3xl">
                    {userInfo.role}
                </span>
            </Label>
            <Label className="w-full">
                <span className="text-xl">
                    {userInfo.name}
                </span>
            </Label>
            <Label className="w-16">
                <span className="text-2xl">
                    {userInfo.chip}
                </span>
            </Label>
            <ActionBtn handleModal={openModal} isPlaying={userInfo.isPlaying} />
        </div>
        <Modal>
            <ActionModal action={handleAction} closeModal={closeModal} />
        </Modal>
        </>
    );
};

export default User;
