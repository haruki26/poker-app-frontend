import { useMemo, useState } from "react";
import UserManage from "./components/UserManage/UserManage";
import { Game } from "./game/Game";
import { ActionType, GameStatus } from "./game/types";
import GameInfo from "./components/GameInfo/GameInfo";

const demoData = [
    {
        name: "hogehoge",
        chip: 200,
    },
    {
        name: "fugafuga",
        chip: 200,
    },
    {
        name: "piyopiyo",
        chip: 200,
    },
    {
        name: "foobar",
        chip: 200,
    }
];

const App: React.FC = () => {
    const game = useMemo(() => {
        const newGame = new Game();
        demoData.forEach((data) => {
            newGame.userManager.addUser(data.name, data.chip);
        });
        return newGame;
    }, []);
    
    const [gameState, setGameState] = useState<GameStatus>({
        pot: game.pot,
        currentBet: game.currentBet,
    });

    const handleAction = (index: number, action: ActionType, amount?: number) => {
        game.action(index, action, amount);
        setGameState({
            pot: game.pot,
            currentBet: game.currentBet,
        });
    }

    // game.setDealerButton(0);
    // game.startGame();
    // game.action(0, "bet", 10);
    // game.action(1, "call");
    // game.action(2, "raise", 20);
    // game.action(3, "all-in");

    
    return (
        <div className="m-1 h-full bg-green-50">
            <div className="h-1/4">
                <GameInfo potSize={gameState.pot} rate={gameState.currentBet} />
            </div>
            <div className="h-3/4">
                <UserManage userManager={game.userManager} action={handleAction} />
            </div>
        </div>
    )
}

export default App;
