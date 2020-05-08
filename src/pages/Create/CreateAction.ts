import { Action } from "redux";

export enum ActionType {
    SUBMIT = "blog-sample/create/SUBMIT",
}

export interface SubmitAction extends Action<ActionType.SUBMIT> { }

export type CreateActions =
    SubmitAction;

const createActionCreators = {
    submit: (): SubmitAction => ({ type: ActionType.SUBMIT }),
};

export default createActionCreators;