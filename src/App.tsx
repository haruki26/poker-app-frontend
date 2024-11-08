import GameInfo from "./components/GameInfo/GameInfo";
import UserManage from "./components/UserManage/UserManage";
import { UserInfo } from "./types"

const demoData: UserInfo[] = [
    {
        name: "hogehoge",
        chip: 200,
        role: "DB",
    },
    {
        name: "fugafuga",
        chip: 200,
        role: "SB",
    },
    {
        name: "piyopiyo",
        chip: 200,
        role: "BB",
    },
    {
        name: "foobar",
        chip: 200,
        role: "",
    }
];

const info = {
    potSize: 1234,
    rate: 25,
}

const App: React.FC = () => {
    return (
        <div className="m-1 h-screen bg-green-50">
            <div className="h-1/4">
                <GameInfo potSize={info.potSize} rate={info.rate} />
            </div>
            <UserManage userInfo={demoData} />
        </div>
    )
}

export default App
