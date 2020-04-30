import { Action } from "redux";
import { Payload } from "src/interfaces/Action";
import { Article } from "./ArticlesReducer";

export enum ActionType {
    CREATE = "blog-sample/create/CREATE",
    READ = "",
    UPDATE = "",
    DELETE = ""
}

interface CreateAction extends Action<ActionType.CREATE>, Payload<Pick<Article, "title" | "body">> { }

export type ArticlesActions = CreateAction;

const articlesActionCreators = {
    create: (payload: CreateAction["payload"]): CreateAction => ({ type: ActionType.CREATE, payload })
};

export default articlesActionCreators;