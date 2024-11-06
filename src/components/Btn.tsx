type Props = {
    callback: () => void;
    children: React.ReactNode;
    className?: string;
    bgColor?: string;
    hoverBgColor?: string;
    disabled?: boolean;
};

const Btn: React.FC<Props> = ({
    callback,
    children,
    className = "",
    bgColor = "bg-green-500",
    hoverBgColor = "bg-green-700",
    disabled = false,
}) => {
    if (disabled) {
        bgColor = "bg-gray-500";
        hoverBgColor = "bg-gray-700";
        className += " line-through";
    };

    return (
        <div className="h-full flex items-center justify-center">
            <button
            className={`${bgColor} hover:${hoverBgColor} rounded-md ${className}`}
            onClick={callback}
            disabled={disabled}
            >
                <span className="text-gray-900 font-bold py-2 px-4">
                    {children}
                </span>
            </button>
        </div>
    );
};

export default Btn;
