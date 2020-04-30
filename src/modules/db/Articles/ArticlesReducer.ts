import { Reducer } from "redux";
import { ArticlesActions, ActionType } from "./ArticlesAction";
import { v4 as uuidv4 } from "uuid";

export interface ArticlesState {
    data: Array<Article>;
}

export interface Article {
    id: string
    title: string,
    body: string,
    created: Date,
    edited: Date,
}

const initialState = () => ({
    data: []
});

const articles: Reducer<ArticlesState, ArticlesActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.CREATE:
            return {
                ...state,
                data: state.data.concat({
                    ...action.payload,
                    id: uuidv4(),
                    created: new Date(),
                    edited: new Date(),
                })
            };
        default:
            return state;
    }
};

export default articles;