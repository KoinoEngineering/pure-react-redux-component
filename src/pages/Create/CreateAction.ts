import { Action } from "redux";
import { Payload } from "src/interfaces/Action";
import { CreateState } from "./CreateReducer";

export enum ActionType {
    CHANGE_VALUES = "blog-sample/create/CHANGE_VALUES",
    SUBMIT = "blog-sample/create/SUBMIT",
    SUBMIT_END = "blog-sample/create/SUBMIT_END",
}

export interface ChangeValuesAction extends Action<ActionType.CHANGE_VALUES>, Payload<Partial<CreateState>> { }
export interface SubmitAction extends Action<ActionType.SUBMIT> { }
export interface SubmitEndAction extends Action<ActionType.SUBMIT_END> { }


export type CreateActions =
    ChangeValuesAction |
    SubmitAction |
    SubmitEndAction;


const createActionCreators = {
    changeValues: (payload: ChangeValuesAction["payload"]): ChangeValuesAction => ({ type: ActionType.CHANGE_VALUES, payload }),
    submit: (): SubmitAction => ({ type: ActionType.SUBMIT }),
    submitEnd: (): SubmitEndAction => ({ type: ActionType.SUBMIT_END })
};

export default createActionCreators;