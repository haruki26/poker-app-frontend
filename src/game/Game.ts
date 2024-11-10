import { Action, Role } from "./types";
import { User } from "./User";

export class UserManager {
    public users: User[] = [];

    public addUser(name: string, chip: number) {
        if (this.users.length >= 9) {
            throw new Error("すでに9人参加しています");
        };

        this.users.push(new User(name, chip));
    };

    public removeUser(index: number) {
        try {
            this.users.splice(index, 1);
        } catch {
            throw new Error("ユーザーが存在しません");
        };
    };

    public setRole(index: number) {
        let isComplete = false;
        let idx = index;
        let role: Role = "DB";

        if (this.users.length < 2) {
            throw new Error("プレイヤーが2人未満です");
        };

        this.users.forEach((user) => {
            user.role = "";
        });

        while (!isComplete) {
            try {
                this.users[idx].role = role;

                switch (role) {
                    case "DB":
                        role = "SB";
                        break;
                    case "SB":
                        role = "BB";
                        break;
                    case "BB":
                        isComplete = true;
                };
                idx++;
            } catch {
                idx = 0;
            };
        };
    };
};

export class Game {
    public userManager = new UserManager();
    private _pot = 0;
    private _currentBet = 0;
    private _dealerButton = 0;
    private _blind = 1;

    get pot(): number {
        return this._pot;
    };

    get currentBet(): number {
        return this._currentBet;
    };

    get smallBlind(): number {
        return this._blind;
    };

    set blind(amount: number) {
        if (amount < 1) {
            throw new Error("0より小さい値は設定できません");
        };
        this._blind = amount;
    };

    public getPlayers() {
        return this.userManager.users;
    };

    public addUser(name: string, chip: number) {
        this.userManager.addUser(name, chip);
    };

    public removeUser(index: number) {
        this.userManager.removeUser(index);
    };

    public setDealerButton(index: number) {
        this.userManager.setRole(index);
        this._dealerButton = this.userManager.users.findIndex((user) => user.role === "DB");
    };

    public action(index: number, action: Action, amount?: number) {
        const amountChecker = (value: number | undefined): number => {
            if (value !== undefined) {
                return value;
            } else {
                throw new Error("ベット額を入力してください");
            }
        }

        switch (action) {
            case "bet":
                this.bet(index, amountChecker(amount));
                break;
            case "call":
                this.call(index);
                break;
            case "raise":
                this.raise(index, amountChecker(amount));
                break;
            case "all-in":
                this.allIn(index);
                break;
            case "fold":
                this.fold(index);
                break;
            case "check":
                break;
            default:
                throw new Error("不正なアクションです");
        };
    };

    private bet(index: number, amount: number) {
        if (amount < this._currentBet) {
            throw new Error("ベット額が足りません");
        };

        this.userManager.users[index].bet(amount);
        this._pot += amount;
        this._currentBet = amount;
    };

    private call(index: number) {
        this.bet(index, this._currentBet);
        this._pot += this._currentBet;
    };

    private raise(index: number, amount: number) {
        if (amount < this._currentBet) {
            throw new Error("ベット額が足りません");
        };

        this.bet(index, amount);
        this._pot += amount;
        this._currentBet = amount;
    };

    private allIn(index: number) {
        this.userManager.users[index].allIn();
        this._pot += this.userManager.users[index].chip;
    };

    private fold(index: number) {
        this.userManager.users[index].fold();
    };

    public startGame() {
        this.blindBet();
    };
    
    private blindBet() {
        this.bet(1, this._blind);
        this.bet(2, this._blind * 2);
        this._pot += this._blind * 3;
        this._currentBet = this._blind * 2
    };

    public endGame() {
        this.userManager.users.forEach((user) => {
            user.isPlaying = false;
        });
        this.userManager.setRole(this._dealerButton + 1);
        this._pot = 0;
        this._currentBet = 0;
    };
};
