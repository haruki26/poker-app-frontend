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
            throw new Error("0より小さい値は設定できません");
        };
        this._chip = chip;
        this.role = "";
        this.isPlaying = false;
    };

    get chip() : number {
        return this._chip;
    };

    set chip(chip: number) {
        if (chip < 0) {
            throw new Error("0より小さい値は設定できません");
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
    };

    public play = () => {
        this.isPlaying = true;
    };

    public notPlay = () => {
        this.isPlaying = false;
    };

    public bet = (amount: number) => {
        if (amount > this._chip) {
            throw new Error("見栄をはらないでください");
        };
        this._chip -= amount;
    };

    public allIn = () => {
        this.bet(this._chip);
    };

    public fold = () => {
        this.notPlay();
    };
    
    public win = (amount: number) => {
        if (!this.isPlaying) {
            throw new Error("チキンには配当を渡せません");
        };
        this._chip += amount;
    };
};
