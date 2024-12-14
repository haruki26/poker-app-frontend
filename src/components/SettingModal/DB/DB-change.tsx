import React, { useState } from "react";
import Btn from "../../Btn";

type UserInfo = {
    name: string;
    chip: number;
    isDB: boolean; // DB (Dealer Button) 状態を示す
};

type Props = {
    users: UserInfo[]; // ユーザー一覧
    updateUsers: (updatedUsers: UserInfo[]) => void; // ユーザー情報を更新する関数
};

const DBChange: React.FC<Props> = ({ users, updateUsers }) => {
    // DB を任意のユーザーに付加する関数
    const assignDB = (index: number) => {
        const updatedUsers = users.map((user, i) => ({
            ...user,
            isDB: i === index, // 選択されたユーザーのみ DB に設定
        }));
        updateUsers(updatedUsers);
    };

    return (
        <div className="p-4 w-full h-full bg-gray-100 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Assign Dealer Button (DB)</h1>
            <ul className="flex flex-col gap-3">
                {users.map((user, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-white p-2 rounded shadow"
                    >
                        <div className="text-lg">
                            {user.name}{" "}
                            {user.isDB && <span className="text-green-500">(DB)</span>}
                        </div>
                        <Btn
                            onClick={() => assignDB(index)}
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
