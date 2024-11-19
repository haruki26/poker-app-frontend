import { createContext, useState } from "react";
import { useModal } from "../components/Modal/useModal";
import ModalFrame from "../components/Modal/ModalFrame";

export const openErrorModalContext = createContext(
    {} as (error: Error) => void
);

type ModalProps = {
    children: React.ReactNode;
};

export const useErrorModal = () => {
    const { Modal, openModal, closeModal } = useModal();
    const [error, setError] = useState<Error | null>(null);
    
    const openErrorModal = (error: Error) => {
        setError(error);
        openModal();
    };

    const ErrorModal: React.FC = () => {
        return (
            <Modal>
                <ModalFrame modalName="Oops!" closeModal={closeModal}>
                    <span className="text-rose-400 text-3xl font-extrabold">
                        {error?.message}
                    </span>
                </ModalFrame>
            </Modal>
        );
    };

    const OpenErrorModalProvider: React.FC<ModalProps> = ({ children }) => {
        return (
            <openErrorModalContext.Provider value={openErrorModal}>
                {children}
            </openErrorModalContext.Provider>
        );
    };

    return { ErrorModal, OpenErrorModalProvider };
};
