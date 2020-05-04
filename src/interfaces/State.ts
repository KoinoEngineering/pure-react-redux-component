import { RouterState } from "connected-react-router";
import { ArticlesState } from "src/apis/Articles/ArticlesReducer";
import { ArticleState } from "src/pages/Article/ArticleReducer";
import { CreateState } from "src/pages/Create/CreateReducer";
import { TopState } from "src/pages/Top/TopReducer";

export interface State {
    articles: ArticlesState;
    router: RouterState;
    top: TopState
    create: CreateState;
    article: ArticleState;
}