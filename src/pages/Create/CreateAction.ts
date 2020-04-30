import { Action } from "redux";
import { Payload } from "src/interfaces/Action";
import { CreateState } from "./CreateReducer";

export enum ActionType {
    CHANGE_VALUES = "blog-sample/create/CHANGE_VALUES",

}

export interface ChangeValuesAction extends Action<ActionType.CHANGE_VALUES>, Payload<Partial<CreateState>> { }



export type CreateActions = ChangeValuesAction;


const createActionCreators = {
    changeValues: (payload: ChangeValuesAction["payload"]): ChangeValuesAction => ({ type: ActionType.CHANGE_VALUES, payload }),
};

export default createActionCreators;