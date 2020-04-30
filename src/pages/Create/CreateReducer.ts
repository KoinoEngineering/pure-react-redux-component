import { Reducer } from "redux";
import { CreateActions, ActionType } from "./CreateAction";
import { Article } from "src/modules/db/Articles/ArticlesReducer";

export interface CreateState extends Pick<Article, "title" | "body"> { }

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