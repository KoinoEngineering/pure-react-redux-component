import { put, takeEvery } from "redux-saga/effects";
import { ApiResponse } from "src/apis/ApiTypes";
import Articles from "src/apis/Articles";
import { Article } from "src/apis/Articles/ArticlesReducer";
import articleActionCreators, { ActionType, GetArticleAction } from "../Article/ArticleAction";

const articleSaga = function* () {
    yield takeEvery(ActionType.GET_ARTICLE, getArticleSaga);
};

export default articleSaga;

const getArticleSaga = function* (action: GetArticleAction) {
    // １件取得するapiを作っていないので一旦allで代用する
    const response: ApiResponse<Article> = yield Articles.all();
    const target = response.data.find(i => i.id.toString() === action.payload.id);
    if (!target) {
        throw new Error("idが正しくありません");
    }
    yield put(articleActionCreators.setArticle(target));
};