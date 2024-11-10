import { useContext, useState } from "react";
import Btn from "../../Btn";
import ModalFrame from "../../Modal/ModalFrame";
import { ManageContext } from "../ManageContext";

const RemoveUserModal: React.FC = () => {
    const { userInfo, handleRemoveUser, handleCloseModal } = useContext(ManageContext);
    const userNames = userInfo.map(user => user.name);

    const [checked, setChecked] = useState<boolean[]>(new Array(userNames.length).fill(false));

    const handleChecked = (index: number) => {
        console.log(index);
        setChecked((prev) => prev.map(
            (value, idx) => idx === index ? !value : value
        ));
    }

    const removeUserTriger = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const reverseChecked = checked.reverse();
        reverseChecked.forEach((value, index) => {
            if (value) {
                handleRemoveUser(userNames.length - index - 1);
            }
        });

        handleCloseModal();
    }

    return (
        <ModalFrame modalName="Remove" closeModal={handleCloseModal}>
            <div className="flex flex-col gap-3">
                <form 
                className="flex flex-col gap-3"
                onSubmit={(e) => removeUserTriger(e)}>
                    <ul className="w-full flex flex-col justify-center items-center">
                        {userNames.map((name, index) => (
                            <li
                            key={`${name}-${index}`}
                            className="h-12 w-full flex gap-2 justify-between items-center">
                                <span className="text-zinc-300 text-2xl w-3/4 font-extrabol p-2">
                                    {name}
                                </span>
                                <input
                                defaultChecked={checked[index]}
                                type="checkbox"
                                className="w-5 h-5"
                                onClick={() => handleChecked(index)}
                                />
                            </li>
                        ))}
                    </ul>
                    <Btn
                    className="w-32 h-10"
                    type="submit"
                    bgColor="bg-red-500"
                    hoverBgColor="bg-red-600">
                        <span className="text-zinc-200 text-xl font-extrabol p-2">
                            Remove
                        </span>
                    </Btn>
                </form>
            </div>
        </ModalFrame>
    );
};

export default RemoveUserModal;
