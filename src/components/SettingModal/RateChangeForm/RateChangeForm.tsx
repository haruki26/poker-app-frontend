import { useState } from "react";
import InputForm from "../../InputForm";
import Btn from "../../Btn";

type Props = {
    rate: number;
    handleSetRate: (rate: number) => void;
}

const RateChangeForm: React.FC<Props> = ({ rate, handleSetRate }) => {
    const [value, setValue] = useState<number>(rate);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSetRate(value);
    }

    const handleRate = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(Number(e.target.value));
    }

    return (
        <form
        className="flex flex-col gap-2 justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}>
            <div className="flex gap-4">
                <span className="text-2xl text-center after:content-[':']">現在のSB</span>
                <span className="text-2xl text-center">{rate}</span>
            </div>
            <InputForm
            value={value}
            onChange={(e) => handleRate(e)}
            isNumber={true}
            />
            <Btn
            type="submit"
            className="p-1 w-24">
                変更
            </Btn>
        </form>
    );
}

export default RateChangeForm;
