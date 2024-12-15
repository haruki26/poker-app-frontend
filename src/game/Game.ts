import { User } from "./User";
import type { ActionType, Role, UserInfo } from "./types";

export class UserManager {
    public users: User[] = [];
    private _dealerButton: number = 0;

    get dealerButton(): number {
        return this._dealerButton;
    };

    set dealerButton(index: number) {
        this._dealerButton = index;
    };

    get smallBlind(): number {
        return this.users.findIndex((user) => user.userInfo.role === "SB");
    };

    get bigBlind(): number {
        return this.users.findIndex((user) => user.userInfo.role === "BB");
    };

    public addUser = (name: string, chip: number) => {
        if (this.users.length >= 9) {
            throw new Error("すでに9人参加しています");
        };

        this.users.push(new User(name, chip));

        if (this.users.length > 2) {
            this.setRole(this._dealerButton);
        };
    };

    public removeUser = (index: number) => {
        try {
            this.users.splice(index, 1);
        } catch {
            throw new Error("ユーザーが存在しません");
        };

        if (this.users.length < 2) {
            this.users.forEach((user) => {
                user.role = "";
            });
        } else {
            this.setRole(this._dealerButton);
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
                        this._dealerButton = idx;
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

    public getUserNames = (onlyPlaying: boolean = false): string[] => {
        let format: string[] = [];
        if (onlyPlaying) {
            this.users.forEach((user) => {
                if (user.userInfo.isPlaying) {
                    format.push(user.userInfo.name);
                };
            })
        } else {
            format = this.users.map((user) => user.userInfo.name);
        }
        return format;
    }
};

export class Game {
    public userManager: UserManager;
    private _pot: number;
    private _currentBet: number;
    private _blind: number;
    private _isRunning: boolean;

    constructor() {
        this.userManager = new UserManager();
        this._pot = 0;
        this._currentBet = 0;
        this._blind = 1;
        this._isRunning = false;
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

    set smallBlind(amount: number) {
        if (amount < 1) {
            throw new Error("0より小さい値は設定できません");
        };
        this._blind = amount;
    };

    get isRunning(): boolean {
        return this._isRunning;
    };

    public setDealerButton = (index: number) => {
        this.userManager.setRole(index);
        this.userManager.dealerButton = this.userManager.users.findIndex(
            (user) => user.userInfo.role === "DB"
        );
        console.log(this.userManager.dealerButton);
    };

    public action = (index: number, action: ActionType, amount?: number) => {
        const amountChecker = (value: number | undefined): number => {
            if (value !== undefined) {
                return value;
            } else {
                throw new Error("ベット額を入力してください");
            }
        };

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
        if (amount < this._currentBet) {
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
        if (amount < this._currentBet) {
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
        this._isRunning = true;

        this._blindBet();
        console.log("Game Start");
    };
    
    private _blindBet = () => {
        this._bet(this.userManager.smallBlind, this._blind);
        this._bet(this.userManager.bigBlind, this._blind * 2);
    };

    public nextStpe = () => {
        this._currentBet = 0;
    };

    public endGame = (index: number) => {
        this.userManager.users[index].win(this._pot);

        this.userManager.users.forEach((user) => {
            if (user.userInfo.isPlaying) {
                user.notPlay();
            };
        });
        this._isRunning = false;

        this.userManager.setRole(
            this.userManager.dealerButton + 1
        );
        this._pot = 0;
        this._currentBet = 0;
        console.log("Game End");
        console.log(this.userManager.dealerButton)
    };
};
