import { put, select, takeLeading } from "redux-saga/effects";
import Articles from "src/apis/Articles";
import { ReduxOutlinedInputId } from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputReducer";
import { State } from "src/interfaces/State";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import ROUTES from "src/utils/Routes";
import { ActionType } from "./CreateAction";

const createSaga = function* () {
    yield takeLeading(ActionType.SUBMIT, submitSaga);
};

export default createSaga;

const submitSaga = function* () {
    const {
        [ReduxOutlinedInputId.CREATE_ARTICLE_TITLE]: title,
        [ReduxOutlinedInputId.CREATE_ARTICLE_BODY]: body
    } = (yield select<(s: State) => State["reduxOutlinedInput"]>(s => s.reduxOutlinedInput)) as State["reduxOutlinedInput"];
    if (title?.value && body?.value) {
        yield Articles.create({ title: title.value as string, body: body.value as string });
        yield put(navigateActionsCreatetors.push(ROUTES.TOP));
    } else {
        alert("タイトルと本文は必須です");
    }

};