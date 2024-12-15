import { useGame } from "./hook/useGame";
import { useModal } from "./components/Modal/useModal";
import { useErrorModal } from "./hook/useErrorModal";

import UserManage from "./components/UserManage/UserManage";
import GameInfo from "./components/GameInfo/GameInfo";
import GameStartBtn from "./components/GameCtlBtn/GameStartBtn";
import GameEndBtn from "./components/GameCtlBtn/GameEndBtn";
import NextStepBtn from "./components/GameCtlBtn/NextStepBtn";
import SettingModal from "./components/SettingModal/SettingModal";

import setting from "/setting.svg"

const App: React.FC = () => {
    const {
        game,
        gameState,
        handleAction,
        handleStartGame,
        handleNextStep,
        handleEndGame 
    } = useGame();
    const { Modal, openModal, closeModal} = useModal();
    const { ErrorModal, OpenErrorModalProvider } = useErrorModal();
    
    return (
        <>
        <div className="h-svh p-1 bg-green-500">
            <div className="h-1/4 w-full flex flex-col p-2">
                <div className="h-1/4 mr-0 ml-auto my-auto">
                    <button className="h-full" onClick={openModal}>
                        <img alt="setting" src={setting} className="w-10 h-10" />
                    </button>
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
        <Modal>
            <SettingModal game={game} closeModal={closeModal} />
        </Modal>
        </>
    );
};

export default App;
