import { UserInfo } from "../../types";
import { useModal } from "../Modal/useModal";
import ActionBtn from "./ActionBtn";
import ActionModal from "./ActionModal";
import Label from "./Label";

type Props = {
    userInfo: UserInfo;
};

const User: React.FC<Props> = ({ userInfo }) => {
    const { modalRef, isVisible, openModal, closeModal } = useModal();

    return (
        <div className="h-12 flex w-full gap-3">
            <Label className="w-12">
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
            <ActionBtn handleModal={openModal} />
            {isVisible && (
                <div ref={modalRef}>
                    <ActionModal closeModal={closeModal} />
                </div>
            )}
        </div>
    );
};

export default User;
