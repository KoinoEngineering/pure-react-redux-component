import { Reducer } from "redux";
import { ActionType, CreateActions } from "./CreateAction";

export interface CreateState {
    submitting: boolean;
}

const initialState = (): CreateState => ({
    submitting: false,
});

const create: Reducer<CreateState, CreateActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.CHANGE_VALUES:
            return {
                ...state,
                ...action.payload
            };
        case ActionType.SUBMIT:
            return {
                ...state,
                submitting: true
            };
        case ActionType.SUBMIT_END:
            return {
                ...state,
                submitting: false
            };
        default:
            return state;
    }
};

export default create;