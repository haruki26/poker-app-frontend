import { useEffect, useRef, useState } from "react"
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock";

export const useModal = () => {
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

    return { modalRef, isVisible, openModal, closeModal };
};
