import { put, takeLeading } from "redux-saga/effects";
import { ApiResponse } from "src/apis/ApiTypes";
import articles from "src/apis/articles";
import { Article } from "src/apis/articles/ArticlesReducer";
import topActionCreators, { ActionType } from "./TopAction";

const topSaga = function* () {
    yield takeLeading(ActionType.GET_ARTICLES, getArticlesSaga);
};

export default topSaga;

const getArticlesSaga = function* () {
    const r: ApiResponse<Article> = yield articles.all();
    yield put(topActionCreators.setArticles({ data: r.data }));
};