import { all, fork } from "redux-saga/effects";

const rootSaga = function* () {
    yield all([
        //sagas
    ].map(saga => fork(saga)));
};

export default rootSaga;