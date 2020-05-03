import { Action } from "redux";

export enum ActionType {
    GET_ARTICLES = "blog-sample/top/GET_ARTICLES",
}

export interface GetArticlesAction extends Action<ActionType.GET_ARTICLES> { }

export type TopActions =
    GetArticlesAction;

const topActionCreators = {
    getArticles: (): GetArticlesAction => ({ type: ActionType.GET_ARTICLES })
};

export default topActionCreators;