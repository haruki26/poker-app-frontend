import { useState } from "react";
import { useModal } from "../Modal/useModal";
import User from "./User";
import AddUserBtn from "./AddUserBtn";
import RemoveUserBtn from "./RemoveUserBtn";
import { UserManager } from "../../game/Game";


type Props = {
    userManager: UserManager;
};

const UserManage: React.FC<Props> = ({ userManager }) => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const { Modal, openModal, closeModal } = useModal();
    const userInfo = userManager.users;

    const handleAddUser = (name: string, chip: number) => {
        userManager.addUser(name, chip);
    }

    const handleRemoveUser = (index: number) => {
        userManager.removeUser(index);
    }

    const handleCloseModal = () => {
        closeModal();
        setModalContent(null);
    }

    return (
        <div className="p-2 bg-green-100 border border-slate-950 rounded-md">
            <div className="flex flex-col gap-5">
                <ul className="flex flex-col gap-3">
                    {userInfo.map((user, index) => (
                        <li key={index}>
                            <User
                                name={user.name}
                                chip={user.getChip()}
                                role={user.role}
                            />
                        </li>
                    ))}
                </ul>
                <div className="flex gap-3 justify-center items-center">
                    <AddUserBtn
                        setContent={setModalContent}
                        openModal={openModal}
                        handleAddUser={handleAddUser}
                        closeModal={handleCloseModal}
                    />
                    <RemoveUserBtn
                        setContent={setModalContent}
                        openModal={openModal}
                        userNames={userInfo.map((user) => user.name)}
                        handleRemoveUser={handleRemoveUser}
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
