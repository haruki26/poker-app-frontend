import Label from "./Label";

const style = "w-1/2 m-auto"

type Props = {
    potSize: number;
    rate: number;
};

const GameInfo: React.FC<Props> = ({ potSize, rate }) => {
    return (
        <div className="h-full flex gap-10  justify-center items-center">
            <div className={style}>
                <Label label="Pot" value={potSize.toString()} />
            </div>
            <div className={style}>
                <Label label="Rate" value={rate.toString()} />
            </div>
        </div>
    );
};

export default GameInfo;
