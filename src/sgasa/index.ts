import { all, fork } from "redux-saga/effects";
import createSaga from "src/pages/Create/CreateSaga";

const rootSaga = function* () {
    yield all([
        createSaga
    ].map(saga => fork(saga)));
};

export default rootSaga;