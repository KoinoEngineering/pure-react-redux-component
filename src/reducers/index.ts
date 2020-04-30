import { connectRouter } from "connected-react-router";
import * as H from "history";
import { combineReducers } from "redux";
import { State } from "src/interfaces/State";
import create from "src/pages/Create/CreateReducer";

const createRootReducer = (history: H.History) => combineReducers<State>({
    router: connectRouter(history),
    create
});
export default createRootReducer;