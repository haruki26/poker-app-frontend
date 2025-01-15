import Btn from "../../Btn";

type Props = {
    action: () => void;
    children: React.ReactNode;
};

const ActionNameBtn: React.FC<Props> = ({ action, children }) => {
    return (
        <Btn onClick={action} className="w-32 py-1  bg-gradient-to-br from-blue-300 to-gray-300 ">
            <span className="text-gray-700 text-2xl font-extrabol p-2 ">
                {children}
            </span>
        </Btn>
    );
}

export default ActionNameBtn;
