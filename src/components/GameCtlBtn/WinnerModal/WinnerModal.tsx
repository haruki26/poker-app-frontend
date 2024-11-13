import Btn from "../../Btn";
import ModalFrame from "../../Modal/ModalFrame";

type Props = {
    userNames: string[];
    endGame: (index: number) => void;
    closeModal: () => void;
};

const WinnerModal: React.FC<Props> = ({ userNames, endGame, closeModal}) => {
    return (
        <ModalFrame modalName="Result" closeModal={closeModal}>
            <ul className="flex flex-col items-center">
                {userNames.map((name, index) => (
                    <li key={index} className="text-2xl text-zinc-300 my-2">
                        <Btn
                            onClick={() => endGame(index)}
                            className="w-32 h-10 m-auto"
                            bgColor="bg-emerald-300"
                            hoverBgColor="bg-emerald-400"
                        >
                            <span className="text-zinc-900 text-xl font-extrabol p-2">
                                {name}
                            </span>
                        </Btn>
                    </li>
                ))}
            </ul>
        </ModalFrame>
    );
};

export default WinnerModal;
