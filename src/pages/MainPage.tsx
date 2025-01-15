import { useModal } from "../components/Modal/useModal";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import type { ActionType } from "../game/types";

const MainPage: React.FC = () => {
    const { Modal, openModal, closeModal } = useModal();

    const dummyAction = (actionType: ActionType, chip?: number) => {
        console.log(actionType, chip);
    }

    return (
        <div className="">
            <ActionBtn handleModal={openModal} isPlaying={true} />
            <Modal>
                <ActionModal action={dummyAction} closeModal={closeModal} />
            </Modal>
        </div>
    );
}

export default MainPage;
