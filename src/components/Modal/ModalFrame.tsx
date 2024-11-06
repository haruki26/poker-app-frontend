type Props = {
    closeModal: () => void;
    children: React.ReactNode;
};

const ModalFrame: React.FC<Props> = ({ closeModal, children }) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
    
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-slate-800/30">
            <div
            className="flex w-full h-full items-center justify-center"
            onClick={(e) => handleOverlayClick(e)}
            >
                {children}
            </div>
        </div>
    );
};

export default ModalFrame;
