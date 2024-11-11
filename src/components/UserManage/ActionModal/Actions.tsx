import ActionNameBtn from "./ActionNameBtn";
import { InputAction, NotInputAction } from "./types";

type Props = {
    openInput: (actionType: InputAction) => void;
    action: (actionType: NotInputAction) => void;
};

const Actions: React.FC<Props> = ({ openInput, action }) => {
    return (
        <ul className="flex flex-col gap-3">
            <li>
                <ActionNameBtn action={() => action("check")}>
                    Check
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={() => openInput("bet")}>
                    Bet
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={() => action("call")}>
                    Call
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={() => openInput("raise")}>
                    Raise
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={() => action("fold")}>
                    Fold
                </ActionNameBtn>
            </li>
            <li>
                <ActionNameBtn action={() => action("all-in")}>
                    All In
                </ActionNameBtn>
            </li>
        </ul>
    );
}

export default Actions;
