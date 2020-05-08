import { createStyles, makeStyles } from "@material-ui/core";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Redirect, Route as PublicRoute, Switch } from "react-router-dom";
import { history } from "src/core/ConfigureStore";
import ROUTES from "src/utils/Routes";
import Article from "./Article/Article";
import Create from "./Create/Create";
import Edit from "./Edit/Edit";
import Top from "./Top/Top";

const useStyles = makeStyles(
    createStyles({
        root: { height: "100%" }
    }));

const App: React.FC = () => {
    const classes = useStyles();
    return <div id="App" className={classes.root}>
        <ConnectedRouter history={history}>
            <Switch>
                <Redirect exact from="/" to={ROUTES.TOP} />
                <PublicRoute exact path={ROUTES.TOP}>
                    <Top />
                </PublicRoute>
                <PublicRoute exact path={ROUTES.CREATE}>
                    <Create />
                </PublicRoute>
                <PublicRoute exact path={ROUTES.ARTICLE}>
                    <Article />
                </PublicRoute>
                <PublicRoute exact path={ROUTES.EDIT}>
                    <Edit />
                </PublicRoute>
                <Redirect exact from="*" to={ROUTES.TOP} />
            </Switch>
        </ConnectedRouter>
    </div>;
};
export default App;