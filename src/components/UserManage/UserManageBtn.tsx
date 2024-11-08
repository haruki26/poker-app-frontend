import Btn from "../Btn";
import AddUserModal from "./ManageUser/AddUserModal";
import RemoveUserModal from "./ManageUser/RemoveUserModal";

const style = "w-32 h-10 m-auto"

type Props = {
    setContent: (content: React.ReactNode) => void;
    openModal: () => void;
}

const UserManageBtn: React.FC<Props> = ({
    setContent,
    openModal,
}) => {
    const handleContent = (kind: "add" | "remove") => {
        switch (kind) {
            case "add":
                setContent(<AddUserModal />);
                break;
            case "remove":
                setContent(<RemoveUserModal />)
                break;
        }
        openModal();
    }

    return (
        <div className="flex gap-3 justify-center items-center">
            <Btn
            onClick={() => handleContent("add")}
            className={style}
            bgColor="bg-lime-500"
            hoverBgColor="bg-lime-600"
            >
                <span className="text-zinc-900 text-xl font-extrabol p-2">
                    Add
                </span>
            </Btn>
            <Btn
            onClick={() => handleContent("remove")}
            className={style}
            bgColor="bg-slate-500"
            hoverBgColor="bg-slate-700">
                <span className="text-zinc-300 text-xl font-extrabol p-2">
                    Remove
                </span>
            </Btn>
        </div>
    );
}

export default UserManageBtn;
