import { Reducer } from "redux";
import { CreateActions, ActionType } from "./CreateAction";

export interface CreateState {
    title: string;
    body: string;
}

const initialState = (): CreateState => ({
    title: "",
    body: ""
});

const create: Reducer<CreateState, CreateActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.CHANGE_VALUES:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default create;