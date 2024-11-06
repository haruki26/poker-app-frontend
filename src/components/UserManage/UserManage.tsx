import { UserInfo } from "../../types";
import Btn from "../Btn";
import { useModal } from "../Modal/useModal";
import AddUserModal from "./AddUser/AddUserModal";
import User from "./User";

type Props = {
    userInfo: UserInfo[];
};

const UserManage: React.FC<Props> = ({ userInfo }) => {
    const { Modal, openModal, closeModal } = useModal();
    const handleAddUser = (name: string, chip: number) => {
        userInfo.push({ name, chip, role: "" });
    }

    return (
        <div className="w-full p-2 bg-green-100 border border-slate-950 rounded-md">
            <ul className="flex flex-col gap-3">
                {userInfo.map((user, index) => (
                    <li key={index}>
                        <User userInfo={user} />
                    </li>
                ))}
            </ul>
            <Btn callback={openModal} bgColor="bg-slate-700" className="py-1">
                <span className="text-zinc-300 text-xl font-extrabol p-2">
                    Add User
                </span>
            </Btn>
            <Modal>
                <AddUserModal addUserInfo={handleAddUser} closeModal={closeModal} />
            </Modal>
        </div>
    );
};

export default UserManage;
