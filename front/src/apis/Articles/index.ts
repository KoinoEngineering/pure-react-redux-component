import { call, put } from "redux-saga/effects";
import { ApiResponse } from "../ApiTypes";
import { getApiResponse } from "../apiUtils";
import API_ROUTES, { API_BASE } from "../routes";
import articlesActionCreators from "./ArticlesAction";
import { Article } from "./ArticlesReducer";

const callApi = function*<Fn extends (...args: any) => Promise<ApiResponse<Res>>, Res>(fn: Fn, ...args: Parameters<Fn>) {
    yield put(articlesActionCreators.setLoading(true));
    const response: ApiResponse<Res> = yield call(fn, ...args);
    if (response.status === "SUCCESS") {
        yield put(articlesActionCreators.setLoading(false));
        return response;
    } else {
        throw new Error("サーバ内でエラーが発生しました");
    }
};

export default {
    all: function* () {
        return yield callApi(async () => fetch(API_BASE + API_ROUTES.ARTICLES).then(getApiResponse));
    },
    create: function* (body: Article) {
        return yield callApi(async () =>
            fetch(API_BASE + API_ROUTES.ARTICLES
                , {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify(body)
                }).then(getApiResponse));
    },
};