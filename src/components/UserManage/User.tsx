import { Role } from "../../game/types";
import { useModal } from "../Modal/useModal";
import ActionBtn from "./ActionBtn";
import ActionModal from "./ActionModal/ActionModal";
import Label from "./Label";

type Props = {
    name: string;
    chip: number;
    role: Role | "";
};

const User: React.FC<Props> = ({
    name,
    chip,
    role
}) => {
    const { Modal, openModal, closeModal } = useModal();

    return (
        <div className="h-12 flex w-full gap-3">
            <Label className="w-32">
                <span className="text-3xl">
                    {role}
                </span>
            </Label>
            <Label className="w-full">
                <span className="text-xl">
                    {name}
                </span>
            </Label>
            <Label className="w-16">
                <span className="text-2xl">
                    {chip}
                </span>
            </Label>
            <ActionBtn handleModal={openModal} />
            <Modal>
                <ActionModal closeModal={closeModal} />
            </Modal>
        </div>
    );
};

export default User;
