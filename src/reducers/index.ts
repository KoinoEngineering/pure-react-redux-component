import { connectRouter } from "connected-react-router";
import * as H from "history";
import { combineReducers } from "redux";
import { State } from "src/interfaces/State";
import create from "src/pages/Create/CreateReducer";
import articles from "src/apis/articles/ArticlesReducer";
import top from "src/pages/Top/TopReducer";
import article from "src/pages/Article/ArticleReducer";

const createRootReducer = (history: H.History) => combineReducers<State>({
    router: connectRouter(history),
    articles,
    top,
    create,
    article
});
export default createRootReducer;