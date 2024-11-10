import { Role } from "./types";

class User {
    public name: string;
    private chip: number;
    public role: Role | "" = "";
    public isPlaying: boolean = false;

    constructor(
        name: string,
        chip: number,
    ) {
        this.name = name;
        this.chip = 0;

        this.setChip(chip);
    };

    public getChip() {
        return this.chip;
    };

    public setChip(chip: number) {
        if (chip < 0) {
            throw new Error("Chip cannot be negative");
        };
        this.chip = chip;
    };

    public play() {
        this.isPlaying = true;
    }

    public bet(amount: number) {
        if (amount > this.chip) {
            throw new Error("Not enough chip");
        };
        this.chip -= amount;
    };

    public allIn() {
        this.bet(this.chip);
    };

    public fold() {
        this.isPlaying = false;
    };
    
    public win(amount: number) {
        this.chip += amount;
    };
}

export default User;
