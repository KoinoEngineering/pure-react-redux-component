export type ActiveRecord<M> = Omit<M, "updated_at" | "created_at"> & {
    id: string;
    created_at?: number;
    updated_at?: number;
}

type STATUS = "SUCCESS" | "FAILED"
export interface ApiResponse<M> {
    status: STATUS
    data: ActiveRecord<M>[]
    messages?: string[]
}