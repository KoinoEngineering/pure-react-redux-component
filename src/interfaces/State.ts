import { RouterState } from "connected-react-router";
import { CreateState } from "src/pages/Create/CreateReducer";
import { ArticlesState } from "src/apis/articles/ArticlesReducer";
import { TopState } from "src/pages/Top/TopReducer";

export interface State {
    articles: ArticlesState;
    router: RouterState;
    top: TopState
    create: CreateState;
}