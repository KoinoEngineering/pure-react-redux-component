import React, { useEffect, useMemo } from "react";
import { Container, Grid, Typography, Button, makeStyles, createStyles, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import ROUTES from "src/utils/Routes";
import { State } from "src/interfaces/State";
import ArticleCard from "src/components/atoms/ArticleCard/ArticleCard";
import { TopState } from "./TopReducer";
import topActionCreators from "./TopAction";
import { ArticlesState } from "src/apis/Articles/ArticlesReducer";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const Top: React.FC = () => {
    const { loading } = useSelector<State, ArticlesState>(s => s.articles);
    const { articles } = useSelector<State, TopState>(s => s.top);
    const rowClasses = useRowStyle();
    const dispatch = useDispatch();
    const actions = useMemo(() => ({
        ...bindActionCreators(topActionCreators, dispatch),
        navigate: bindActionCreators(navigateActionsCreatetors, dispatch)
    }), [dispatch]);

    useEffect(() => {
        actions.getArticles();
        return () => {
            actions.setArticles({ data: [] });
        };
    }, [actions]);
    return <Container>
        <Grid container>
            <Grid id="Title" container classes={rowClasses}>
                <Grid item>
                    <Typography variant="h1">Blog Sample</Typography>
                </Grid>
            </Grid>
            <Grid id="Controls" container classes={rowClasses}>
                <Grid item>
                    <Button variant="contained" onClick={() => actions.navigate.push(ROUTES.CREATE)}>新規作成</Button>
                </Grid>
            </Grid>
            <Grid id="Articles" container classes={rowClasses} spacing={4}>
                {
                    loading
                        ? <Grid container justify="center"><CircularProgress /></Grid>
                        : articles.length === 0
                            ? <Grid container justify="center">記事がありません</Grid>
                            : articles.map((a) =>
                                <Grid key={a.id} item xs={12} sm={4} md={3}>
                                    <ArticleCard data={a} />
                                </Grid>)
                }
            </Grid>
        </Grid>
    </Container>;
};

export default Top;
