import { put, takeLeading } from "redux-saga/effects";
import { ApiResponse } from "src/apis/ApiTypes";
import Articles from "src/apis/Articles";
import { Article } from "src/apis/Articles/ArticlesReducer";
import topActionCreators, { ActionType } from "./TopAction";

const topSaga = function* () {
    yield takeLeading(ActionType.GET_ARTICLES, getArticlesSaga);
};

export default topSaga;

const getArticlesSaga = function* () {
    const r: ApiResponse<Article> = yield Articles.all();
    yield put(topActionCreators.setArticles({ data: r.data }));
};