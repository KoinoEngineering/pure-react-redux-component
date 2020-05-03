export type ActiveRecord<M> = Omit<M, "updated_at" | "created_at"> & {
    "updated_at": Date;
    "created_at": Date;
}

type STATUS = "SUCCESS" | "FAILED"
export interface ApiResponse<M> {
    status: STATUS
    data: ActiveRecord<M>[]
    messages?: string[]
}