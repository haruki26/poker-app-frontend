import { useGame } from "../hook/useGame";
import GameInfo from "../components/GameInfo/GameInfo";

const Home: React.FC = () => {
    const {
        game,
        gameState,
    } = useGame();

    const userInfos = game.userManager.users.map((user) => {
        const info = user.userInfo;
        return {
            name: info.name,
            chip: info.chip,
        }
    })
    
    return (
        <div className="max-w-screen-md h-full m-auto flex flex-col gap-10">
            <div className="h-1/4">
                <GameInfo potSize={gameState.pot} rate={gameState.currentBet} />
            </div>
            <div className="min-h-[22rem] flex bg-green-100 border border-slate-950 rounded-md">
                <div className="px-2 py-3 h-full m-auto ">
                    <ul className="flex flex-col gap-3 h-full w-72 justify-center items-center">
                        {userInfos.map((userInfo, index) => (
                            <li
                            key={index}
                            className={`w-5/6 flex flex-col gap-3 ${(userInfos.length - 1) !== index && (
                                'after:inline-block after:w-full after:h-[0.8px] after:bg-slate-950')
                            }`}>
                                <div className="flex justify-between text-3xl">
                                    <span>{userInfo.name}</span>
                                    <span>{userInfo.chip}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
