import ActionNameBtn from "./ActionNameBtn";
import { InputAction } from "./types";

type Props = {
    openInput: (kind: InputAction) => void;
    closeModal: () => void;
};

const Actions: React.FC<Props> = ({ openInput, closeModal }) => {
    return (
        <ul className="flex flex-col gap-3">
            <li>
                <ActionNameBtn action={closeModal}>
                    Check
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={() => openInput("bet")}>
                    Bet
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={closeModal}>
                    Call
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={() => openInput("raise")}>
                    Raise
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={closeModal}>
                    Fold
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={closeModal}>
                    All In
                </ActionNameBtn>
            </li>
        </ul>
    );
}

export default Actions;
