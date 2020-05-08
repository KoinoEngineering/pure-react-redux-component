import { Action } from "redux";
import { Payload } from "src/interfaces/Action";

export enum ActionType {
    SUBMIT = "blog-sample/edit/SUBMIT",
    GET_ARTICLE = "blog-sample/edit/GET_ARTICLE",
}

export interface SubmitAction extends Action<ActionType.SUBMIT>, Payload<{ id: string }> { }
export interface GetArticleAction extends Action<ActionType.GET_ARTICLE>, Payload<{ id: string }> { }

export type EditActions =
    SubmitAction;

const editActionCreators = {
    submit: (id: SubmitAction["payload"]["id"]): SubmitAction => ({ type: ActionType.SUBMIT, payload: { id } }),
    getArticle: (id: GetArticleAction["payload"]["id"]): GetArticleAction => ({ type: ActionType.GET_ARTICLE, payload: { id } }),
};

export default editActionCreators;