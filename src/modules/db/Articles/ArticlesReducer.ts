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
    data: [{
        id: uuidv4(),
        title: "sample article1",
        body: "sample article body1",
        created: new Date(),
        edited: new Date(),
    }, {
        id: uuidv4(),
        title: "sample article2",
        body: "sample article body2",
        created: new Date(),
        edited: new Date(),
    }, {
        id: uuidv4(),
        title: "sample article3",
        body: "sample article body3",
        created: new Date(),
        edited: new Date(),
    }, {
        id: uuidv4(),
        title: "sample article4",
        body: "sample article body4",
        created: new Date(),
        edited: new Date(),
    }, {
        id: uuidv4(),
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