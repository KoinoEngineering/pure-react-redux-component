import { all, put, select, takeEvery, takeLeading } from "redux-saga/effects";
import { ApiResponse } from "src/apis/ApiTypes";
import Articles from "src/apis/Articles";
import { Article } from "src/apis/Articles/ArticlesReducer";
import reduxOutlinedInputActionCreators from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputAction";
import { ReduxOutlinedInputId } from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputReducer";
import { State } from "src/interfaces/State";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import ROUTES from "src/utils/Routes";
import { ActionType, GetArticleAction, SubmitAction } from "./EditAction";

const editSaga = function* () {
    yield takeLeading(ActionType.SUBMIT, submitSaga);
    yield takeEvery(ActionType.GET_ARTICLE, getArticleSaga);
};

export default editSaga;

const submitSaga = function* (action: SubmitAction) {
    const {
        [ReduxOutlinedInputId.EDIT_ARTICLE_TITLE]: title,
        [ReduxOutlinedInputId.EDIT_ARTICLE_BODY]: body
    } = (yield select<(s: State) => State["reduxOutlinedInput"]>(s => s.reduxOutlinedInput)) as State["reduxOutlinedInput"];
    if (title?.value && body?.value) {
        yield Articles.update(action.payload.id, { title: title.value as string, body: body.value as string });
        yield put(navigateActionsCreatetors.push(ROUTES.TOP));
    } else {
        alert("タイトルと本文は必須です");
    }

};

const getArticleSaga = function* (action: GetArticleAction) {
    // １件取得するapiを作っていないので一旦allで代用する
    const response: ApiResponse<Article> = yield Articles.all();
    const target = response.data.find(i => i.id.toString() === action.payload.id);
    if (!target) {
        throw new Error("idが正しくありません");
    }
    yield all([
        put(reduxOutlinedInputActionCreators.change(ReduxOutlinedInputId.EDIT_ARTICLE_TITLE, target.title)),
        put(reduxOutlinedInputActionCreators.change(ReduxOutlinedInputId.EDIT_ARTICLE_BODY, target.body)),
    ]);
};