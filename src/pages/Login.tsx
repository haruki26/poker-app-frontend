import { useState } from "react";
import InputForm from "../components/InputForm";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // ユーザー名
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // パスワード
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // フォーム送信
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("ユーザー名とパスワードを入力してください。");
      return;
    }

    if (username !== "admin" || password !== "password") {
      setErrorMessage("ユーザー名またはパスワードが間違っています。");
      return;
    }

    setErrorMessage("");
    alert("ログイン成功！");
  };

  return (
    <div className="max-w-screen-md h-full m-auto flex flex-col gap-10">
      <div className="h-1/4 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-slate-950">ログイン</h1>
      </div>
      <div className="min-h-[22rem] flex bg-green-100 border border-slate-950 rounded-md">
        <div className="px-6 py-8 h-full w-full flex flex-col items-center">
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-3/4">
            {/* ユーザー名入力 */}
            <div className="w-full">
              <label
                className="text-xl font-medium text-slate-950 block mb-2"
                htmlFor="username"
              >
                ユーザー名
              </label>
              <InputForm
                onChange={handleUsernameChange}
                value={username}
                className="border border-slate-950 w-full p-2 rounded-md"
              />
            </div>

            {/* パスワード入力 */}
            <div className="w-full">
              <label
                className="text-xl font-medium text-slate-950 block mb-2"
                htmlFor="password"
              >
                パスワード
              </label>
              <InputForm
                onChange={handlePasswordChange}
                value={password}
                className="border border-slate-950 w-full p-2 rounded-md"
              />
            </div>

            {/* サブミットボタン */}
            <button
              type="submit"
              className="bg-slate-950 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-xl"
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
