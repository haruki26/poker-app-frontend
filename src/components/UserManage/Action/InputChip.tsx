import { useState } from "react";
import InputForm from "../../InputForm";
import { InputAction } from "./types";

type Props = {
    kind: InputAction;
    action: () => void;
};

const InputChip: React.FC<Props> = ({ kind, action }) => {
    const [chip, setChip] = useState<number>(0);

    const handleChip = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setChip(Number(e.target.value));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(chip);
        action();
    }

    return (
        <form
            className="flex flex-col gap-5 justify-center items-center"
            onSubmit={(e) => handleSubmit(e)}
        >
            <InputForm
                value={chip}
                onChange={(e) => handleChip(e)}
                isNumber={true}
                className="p-1 rounded-md"
            />
            <button
                type="submit"
                className="p-1 w-24 bg-green-500 hover:bg-green-700 rounded-md"
            >
                {kind.toUpperCase()}
            </button>
        </form>
    );
};

export default InputChip;
