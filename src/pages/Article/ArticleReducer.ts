import { Reducer } from "redux";
import { ActiveRecord } from "src/apis/ApiTypes";
import { Article } from "src/apis/Articles/ArticlesReducer";
import { ActionType, ArticleActions } from "./ArticleAction";

export interface ArticleState extends ActiveRecord<Article> {
}

const initialState = () => ({
    id: "",
    title: "",
    body: "",
});

const articleReducer: Reducer<ArticleState, ArticleActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.SET_ARTICLE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default articleReducer;