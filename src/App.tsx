import UserManage from "./components/UserManage/UserManage";
import GameInfo from "./components/GameInfo/GameInfo";
import GameStartBtn from "./components/GameCtlBtn/GameStartBtn";
import GameEndBtn from "./components/GameCtlBtn/GameEndBtn";
import { useGame } from "./hook/useGame";
import setting from "./../public/setting.svg"

const App: React.FC = () => {
    const { game, gameState, handleAction, handleStartGame, handleEndGame } = useGame();

    game.setDealerButton(3);
    
    return (
        <div className="h-svh p-1 bg-green-500">
            <div className="h-1/4">
                <div className="h-1/4 w-full flex justify-end p-2">
                    <img src={setting} alt="setting" className="w-10 h-10" />
                </div>
                <div className="h-3/4">
                    <GameInfo potSize={gameState.pot} rate={gameState.currentBet} />
                </div>
            </div>
            <div className="h-3/4 flex flex-col gap-5 p-1">
                <div className="h-5/6">
                    <UserManage game={game} action={handleAction} />
                </div>
                <div className="h-1/6 flex justify-between">
                    <GameStartBtn startGame={handleStartGame} />
                    <GameEndBtn
                        userNames={game.userManager.getUserNames()}
                        endGame={handleEndGame}
                    />
                </div>
            </div>
        </div>
    )
}

export default App;
