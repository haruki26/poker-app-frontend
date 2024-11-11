type Props = {
    children: React.ReactNode;
    className?: string;
};

const Label: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`flex justify-center ${className}`}>
            <div className="text-slate-800 font-semibold flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default Label;