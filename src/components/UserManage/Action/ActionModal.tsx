import ModalFrame from "../../Modal/ModalFrame";
import ActionNameBtn from "./ActionNameBtn";

type Props = {
    closeModal: () => void;
};

const ActionModal: React.FC<Props> = ({ closeModal }) => {
    return (
        <ModalFrame modalName="Action" closeModal={closeModal}>
            <ul className="flex flex-col gap-3">
                <li>
                    <ActionNameBtn action={() => console.log("Action 1")}>
                        Check
                    </ActionNameBtn>
                </li>
                <li>
                    <ActionNameBtn action={() => console.log("Action 2")}>
                        Bet
                    </ActionNameBtn>
                </li>
                <li>
                    <ActionNameBtn action={() => console.log("Action 3")}>
                        Call
                    </ActionNameBtn>
                </li>
                <li>
                    <ActionNameBtn action={() => console.log("Action 4")}>
                        Raise
                    </ActionNameBtn>
                </li>
                <li>
                    <ActionNameBtn action={() => console.log("Action 4")}>
                        Fold
                    </ActionNameBtn>
                </li>
                <li>
                    <ActionNameBtn action={() => console.log("Action 5")}>
                        All In
                    </ActionNameBtn>
                </li>
            </ul>
        </ModalFrame>
    );
};

export default ActionModal;
