export type Role = "DB" | "SB" | "BB";
export type ActionType = "bet" | "raise" | "call" | "fold" | "check" | "all-in";

export type UserInfo = {
    name: string;
    chip: number;
    role: Role | "";
    isPlaying: boolean;
};

export type Action = (index: number, action: ActionType, amount?: number) => void
