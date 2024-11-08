type Props = {
    label: string;
    value: string;
};

const Label: React.FC<Props> = ({ label, value }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center p-2">
            <span className="text-3xl font-bold">{label}</span>
            <span className="text-5xl font-bold">{value}</span>
        </div>
    );
};

export default Label;
