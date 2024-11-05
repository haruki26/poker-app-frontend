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

const App: React.FC = () => {
    return (
        <div className="m-1">
            <UserManage userInfo={demoData} />
        </div>
    )
}

export default App
