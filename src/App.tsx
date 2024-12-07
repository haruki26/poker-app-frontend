import UserManage from "./components/UserManage/UserManage";
import GameInfo from "./components/GameInfo/GameInfo";
import GameStartBtn from "./components/GameCtlBtn/GameStartBtn";
import GameEndBtn from "./components/GameCtlBtn/GameEndBtn";
import { useGame } from "./hook/useGame";
import setting from "./../public/setting.svg"
import { useErrorModal } from "./hook/useErrorModal";
import NextStepBtn from "./components/GameCtlBtn/NextStepBtn";

const App: React.FC = () => {
    const {
        game,
        gameState,
        handleAction,
        handleStartGame,
        handleNextStep,
        handleEndGame 
    } = useGame();
    const { ErrorModal, OpenErrorModalProvider } = useErrorModal();
    
    return (
        <>
        <h1 >aaa</h1>
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
                    <OpenErrorModalProvider>
                        <UserManage userManager={game.userManager} action={handleAction} />
                    </OpenErrorModalProvider>
                </div>
                <div className="h-1/6 flex justify-between">
                    {game.isRunning ? (
                        <NextStepBtn nextStep={handleNextStep} />
                    ) : (
                        <GameStartBtn startGame={handleStartGame} />
                    )}
                    <GameEndBtn
                        userNames={game.userManager.getUserNames(true)}
                        endGame={handleEndGame}
                    />
                </div>
            </div>
        </div>
        <ErrorModal />
        </>
    );
};

export default App;
