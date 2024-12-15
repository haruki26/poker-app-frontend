import { useState } from "react";

import { Game } from "../../game/Game";
import { SettingMode } from "./types";
import Settings from "./Settings";
import ModalFrame from "../Modal/ModalFrame";
import DBChange from "./DBChangeModal/DBChange";
import RateChangeForm from "./RateChangeForm/RateChangeForm";

type Props = {
    game: Game;
    closeModal: () => void;
};

const SettingModal: React.FC<Props> = ({ game, closeModal }) => {
    const [content, setContent] = useState<React.ReactNode | null>(null);

    const userInfos = game.userManager.users.map((user) => {
        const info = user.userInfo
        
        return ({
            name: info.name,
            role: info.role,
        })
    });

    const handleSetRole = (index: number) => {
        game.userManager.setRole(index);
        closeModal();
    }

    const handleSetRate = (rate: number) => {
        game.smallBlind = rate;
        closeModal();
    }

    const ChangeContent = (content: SettingMode) => {
        if (content === "ChangeDB") {
            setContent(<DBChange users={userInfos} handleSetRole={handleSetRole} />);
        } else if (content === "ChangeRate") {
            setContent(<RateChangeForm rate={game.smallBlind} handleSetRate={handleSetRate} />);
        }
    }

    return (
        <ModalFrame modalName="Setting" closeModal={closeModal}>
            {content
            ? content
            : <Settings changeContent={ChangeContent} />
            }
        </ModalFrame>
    );
}

export default SettingModal;
