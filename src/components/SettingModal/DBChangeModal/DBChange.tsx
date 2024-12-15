import { UserInfo } from "../../../game/types";
import Btn from "../../Btn";

type Props = {
    users: Pick<UserInfo, "name" | "role">[]; // ユーザー一覧
    handleSetRole: (index: number) => void; // ユーザー情報を更新する関数
};

const DBChange: React.FC<Props> = ({ users, handleSetRole }) => {
    const userInfos = users.map((user) => ({
        name: user.name,
        role: user.role,
        isDB: user.role === "DB",
    }));

    return (
        <div className="p-4 w-full h-full flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Assign Dealer Button (DB)</h1>
            <ul className="flex flex-col gap-3">
                {userInfos.map((user, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center p-2"
                    >
                        <div className="flex gap-3 text-lg">
                            <span className="text-gray900 after:content-[' ']">
                                {user.name}
                            </span>
                            {user.isDB 
                                ? <span className="text-green-500">(DB)</span>
                                : <span className="text-gray-400">({user.role})</span>
                            }
                        </div>
                        <Btn
                            onClick={() => handleSetRole(index)}
                            className={`w-24 ${
                                user.isDB
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-700"
                            }`}
                            disabled={user.isDB} // DB に設定済みなら無効化
                        >
                            {user.isDB ? "Assigned" : "Set DB"}
                        </Btn>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DBChange;
