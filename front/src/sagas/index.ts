import { all, fork } from "redux-saga/effects";
import articleSaga from "src/pages/Article/ArticleSaga";
import createSaga from "src/pages/Create/CreateSaga";
import editSaga from "src/pages/Edit/EditSaga";
import topSaga from "src/pages/Top/TopSaga";

const rootSaga = function* () {
    yield all([
        topSaga,
        createSaga,
        articleSaga,
        editSaga,
    ].map(saga => fork(saga)));
};

export default rootSaga;