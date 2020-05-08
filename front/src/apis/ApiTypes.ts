export type ActiveRecord<M> = Omit<M, "updated_at" | "created_at"> & {
    id: string;
    created_at?: Date;
    updated_at?: Date;
}

type STATUS = "SUCCESS" | "FAILED"
export interface ApiResponse<M> {
    status: STATUS
    data: ActiveRecord<M>[]
    messages?: string[]
}