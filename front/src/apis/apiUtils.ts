import { ApiResponse, ActiveRecord } from "./ApiTypes";

type ActiveRecordBase<M> = { [K in keyof ActiveRecord<M>]: K extends "created_at" | "updated_at" ? string : ActiveRecord<M>[K] }

export const getApiResponse = <M>(res: Response) => res.json().then((json) => {
    const data: ActiveRecordBase<M>[] = json.data;
    return {
        ...json,
        data: data.map(d => ({
            ...d,
            created_at: (d.created_at ? new Date(d.created_at) : new Date(0)).getTime(),
            updated_at: (d.updated_at ? new Date(d.updated_at) : new Date(0)).getTime(),
        }))
    } as ApiResponse<M>;
});