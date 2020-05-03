import { Container, createStyles, Grid, makeStyles, Typography, CircularProgress } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { State } from "src/interfaces/State";
import { dateFormat } from "src/utils";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import ROUTES from "src/utils/Routes";
import { ArticleState } from "./ArticleReducer";
import { ArticlesState } from "src/apis/articles/ArticlesReducer";
import articleActionCreators from "./ArticleAction";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const useBodyStyle = makeStyles(createStyles({
    root: {
        whiteSpace: "pre"
    }
}));


interface ArticleParms {
    id: string;
}
interface ArticleProps extends RouteComponentProps<ArticleParms> { }

const Article: React.FC<ArticleProps> = (props) => {
    const { match: { params: { id } } } = props;
    const { title, body, created_at, updated_at } = useSelector<State, ArticleState>(state => state.article);
    const { loading } = useSelector<State, ArticlesState>(state => state.articles);
    const rowClases = useRowStyle();
    const bodyCasses = useBodyStyle();
    const dispatch = useDispatch();
    const actions = useMemo(() => ({
        ...bindActionCreators(articleActionCreators, dispatch),
        navigate: bindActionCreators(navigateActionsCreatetors, dispatch),
    }), [dispatch]);

    useEffect(() => {
        actions.getArticle(id);
        return () => { actions.setArticle({ id: "", title: "", body: "", created_at: new Date(), updated_at: new Date() }); };
    }, [actions, id]);

    if (isNaN(Number(props.match.params.id))) {
        alert("id が　正しくありません TOPへ戻ります");
        actions.navigate.push(ROUTES.TOP);
    }

    return <Container>
        <Grid container>
            <Grid id="PageTitleContainer" container classes={rowClases}>
                <Grid item>
                    <Typography variant="h1">Article</Typography>
                </Grid>
            </Grid>
            {loading
                ? <Grid id="ProgressContainer" container justify="center">
                    <CircularProgress />
                </Grid>
                : <Grid id="ArticleContainer" container classes={rowClases}>
                    <Grid id="TitleContainer" container classes={rowClases}>
                        <Grid item>
                            <Typography variant="h2">{title}</Typography>
                        </Grid>
                    </Grid>
                    <Grid id="BodyContainer" container classes={rowClases}>
                        <Grid item>
                            <Typography variant="body1" classes={bodyCasses}>{body}</Typography>
                        </Grid>
                    </Grid>
                    <Grid id="OtherContainer" container classes={rowClases} spacing={4}>
                        <Grid item>
                            <Typography variant="body2">{"作成日時" + (created_at ? dateFormat(created_at) : "")}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">{"更新日時" + (updated_at ? dateFormat(updated_at) : "")}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
            <Grid id="LinkContainer" container classes={rowClases} spacing={4}>
                <Grid item>
                    <NavLink to={ROUTES.TOP}>トップへ</NavLink>
                </Grid>
            </Grid>
        </Grid>
    </Container>;
};

export default withRouter(Article);