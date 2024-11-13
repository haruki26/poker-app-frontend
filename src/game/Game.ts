import { ActionType, Role, UserInfo } from "./types";
import { User } from "./User";

export class UserManager {
    public users: User[] = [];

    public addUser = (name: string, chip: number) => {
        if (this.users.length >= 9) {
            throw new Error("すでに9人参加しています");
        };

        this.users.push(new User(name, chip));
    };

    public removeUser = (index: number) => {
        try {
            this.users.splice(index, 1);
        } catch {
            throw new Error("ユーザーが存在しません");
        };
    };

    public setRole = (index: number) => {
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

    public bet = (index: number, amount: number) => {
        this.users[index].bet(amount);
    };

    public allIn = (index: number) => {
        this.users[index].allIn();
    };

    public fold = (index: number) => {
        this.users[index].fold();
    };

    public getUserInfo = (index: number): UserInfo => {
        return this.users[index].userInfo;
    };

    public getUserNames = (): string[] => {
        return this.users.map((user) => user.userInfo.name);
    }
};

export class Game {
    public userManager: UserManager;
    private _pot: number;
    private _currentBet: number;
    private _dealerButton: number;
    private _blind: number;

    constructor() {
        this.userManager = new UserManager();
        this._pot = 0;
        this._currentBet = 0;
        this._dealerButton = 0;
        this._blind = 1;
    };

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

    public getPlayers = () => {
        return this.userManager.users;
    };

    public addUser = (name: string, chip: number) => {
        console.log(this.userManager.users);
        this.userManager.addUser(name, chip);
        this.setDealerButton(this._dealerButton);
        console.log(this.userManager.users);
    };

    public removeUser = (index: number) => {
        this.userManager.removeUser(index);
    };

    public setDealerButton = (index: number) => {
        this.userManager.setRole(index);
        this._dealerButton = this.userManager.users.findIndex(
            (user) => user.userInfo.role === "DB"
        );
        console.log(this._dealerButton)
    };

    public action = (index: number, action: ActionType, amount?: number) => {
        const amountChecker = (value: number | undefined): number => {
            if (value !== undefined) {
                return value;
            } else {
                throw new Error("ベット額を入力してください");
            }
        }

        switch (action) {
            case "bet":
                this._bet(index, amountChecker(amount));
                break;
            case "call":
                this._call(index);
                break;
            case "raise":
                this._raise(index, amountChecker(amount));
                break;
            case "all-in":
                this._allIn(index);
                break;
            case "fold":
                this._fold(index);
                break;
            case "check":
                break;
            default:
                throw new Error("不正なアクションです");
        };
        console.log(this._pot, this._currentBet);
    };

    private _bet = (index: number, amount: number) => {
        if (amount < 0) {
            throw new Error("ベット額が足りません");
        };

        this.userManager.bet(index, amount);
        this._pot += amount;
        this._currentBet = amount;
    };

    private _call = (index: number) => {
        this._bet(index, this._currentBet);
    };

    private _raise = (index: number, amount: number) => {
        if (amount <= this._currentBet) {
            throw new Error("レイズ額が足りません");
        };
        this._bet(index, amount);
    };

    private _allIn = (index: number) => {
        const { chip } = this.userManager.getUserInfo(index);
        this._pot += chip;
        this._currentBet = chip;
        this.userManager.allIn(index);
    };

    private _fold = (index: number) => {
        this.userManager.fold(index);
    };

    public startGame = () => {
        this.userManager.users.forEach((user) => {
            user.play();
        });
        this._blindBet();
        console.log("Game Start");
    };
    
    private _blindBet = () => {
        const sb = this.userManager.users.findIndex((user) => user.userInfo.role === "SB");
        const bb = this.userManager.users.findIndex((user) => user.userInfo.role === "BB");

        this._bet(sb, this._blind);
        this._bet(bb, this._blind * 2);
    };

    public endGame = (index: number) => {
        this.userManager.users[index].win(this._pot);
        this.userManager.users.forEach((user) => {
            user.isPlaying = false;
        });
        this.userManager.setRole(this._dealerButton + 1);
        this._pot = 0;
        this._currentBet = 0;
    };
};
