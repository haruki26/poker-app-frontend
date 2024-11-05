type Props = {
    closeModal: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ closeModal, children }) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
    
    return (
        <div
        className="fixed top-0 left-0 w-screen h-screen bg-slate-800/30"
        onClick={(e) => handleOverlayClick(e)}
        >
            <div className="flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default Modal;
