import { fetchUserInfo } from "../api/fetchUserInfos";
import GameInfo from "../components/GameInfo/GameInfo";
import { useQuery } from "@tanstack/react-query";

const Home: React.FC = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: [],
        queryFn: () => fetchUserInfo(),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!data) {
        return <div>No data</div>;
    }

    return (
        <div className="w-full max-w-screen-md h-full m-auto flex flex-col gap-10">
            <div className="h-1/4">
                <GameInfo potSize={0} rate={0} />
            </div>
            <div className="min-h-[22rem] flex bg-green-100 border border-slate-950 rounded-md">
                <div className="px-2 py-3 h-full m-auto ">
                    <ul className="flex flex-col gap-3 h-full w-72 justify-center items-center">
                        {data.map((userInfo, index) => (
                            <li
                            key={index}
                            className={`w-5/6 flex flex-col gap-3 ${(data.length - 1) !== index && (
                                'after:inline-block after:w-full after:h-[0.8px] after:bg-slate-950')
                            }`}>
                                <div className="flex justify-between text-3xl">
                                    <span>{userInfo.name}</span>
                                    <span>{userInfo.chip}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
