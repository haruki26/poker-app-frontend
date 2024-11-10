import GameInfo from "./components/GameInfo/GameInfo";
import UserManage from "./components/UserManage/UserManage";
import { Game } from "./game/Game";

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
    const game = new Game();
    demoData.forEach((data) => {
        game.userManager.addUser(data.name, data.chip);
    });
    
    return (
        <div className="m-1 h-full bg-green-50">
            <div className="h-1/4">
                <GameInfo potSize={game.pot} rate={game.currentBet} />
            </div>
            <div className="h-3/4">
                <UserManage userManager={game.userManager} />
            </div>
        </div>
    )
}

export default App;
