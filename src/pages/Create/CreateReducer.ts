import { Reducer } from "redux";
import { CreateActions, ActionType } from "./CreateAction";
import { Article } from "src/modules/db/Articles/ArticlesReducer";

export interface CreateState extends Pick<Article, "title" | "body"> {
    submitting: boolean;
}

const initialState = (): CreateState => ({
    title: "",
    body: "",
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