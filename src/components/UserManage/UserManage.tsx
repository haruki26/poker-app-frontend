import { UserInfo } from "../../types";
import User from "./User";

type Props = {
    userInfo: UserInfo[];
};

const UserManage: React.FC<Props> = ({ userInfo }) => {
    return (
        <div className="w-full p-2 border border-slate-950 rounded-md">
            <ul className="flex flex-col gap-3">
                {userInfo.map((user, index) => (
                    <li key={index}>
                        <User userInfo={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManage;
