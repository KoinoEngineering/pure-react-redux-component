import { Container, createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { State } from "src/interfaces/State";
import { NavLink } from "react-router-dom";
import ROUTES from "src/utils/Routes";
import { bindActionCreators } from "redux";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import { TopState } from "../Top/TopReducer";

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
    const { articles: data } = useSelector<State, TopState>(state => state.top);
    const rowClases = useRowStyle();
    const bodyCasses = useBodyStyle();
    const dispatch = useDispatch();
    const actions = {
        navigate: bindActionCreators(navigateActionsCreatetors, dispatch)
    };
    if (isNaN(Number(props.match.params.id))) {
        alert("id が　正しくありません TOPへ戻ります");
        actions.navigate.push(ROUTES.TOP);
    }
    const article = data[Number(props.match.params.id)];

    return <Container>
        <Grid container>
            <Grid id="PageTitleContainer" container classes={rowClases}>
                <Grid item>
                    <Typography variant="h1">Article</Typography>
                </Grid>
            </Grid>
            <Grid id="TitleContainer" container classes={rowClases}>
                <Grid item>
                    <Typography variant="h2">{article?.title}</Typography>
                </Grid>
            </Grid>
            <Grid id="BodyContainer" container classes={rowClases}>
                <Grid item>
                    <Typography variant="body1" classes={bodyCasses}>{article?.body}</Typography>
                </Grid>
            </Grid>
            <Grid id="OtherContainer" container classes={rowClases} spacing={4}>
                <Grid item>
                    <Typography variant="body2">{"作成日時" + article?.created_at}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">{"更新日時" + article?.updated_at}</Typography>
                </Grid>
            </Grid>
            <Grid id="LinkContainer" container classes={rowClases} spacing={4}>
                <Grid item>
                    <NavLink to={ROUTES.TOP}>トップへ</NavLink>
                </Grid>
            </Grid>
        </Grid>
    </Container>;
};

export default withRouter(Article);