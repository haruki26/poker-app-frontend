
type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    bgColor?: string;
    hoverBgColor?: string;
    disabled?: boolean;
};

const Btn: React.FC<Props> = ({
    onClick,
    children,
    className = "",
    type=undefined,
    bgColor = "bg-gradient-to-br from-blue-300 to-gray-300",
    hoverBgColor = "bg-green-700",
    disabled = false,
}) => {
    if (disabled) {
        bgColor = "bg-gray-500";
        hoverBgColor = "bg-gray-700";
        className += " line-through";
    };

    return (
        <div className="w-full flex items-center justify-center">
            <button
            className={`${bgColor} hover:${hoverBgColor} rounded-md ${className}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
            >
                <span className="text-gray-900 font-bold py-2 px-4">
                    {children}
                </span>
            </button>
        </div>
    );
};

export default Btn;
