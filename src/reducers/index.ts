import { connectRouter } from "connected-react-router";
import * as H from "history";
import { combineReducers } from "redux";
import { State } from "src/interfaces/State";
import create from "src/pages/Create/CreateReducer";
import articles from "src/apis/Articles/ArticlesReducer";

const createRootReducer = (history: H.History) => combineReducers<State>({
    router: connectRouter(history),
    articles,
    create
});
export default createRootReducer;