import { Reducer } from "redux";
import { ArticlesActions, ActionType } from "./ArticlesAction";

export interface ArticlesState {
    data: Array<Article>;
}

export interface Article {
    title: string,
    body: string,
    created: Date,
    edited: Date,
}

const initialState = () => ({
    data: [{
        title: "sample article1",
        body: "sample article body1",
        created: new Date(),
        edited: new Date(),
    }, {
        title: "sample article2",
        body: "sample article body2",
        created: new Date(),
        edited: new Date(),
    }, {
        title: "sample article3",
        body: "sample article body3",
        created: new Date(),
        edited: new Date(),
    }, {
        title: "sample article4",
        body: "sample article body4",
        created: new Date(),
        edited: new Date(),
    }, {
        title: "sample article5",
        body: "sample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\nsample article body5\n",
        created: new Date(),
        edited: new Date(),
    },]
});

const articles: Reducer<ArticlesState, ArticlesActions> = (state = initialState(), action) => {
    switch (action.type) {
        case ActionType.CREATE:
            return {
                ...state,
                data: state.data.concat({
                    ...action.payload,
                    created: new Date(),
                    edited: new Date(),
                })
            };
        default:
            return state;
    }
};

export default articles;