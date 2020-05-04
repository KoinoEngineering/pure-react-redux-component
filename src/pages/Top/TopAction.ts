import { Action } from "redux";
import { ApiResponse } from "src/apis/ApiTypes";
import { Article } from "src/apis/Articles/ArticlesReducer";
import { Payload } from "src/interfaces/Action";

export enum ActionType {
    GET_ARTICLES = "blog-sample/top/GET_ARTICLES",
    SET_ARTICLES = "blog-sample/top/SET_ARTICLES",
}

export interface GetArticlesAction extends Action<ActionType.GET_ARTICLES> { }
export interface SetArticlesAction extends Action<ActionType.SET_ARTICLES>, Payload<Pick<ApiResponse<Article>, "data">> { }

export type TopActions =
    GetArticlesAction |
    SetArticlesAction;

const topActionCreators = {
    getArticles: (): GetArticlesAction => ({ type: ActionType.GET_ARTICLES }),
    setArticles: (payload: SetArticlesAction["payload"]): SetArticlesAction => ({ type: ActionType.SET_ARTICLES, payload })
};

export default topActionCreators;