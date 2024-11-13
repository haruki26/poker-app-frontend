import { useMemo, useState, useEffect } from "react";
import { Game } from "../game/Game";
import { GameStatus, ActionType } from "../game/types";

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

export const useGame = () => {
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

    const updateGameState = () => {
        setGameState({
            pot: game.pot,
            currentBet: game.currentBet,
        });
    };

    const handleStartGame = () => {
        game.startGame();
        updateGameState();
    };

    const handleEndGame = (index: number) => {
        game.endGame(index);
        updateGameState();
    }

    const handleAction = (index: number, action: ActionType, amount?: number) => {
        game.action(index, action, amount);
        updateGameState();
    };

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            const confirmationMessage = "Oops！\nSessionStrageの実装めんどくてしてないからデータは消えるよ！";
            e.preventDefault();
            e.returnValue = confirmationMessage;
            return confirmationMessage;
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return {
        game,
        gameState,
        handleStartGame,
        handleEndGame,
        handleAction,
    };
};
