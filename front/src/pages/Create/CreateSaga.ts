import { all, put, select, takeLeading } from "redux-saga/effects";
import Articles from "src/apis/Articles";
import reduxOutlinedInputActionCreators from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputAction";
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
        [ReduxOutlinedInputId.TITLE]: title,
        [ReduxOutlinedInputId.BODY]: body
    } = (yield select<(s: State) => State["reduxOutlinedInput"]>(s => s.reduxOutlinedInput)) as State["reduxOutlinedInput"];
    if (title?.value && body?.value) {
        yield Articles.create({ title: title.value as string, body: body.value as string });
    }
    yield all([
        put(reduxOutlinedInputActionCreators.change(ReduxOutlinedInputId.TITLE, "")),
        put(reduxOutlinedInputActionCreators.change(ReduxOutlinedInputId.BODY, "")),
    ]);
    yield put(navigateActionsCreatetors.push(ROUTES.TOP));
};