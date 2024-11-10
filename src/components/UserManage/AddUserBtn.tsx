import Btn from "../Btn";
import AddUserModal, { AddUserModalProps } from "./ManageModal/AddUserModal";

type Props = {
    setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    openModal: () => void;
} & AddUserModalProps;

const AddUserBtn: React.FC<Props> = ({
    setContent,
    openModal,
    handleAddUser,
    closeModal
}) => {
    const handleClick = () => {
        setContent(
            <AddUserModal
                handleAddUser={handleAddUser}
                closeModal={closeModal}
            />
        );
        openModal();
    };

    return (
        <Btn
            onClick={handleClick}
            className="w-32 h-10 m-auto"
            bgColor="bg-lime-500"
            hoverBgColor="bg-lime-600">
            <span className="text-zinc-900 text-xl font-extrabol p-2">
                Add
            </span>
        </Btn>
    );
};

export default AddUserBtn;
