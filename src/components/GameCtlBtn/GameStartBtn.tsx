import Btn from "../Btn";

type Props = {
    startGame: () => void;
};

const GameStartBtn: React.FC<Props> = ({ startGame }) => {
    return (
        <Btn
            onClick={startGame}
            className="w-32 h-10 m-auto"
            bgColor="bg-lime-500"
            hoverBgColor="bg-lime-600">
            <span className="text-zinc-900 text-xl font-extrabol p-2">
                Start
            </span>
        </Btn>
    );
};

export default GameStartBtn;
