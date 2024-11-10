import Btn from "../Btn";
import AddUserModal from "./ManageModal/AddUserModal";

type Props = {
    content: React.ReactNode;
    setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    openModal: () => void;
    children: React.ReactNode;
}

const UserManageBtn: React.FC<Props> = ({
    setContent,
    openModal
}) => {
    const handleClick = () => {
        setContent(<AddUserModal />);
        openModal();
    };

    return (
        <Btn onClick={handleClick}>
            Add
        </Btn>
    );
};

export default UserManageBtn;
