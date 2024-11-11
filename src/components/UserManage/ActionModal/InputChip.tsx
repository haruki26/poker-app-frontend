import { useState } from "react";
import InputForm from "../../InputForm";
import { InputAction } from "./types";
import Btn from "../../Btn";

type Props = {
    actionType: InputAction;
    action: (chip: number) => void;
};

const InputChip: React.FC<Props> = ({ actionType, action }) => {
    const [chip, setChip] = useState<number>(0);

    const handleChip = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setChip(Number(e.target.value));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        action(chip);
    }

    return (
        <form
        className="flex flex-col gap-2 justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}>
            <InputForm
            value={chip}
            onChange={(e) => handleChip(e)}
            isNumber={true}
            />
            <Btn
            type="submit"
            className="p-1 w-24">
                {actionType.toUpperCase()}
            </Btn>
        </form>
    );
};

export default InputChip;
