import { Action } from "redux";
import { Payload } from "src/interfaces/Action";
import { Article } from "src/apis/Articles/ArticlesReducer";
import { ActiveRecord } from "src/apis/ApiTypes";

export enum ActionType {
    GET_ARTICLE = "blog-sample/article/GET_ARTICLE",
    SET_ARTICLE = "blog-sample/article/SET_ARTICLE",
}

interface GetArticlePayload {
    id: string
}
export interface GetArticleAction extends Action<ActionType.GET_ARTICLE>, Payload<GetArticlePayload> { }
export interface SetArticleAction extends Action<ActionType.SET_ARTICLE>, Payload<ActiveRecord<Article>> { }

export type ArticleActions =
    GetArticleAction |
    SetArticleAction;

const articleActionCreators = {
    getArticle: (id: GetArticleAction["payload"]["id"]): GetArticleAction => ({ type: ActionType.GET_ARTICLE, payload: { id } }),
    setArticle: (payload: SetArticleAction["payload"]): SetArticleAction => ({ type: ActionType.SET_ARTICLE, payload }),
};

export default articleActionCreators;