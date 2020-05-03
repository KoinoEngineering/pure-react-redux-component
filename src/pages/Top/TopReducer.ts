import { Articles } from "src/apis/articles/ArticlesReducer";
import { Reducer } from "redux";
import { TopActions } from "./TopAction";

export interface TopState {
    articles: Articles;
}

const initialState = (): TopState => ({ articles: [] });

const topReducer: Reducer<TopState, TopActions> = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default topReducer;