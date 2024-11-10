import { createContext } from "react";
import { UserInfo } from "../../types";

type ManageContextType = {
    userInfo: UserInfo[];
    handleAddUser: (name: string, chip: number) => void;
    handleRemoveUser: (index: number) => void;
    handleCloseModal: () => void;
};

export const ManageContext = createContext<ManageContextType>({
    userInfo: [],
    handleAddUser: () => {},
    handleRemoveUser: () => {},
    handleCloseModal: () => {},
});
