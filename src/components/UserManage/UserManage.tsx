import { useState } from "react";
import { UserInfo } from "../../types";
import { useModal } from "../Modal/useModal";
import User from "./User";
import { ManageContext } from "./ManageContext";
import AddUserBtn from "./AddUserBtn";
import RemoveUserBtn from "./RemoveUserBtn";


type Props = {
    userInfo: UserInfo[];
};

const UserManage: React.FC<Props> = ({ userInfo }) => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const { Modal, openModal, closeModal } = useModal();

    const handleAddUser = (name: string, chip: number) => {
        userInfo.push({ name, chip, role: "" });
    }

    const handleRemoveUser = (index: number) => {
        userInfo.splice(index, 1)
    }

    const handleCloseModal = () => {
        closeModal();
        setModalContent(null);
    }

    const contextValue = {
        userInfo,
        handleAddUser,
        handleRemoveUser,
        handleCloseModal
    };

    return (
        <div className="p-2 bg-green-100 border border-slate-950 rounded-md">
            <div className="flex flex-col gap-5">
                <ul className="flex flex-col gap-3">
                    {userInfo.map((user, index) => (
                        <li key={index}>
                            <User userInfo={user} />
                        </li>
                    ))}
                </ul>
                <div className="flex gap-3 justify-center items-center">
                    <AddUserBtn setContent={setModalContent} openModal={openModal} />
                    <RemoveUserBtn setContent={setModalContent} openModal={openModal} />
                </div>
            </div>
            {modalContent && (
                <Modal>
                    <ManageContext.Provider value={contextValue}>
                        {modalContent}
                    </ManageContext.Provider>
                </Modal>
            )}
        </div>
    );
};

export default UserManage;
