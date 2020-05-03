import { ApiResponse } from "./ApiTypes";

export const getApiResponse = <M>(res: Response) => res.json().then((json) => {
    return Object.keys(json).reduce((res, key) => {
        res[key as keyof ApiResponse<M>] = ["updated_at", "created_at"].some(k => k === key)
            ? new Date(json[key])
            : json[key];
        return res;
    }, {} as ApiResponse<M>);
});