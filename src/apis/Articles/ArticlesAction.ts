import { Action } from "redux";
import { Payload } from "src/interfaces/Action";
import { ArticlesState } from "./ArticlesReducer";

export enum ActionType {
    SET_LOADING = "blog-sample/articles/SET_LOADING"
}

export interface SetLoadingAction extends Action<ActionType.SET_LOADING>, Payload<Pick<ArticlesState, "loading">> { }

export type ArticlesActions =
    SetLoadingAction;

const articlesActionCreators = {
    setLoading: (loading: SetLoadingAction["payload"]["loading"]): SetLoadingAction => ({ type: ActionType.SET_LOADING, payload: { loading } })
};

export default articlesActionCreators;