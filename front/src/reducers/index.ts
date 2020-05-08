import { connectRouter } from "connected-react-router";
import * as H from "history";
import { combineReducers } from "redux";
import articles from "src/apis/Articles/ArticlesReducer";
import reduxOutlinedInputReducer from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputReducer";
import { State } from "src/interfaces/State";
import article from "src/pages/Article/ArticleReducer";
import create from "src/pages/Create/CreateReducer";
import top from "src/pages/Top/TopReducer";

const createRootReducer = (history: H.History) => combineReducers<State>({
    router: connectRouter(history),
    articles,
    top,
    create,
    article,
    reduxOutlinedInput: reduxOutlinedInputReducer
});
export default createRootReducer;