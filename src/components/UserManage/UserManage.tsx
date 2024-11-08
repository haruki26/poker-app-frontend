import { useState } from "react";
import { UserInfo } from "../../types";
import { useModal } from "../Modal/useModal";
import User from "./User";
import UserManageBtn from "./UserManageBtn";
import { ManageContext } from "./ManageContext";


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

    const contextValue = {
        userInfo,
        handleAddUser,
        handleRemoveUser,
        closeModal
    };

    return (
        <ManageContext.Provider value={contextValue}>
            <div className="p-2 bg-green-100 border border-slate-950 rounded-md">
                <div className="flex flex-col gap-5">
                    <ul className="flex flex-col gap-3">
                        {userInfo.map((user, index) => (
                            <li key={index}>
                                <User userInfo={user} />
                            </li>
                        ))}
                    </ul>
                        <UserManageBtn
                            setContent={setModalContent}
                            openModal={openModal}
                        />
                </div>
                <Modal>
                    {modalContent}
                </Modal>
            </div>
        </ManageContext.Provider>
    );
};

export default UserManage;
