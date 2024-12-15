import { SettingMode } from "./types";
import Btn from "../Btn";

type Props = {
    changeContent: (content: SettingMode) => void;
};

const Settings: React.FC<Props> = ({ changeContent }) => {
    return (
        <div className="flex flex-col space-y-4">
            <Btn
                onClick={() => changeContent("ChangeDB")}
                className="w-40 py-1"
                bgColor="bg-green-700"
                hoverBgColor="bg-slate-900"
            >
                <span className="text-white text-xl font-bold p-2">
                    Change DB
                </span>
            </Btn>
            <Btn
                onClick={() => changeContent("ChangeRate")}
                className="w-40 py-1"
                bgColor="bg-green-700"
                hoverBgColor="bg-slate-900"
            >
                <span className="text-white text-xl font-bold p-2">
                    Cange SB
                </span>
            </Btn>
        </div>
    );
};

export default Settings;
