import { RouterState } from "connected-react-router";
import { CreateState } from "src/pages/Create/CreateReducer";
import { ArticlesState } from "src/modules/db/Articles/ArticlesReducer";

export interface State {
    articles: ArticlesState;
    router: RouterState;
    create: CreateState;
}