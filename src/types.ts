export type Role = "" | "SB" | "BB" | "DB";

export type UserInfo = {
    name: string;
    chip: number;
    role: Role;
};
