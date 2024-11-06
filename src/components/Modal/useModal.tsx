import React, { useEffect, useRef, useState } from "react"
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock";
import ModalFrame from "./ModalFrame";

type ModalProps = {
    children: React.ReactNode;
};

type Return = {
    Modal: React.FC<ModalProps>;
    openModal: () => void;
    closeModal: () => void;
}

export const useModal = (): Return => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modalRef.current === null) return;

        if (isVisible) {
            disableBodyScroll(modalRef.current);
        } else {
            enableBodyScroll(modalRef.current);
        }

        return () => clearAllBodyScrollLocks();
    }, [isVisible, modalRef]);

    const openModal = () => setIsVisible(true);
    const closeModal = () => setIsVisible(false);

    const Modal: React.FC<ModalProps> = ({ children }) => {
        return (
            <div ref={modalRef}>
                {isVisible && (
                    <ModalFrame closeModal={closeModal}>
                        {children}
                    </ModalFrame>
                )}
            </div>
        );
    }

    return { Modal, openModal, closeModal };
};
