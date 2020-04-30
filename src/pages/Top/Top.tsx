import React from "react";
import { Container, Grid, Typography, Button, makeStyles, createStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import ROUTES from "src/utils/Routes";
import { ArticlesState } from "src/modules/db/Articles/ArticlesReducer";
import { State } from "src/interfaces/State";
import ArticleCard from "src/components/atoms/ArticleCard/ArticleCard";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const Top: React.FC = () => {
    const { data: articles } = useSelector<State, ArticlesState>(s => s.articles);
    const rowClasses = useRowStyle();
    const dispatch = useDispatch();
    const actions = {
        navigate: bindActionCreators(navigateActionsCreatetors, dispatch)
    };

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
                    articles.map((a, i) =>
                        <Grid key={i} item xs={12} sm={4} md={3}>
                            <ArticleCard data={a} id={i.toString()} />
                        </Grid>)
                }
            </Grid>
        </Grid>
    </Container>;
};

export default Top;
