import { Button, Container, createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ArticlesState } from "src/apis/Articles/ArticlesReducer";
import { useReduxOutlinedInputState } from "src/components/atoms/ReduxOutlinedInput";
import { ReduxOutlinedInputId } from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputReducer";
import ArticleEditor from "src/components/templates/ArticleEditor";
import { State } from "src/interfaces/State";
import ROUTES from "src/utils/Routes";
import createActionCreators from "./CreateAction";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const useLinkStyle = makeStyles(createStyles({
    root: {
        textDecoration: "none"
    }
}));


const Create: React.FC = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(createActionCreators, dispatch);
    const { loading } = useSelector<State, ArticlesState>(state => state.articles);
    const [title, body] = useReduxOutlinedInputState([ReduxOutlinedInputId.CREATE_ARTICLE_TITLE, ReduxOutlinedInputId.CREATE_ARTICLE_BODY]);

    const rowClases = useRowStyle();
    const linkClasses = useLinkStyle();
    return <Container>
        <Grid container>
            <Grid id="PageTitleContainer" container classes={rowClases}>
                <Grid item>
                    <Typography variant="h1">Create Article</Typography>
                </Grid>
            </Grid>
            <Grid id="EditorContainer" container classes={rowClases}>
                <ArticleEditor
                    titleReduxId={ReduxOutlinedInputId.CREATE_ARTICLE_TITLE}
                    bodyReduxId={ReduxOutlinedInputId.CREATE_ARTICLE_BODY}
                    loading={loading}
                />
            </Grid>
            <Grid id="ButtonContainer" container classes={rowClases} justify="flex-end" spacing={4}>
                <Grid item >
                    <NavLink to={ROUTES.TOP} className={linkClasses.root}>
                        <Button variant="contained" disabled={loading}>トップへ戻る</Button>
                    </NavLink>
                </Grid>
                <Grid item >
                    <Button
                        variant="contained"
                        disabled={!(title?.value && body?.value)}
                        onClick={() => actions.submit()}
                    >作成</Button>
                </Grid>
            </Grid>
        </Grid>
    </Container>;
};

export default Create;