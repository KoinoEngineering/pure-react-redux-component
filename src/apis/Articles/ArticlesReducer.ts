import { Reducer } from "redux";
import { ArticlesActions } from "./ArticlesAction";
import { ActiveRecord } from "../ApiTypes";
export interface ArticlesState {
    loading: boolean
}

export interface Article {
    title: string;
    body: string;
}

export type Articles = ActiveRecord<Article>[];

const initialState = (): ArticlesState => ({ loading: false });

const articlesReducer: Reducer<ArticlesState, ArticlesActions> = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default articlesReducer;