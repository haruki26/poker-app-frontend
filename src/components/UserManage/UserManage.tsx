import { useEffect, useState } from "react";
import { useModal } from "../Modal/useModal";
import User from "./User/User";
import AddUserBtn from "./AddUserBtn";
import RemoveUserBtn from "./RemoveUserBtn";
import { Game } from "../../game/Game";
import { Action } from "../../game/types";

type Props = {
    game: Game;
    action: Action;
};

const UserManage: React.FC<Props> = ({ game, action }) => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
    const { Modal, openModal, closeModal } = useModal();
    const [userInfo, setUserInfo] = useState(game.userManager.users);

    useEffect(() => {
        setUserInfo(game.userManager.users);
    }, [game.userManager.users]);

    const handleCloseModal = () => {
        closeModal();
        setModalContent(null);
    };

    return (
        <>
        <div className="h-full p-2 bg-green-100 border border-slate-950 rounded-md">
            <div className="h-5/6 flex flex-col gap-5 overflow-y-scroll">
                <ul className="flex flex-col gap-3">
                    {userInfo.map((user, index) => (
                        <li key={index}>
                            <User
                                userInfo={user.userInfo}
                                index={index}
                                action={action}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-1/6 flex gap-3 justify-center items-center">
                <AddUserBtn
                    setContent={setModalContent}
                    openModal={openModal}
                    handleAddUser={game.addUser}
                    closeModal={handleCloseModal}
                />
                <RemoveUserBtn
                    setContent={setModalContent}
                    openModal={openModal}
                    userNames={game.userManager.getUserNames()}
                    handleRemoveUser={game.userManager.removeUser}
                    closeModal={handleCloseModal}
                />
            </div>
        </div>
        {modalContent && (
            <Modal>
                {modalContent}
            </Modal>
        )}
        </>
    );
};

export default UserManage;
