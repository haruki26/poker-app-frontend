import { Role } from "../game/types";

export interface UserData {
    name: string;
    chip: number;
    role: Role | null;
    isplaying: boolean;
}
