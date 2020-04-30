import { put, takeLeading, select, delay } from "redux-saga/effects";
import articlesActionCreators from "src/modules/db/Articles/ArticlesAction";
import createActionCreators, { ActionType } from "./CreateAction";
import { State } from "src/interfaces/State";
import { CreateState } from "./CreateReducer";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import ROUTES from "src/utils/Routes";

const createSaga = function* () {
    yield takeLeading(ActionType.SUBMIT, submitSaga);
};

export default createSaga;

const submitSaga = function* () {
    const { title, body } = (yield select<(s: State) => CreateState>(s => s.create)) as CreateState;
    yield put(articlesActionCreators.create({ title, body }));
    // 見た目だけ遅延させる
    yield delay(1000);
    yield put(createActionCreators.submitEnd());
    yield put(createActionCreators.changeValues({ title: "", body: "" }));
    yield put(navigateActionsCreatetors.push(ROUTES.TOP));
};