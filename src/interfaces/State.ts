import { RouterState } from "connected-react-router";
import { CreateState } from "src/pages/Create/CreateReducer";

export interface State {
    router: RouterState;
    create: CreateState;
}