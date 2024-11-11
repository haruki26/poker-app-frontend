import { UserInfo } from "./types";
import { Role } from "./types";

export class User {
    public name: string;
    private _chip: number;
    public role: Role | "";
    public isPlaying: boolean;

    constructor(
        name: string,
        chip: number,
    ) {
        this.name = name;
        if (chip < 0) {
            throw new Error("Chip cannot be negative");
        };
        this._chip = chip;
        this.role = "";
        this.isPlaying = true;
    };

    get chip() : number {
        return this._chip;
    };

    set chip(chip: number) {
        if (chip < 0) {
            throw new Error("Chip cannot be negative");
        };
        this._chip = chip;
    };

    get userInfo(): UserInfo {
        return {
            name: this.name,
            chip: this._chip,
            role: this.role,
            isPlaying: this.isPlaying,
        };
    }

    public play = () => {
        this.isPlaying = true;
    }

    public bet = (amount: number) => {
        if (amount > this._chip) {
            console.log("Not enough chip");
            throw new Error("Not enough chip");
        };
        this._chip -= amount;
    };

    public allIn = () => {
        this.bet(this._chip);
    };

    public fold = () => {
        this.isPlaying = false;
    };
    
    public win = (amount: number) => {
        this._chip += amount;
    };
};
