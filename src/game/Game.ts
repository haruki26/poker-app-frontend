import { Role } from "./types";
import User from "./User";

class UserManager {
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
        }
    };

    public setRole(index: number) {
        let isComplete = false;
        let idx = index;
        let role: Role = "DB";

        if (this.users.length < 2) {
            throw new Error("プレイヤーが2人未満です");
        }

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
}

class Game {
    private userManager = new UserManager();
    private pot = 0;
    private currentBet = 0;
    private dealerButton = 0;
    private blind = 1;

    public getPot() {
        return this.pot;
    };

    public getCurrentBet() {
        return this.currentBet;
    };

    public getSmallBlind() {
        return this.blind;
    };

    public setBlind(amount: number) {
        if (amount < 1) {
            throw new Error("0より小さい値は設定できません");
        }
        this.blind = amount;
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
        this.dealerButton = this.userManager.users.findIndex((user) => user.role === "DB");
    }

    public bet(index: number, amount: number) {
        if (amount < this.currentBet) {
            throw new Error("ベット額が足りません");
        };

        this.userManager.users[index].bet(amount);
        this.pot += amount;
        this.currentBet = amount;
    };

    public call(index: number) {
        this.bet(index, this.currentBet);
        this.pot += this.currentBet;
    };

    public raise(index: number, amount: number) {
        if (amount < this.currentBet) {
            throw new Error("ベット額が足りません");
        };

        this.bet(index, amount);
        this.pot += amount;
        this.currentBet = amount;
    };

    public allIn(index: number) {
        this.userManager.users[index].allIn();
        this.pot += this.userManager.users[index].getChip();
    };

    public fold(index: number) {
        this.userManager.users[index].fold();
    };

    public startGame() {
        this.blindBet();
    };
    
    private blindBet() {
        this.bet(1, this.blind);
        this.bet(2, this.blind * 2);
        this.pot += this.blind * 3;
        this.currentBet = this.blind * 2
    };

    public endGame() {
        this.userManager.users.forEach((user) => {
            user.isPlaying = false;
        });
        this.userManager.setRole(this.dealerButton + 1);
        this.pot = 0;
        this.currentBet = 0;
    };
};

export default Game;
