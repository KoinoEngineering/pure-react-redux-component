import { all, fork } from "redux-saga/effects";
import createSaga from "src/pages/Create/CreateSaga";
import topSaga from "src/pages/Top/TopSaga";
import articleSaga from "src/pages/Article/ArticleSaga";

const rootSaga = function* () {
    yield all([
        topSaga,
        createSaga,
        articleSaga,
    ].map(saga => fork(saga)));
};

export default rootSaga;