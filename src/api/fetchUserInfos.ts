import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "../config";
import { UserInfo } from "../game/types";
import { UserData } from "./types";


type Response<T> = T extends string ? UserData : UserData[];

const pickUserInfo = (data: UserData): UserInfo => {
    const info: UserInfo = {
        name: data["name"],
        chip: data["chip"],
        role: data["role"] === null ? "" : data["role"],
        isPlaying: data["isplaying"],
    };
    return info;
}

export const fetchUserInfo = async (userId?: string): Promise<UserInfo[]> => {
    const url = `${API_BASE_URL}/users/${userId? userId : ""}`;
    const options: AxiosRequestConfig = {
        url,
        method: "GET"
    };

    return await axios(options)
        .then((res: AxiosResponse<Response<typeof userId>>) => {
            if (Array.isArray(res.data)) {
                return  res.data.map((data) => pickUserInfo(data));
            } else {
                return [pickUserInfo(res.data)];
            }
        })
        .catch((err) => {
            throw new Error(err);
        });
};
