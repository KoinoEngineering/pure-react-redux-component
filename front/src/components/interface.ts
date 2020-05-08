import { Action } from "redux";

export type ReduxProps<P> = P & {
    reduxId: string;
}

export type ReduxState<S> = Partial<{
    [K: string]: S
}>

export type ReduxAction<T extends string> = Action<T> & {
    reduxId: string;
}

