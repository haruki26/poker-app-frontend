import Btn from "../Btn";
import { useModal } from "../Modal/useModal";
import WinnerModal from "./WinnerModal/WinnerModal";

type Props = {
    userNames: string[];
    endGame: (index: number) => void;
};

const GameEndBtn: React.FC<Props> = ({ userNames, endGame }) => {
    const { openModal, closeModal, Modal } = useModal();

    const handleEndGame = (index: number) => {
        endGame(index);
        closeModal();
    };


    return (
        <>
        <Btn
            onClick={openModal}
            className="w-32 h-10 m-auto"
            bgColor="bg-slate-600"
            hoverBgColor="bg-slate-400">
            <span className="text-zinc-300 text-xl font-extrabol p-2">
                End
            </span>
        </Btn>
        <Modal>
            <WinnerModal
                userNames={userNames}
                endGame={handleEndGame}
                closeModal={closeModal}
            />
        </Modal>
        </>
    );
};

export default GameEndBtn;
