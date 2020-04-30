import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "src/reducers";
import rootSaga from "./sgasa";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    collapsed: true
});

// 本番でloggerを抜きたい
const middlewares = process.env.NODE_ENV !== "production"
    ? [routerMiddleware(history),
        sagaMiddleware,
        logger
    ]
    : [routerMiddleware(history),
        sagaMiddleware,
    ];

const configureStore = () => {
    const store = createStore(createRootReducer(history), applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;