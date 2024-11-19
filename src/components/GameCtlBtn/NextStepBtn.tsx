import Btn from "../Btn";

type Props = {
    nextStep: () => void;
};

const NextStepBtn: React.FC<Props> = ({ nextStep }) => {
    return (
        <Btn
            onClick={nextStep}
            className="w-32 h-10 m-auto"
            bgColor="bg-lime-500"
            hoverBgColor="bg-lime-600">
            <span className="text-zinc-900 text-xl font-extrabol p-2">
                Next
            </span>
        </Btn>
    );
};

export default NextStepBtn;
