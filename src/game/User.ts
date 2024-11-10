import { Role } from "./types";

export class User {
    public name: string;
    private _chip: number;
    public role: Role | "" = "";
    public isPlaying: boolean = false;

    constructor(
        name: string,
        chip: number,
    ) {
        this.name = name;
        if (chip < 0) {
            throw new Error("Chip cannot be negative");
        };
        this._chip = chip;
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

    public play() {
        this.isPlaying = true;
    }

    public bet(amount: number) {
        if (amount > this._chip) {
            throw new Error("Not enough chip");
        };
        this._chip -= amount;
    };

    public allIn() {
        this.bet(this._chip);
    };

    public fold() {
        this.isPlaying = false;
    };
    
    public win(amount: number) {
        this._chip += amount;
    };
}

export default User;
