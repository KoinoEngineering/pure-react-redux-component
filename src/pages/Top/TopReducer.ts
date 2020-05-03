import { Articles } from "src/apis/articles/ArticlesReducer";
import { Reducer } from "redux";
import { TopActions, ActionType } from "./TopAction";

export interface TopState {
    articles: Articles;
}

const initialState = (): TopState => ({ articles: [] });

const topReducer: Reducer<TopState, TopActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.SET_ARTICLES:
            return {
                ...state,
                articles: action.payload.data
            }
        default:
            return state;
    }
};

export default topReducer;