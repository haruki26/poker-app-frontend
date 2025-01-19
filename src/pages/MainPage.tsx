import { useModal } from "../components/Modal/useModal";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import type { ActionType } from "../game/types";
import GameInfo from "../components/GameInfo/GameInfo";

const MainPage: React.FC = () => {
    const { Modal, openModal, closeModal ,} = useModal();

    const dummyAction = (actionType: ActionType, chip?: number) => {
        console.log(actionType, chip);
    }


    return (
        <div className="">
            <header className="w-full py-4 bg-black text-center text-2xl font-bold tracking-wider text-white">
                POKER
            </header>


            <div className="">
                <ActionBtn handleModal={openModal} isPlaying={true} />

                <Modal>
                    <ActionModal action={dummyAction} closeModal={closeModal} />
                    
                </Modal>
                <GameInfo potSize={256} rate={25600} />
            </div>
        </div>
        );
}

export default MainPage;
