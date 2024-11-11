import { useState } from "react";
import { useModal } from "../Modal/useModal";
import User from "./User/User";
import AddUserBtn from "./AddUserBtn";
import RemoveUserBtn from "./RemoveUserBtn";
import { UserManager } from "../../game/Game";
import { Action } from "../../game/types";

type Props = {
    userManager: UserManager;
    action: Action;
};

const UserManage: React.FC<Props> = ({ userManager, action }) => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const { Modal, openModal, closeModal } = useModal();
    const userInfo = userManager.users;

    const handleCloseModal = () => {
        closeModal();
        setModalContent(null);
    };

    return (
        <div className="p-2 bg-green-100 border border-slate-950 rounded-md">
            <div className="flex flex-col gap-5">
                <ul className="flex flex-col gap-3">
                    {userInfo.map((user, index) => (
                        <li key={index}>
                            <User
                                userInfo={user.userInfo}
                                action={action}
                            />
                        </li>
                    ))}
                </ul>
                <div className="flex gap-3 justify-center items-center">
                    <AddUserBtn
                        setContent={setModalContent}
                        openModal={openModal}
                        handleAddUser={userManager.addUser}
                        closeModal={handleCloseModal}
                    />
                    <RemoveUserBtn
                        setContent={setModalContent}
                        openModal={openModal}
                        userNames={userInfo.map((user) => user.name)}
                        handleRemoveUser={userManager.removeUser}
                        closeModal={handleCloseModal}
                    />
                </div>
            </div>
            {modalContent && (
                <Modal>
                    {modalContent}
                </Modal>
            )}
        </div>
    );
};

export default UserManage;
