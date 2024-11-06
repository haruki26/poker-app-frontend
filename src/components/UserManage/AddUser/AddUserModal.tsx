import { useState } from "react";
import ModalFrame from "../../Modal/ModalFrame"

type Props = {
    addUserInfo: (name: string, chip: number) => void;
    closeModal: () => void;
};

const AddUserModal: React.FC<Props> = ({ addUserInfo, closeModal }) => {
    const [name, setName] = useState<string>("");
    const [chip, setChip] = useState<number>(200);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addUserInfo(name, chip);
        console.log("Add User");
        closeModal();
    };

    return (
        <ModalFrame modalName="Add User" closeModal={closeModal}>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-zinc-400">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-1 rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="chip" className="text-zinc-400">
                        Chip
                    </label>
                    <input
                        type="number"
                        id="chip"
                        value={chip}
                        onChange={(e) => setChip(Number(e.target.value))}
                        className="p-1 rounded-md"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-slate-700 p-1 rounded-md"
                    >
                        <span className="text-zinc-300 text-xl font-extrabol p-2">
                            Add
                        </span>
                    </button>
                </div>
            </form>
        </ModalFrame>
    );
};

export default AddUserModal;
