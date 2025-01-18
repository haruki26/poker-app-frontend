import React, { useState } from "react";

// InputForm コンポーネント
type InputFormProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: React.InputHTMLAttributes<HTMLInputElement>["value"];
    placeholder?: string;
    className?: string;
    isNumber?: boolean;
};

const InputForm: React.FC<InputFormProps> = ({
    onChange,
    value,
    placeholder = "",
    className = "",
    isNumber = false,
}) => {
    const [isError, setIsError] = useState<boolean>(false);

    const numberChecker = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const inputValue = Number(e.target.value);
        if (isNaN(inputValue) || inputValue < 0) {
            setIsError(true);
            return;
        }

        setIsError(false);
        onChange(e);
    };

    return (
        <div className="flex flex-col gap-1 w-full h-12">
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => (isNumber ? numberChecker(e) : onChange(e))}
                className={`p-2 rounded-md ${className} ${
                    isError ? "border-red-500" : ""
                }`}
            />
            {isError && <span className="text-red-500">入力値が不正です</span>}
        </div>
    );
};

// LoginPage コンポーネント
const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    // ユーザー名入力時の処理
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    // フォーム送信時の処理
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username) {
            setErrorMessage("ユーザー名を入力してください。");
            return;
        }

        if (username !== "admin") {
            setErrorMessage("ユーザー名が間違っています。");
            return;
        }

        setErrorMessage("");
        alert("ログイン成功！");
    };

    return (
        <div className="max-w-screen-md h-full m-auto flex flex-col gap-10">
            <div className="h-1/4 flex justify-center items-center">
                <h1 className="text-5xl font-bold text-slate-950">ログイン</h1>
            </div>
            <div className="min-h-[22rem] flex bg-sky-500 border border-slate-950 rounded-md">
                <div className="px-6 py-8 h-full w-full flex flex-col items-center">
                    {errorMessage && (
                        <p className="text-red-500 text-xl text-center font-medium mb-4">
                            {errorMessage}
                        </p>
                    )}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-3/4">
                        {/* ユーザー名入力 */}
                        <div className="w-full mt-0">
                            <label
                                className="text-2xl font-medium text-slate-950 block mb-2 mt-10"
                                htmlFor="username"
                            >
                                ユーザー名
                            </label>
                            <InputForm
                                onChange={handleUsernameChange}
                                value={username}
                                placeholder="例: 茨木 隆彰"
                                className="border border-slate-950 w-full"
                            />
                        </div>

                        {/* サブミットボタン */}
                        <button
                            type="submit"
                            className="bg-slate-950 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-2xl mt-10"
                        >
                            ログイン
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
