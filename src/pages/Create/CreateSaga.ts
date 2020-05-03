import { put, select, takeLeading } from "redux-saga/effects";
import Articles from "src/apis/Articles";
import { State } from "src/interfaces/State";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import ROUTES from "src/utils/Routes";
import createActionCreators, { ActionType } from "./CreateAction";
import { CreateState } from "./CreateReducer";

const createSaga = function* () {
    yield takeLeading(ActionType.SUBMIT, submitSaga);
};

export default createSaga;

const submitSaga = function* () {
    const { title, body } = (yield select<(s: State) => CreateState>(s => s.create)) as CreateState;
    yield Articles.create({ title, body });
    yield put(createActionCreators.changeValues({ title: "", body: "" }));
    yield put(navigateActionsCreatetors.push(ROUTES.TOP));
};