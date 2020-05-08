import { Button, Container, createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ArticlesState } from "src/apis/Articles/ArticlesReducer";
import NavLink from "src/components/atoms/NavLink";
import { useReduxOutlinedInputState } from "src/components/atoms/ReduxOutlinedInput";
import { ReduxOutlinedInputId } from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputReducer";
import ArticleEditor from "src/components/templates/ArticleEditor";
import { State } from "src/interfaces/State";
import ROUTES from "src/utils/Routes";
import editActionCreators from "./EditAction";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

interface EditParms {
    id: string;
}
interface EditProps extends RouteComponentProps<EditParms> { }

const Edit: React.FC<EditProps> = ({ match: { params: { id } } }) => {
    const dispatch = useDispatch();
    const actions = useMemo(() => {
        return {
            ...bindActionCreators(editActionCreators, dispatch),
        }
    }, [dispatch]);
    const { loading } = useSelector<State, ArticlesState>(state => state.articles);
    const [title, body] = useReduxOutlinedInputState([ReduxOutlinedInputId.EDIT_ARTICLE_TITLE, ReduxOutlinedInputId.EDIT_ARTICLE_BODY]);

    const rowClases = useRowStyle();

    useEffect(() => {
        actions.getArticle(id)
    }, [actions, id])
    return <Container>
        <Grid container>
            <Grid id="PageTitleContainer" container classes={rowClases}>
                <Grid item>
                    <Typography variant="h1">Edit Article</Typography>
                </Grid>
            </Grid>
            <Grid id="EditorContainer" container classes={rowClases}>
                <ArticleEditor
                    titleReduxId={ReduxOutlinedInputId.EDIT_ARTICLE_TITLE}
                    bodyReduxId={ReduxOutlinedInputId.EDIT_ARTICLE_BODY}
                    loading={loading}
                />
            </Grid>
            <Grid id="ButtonContainer" container classes={rowClases} justify="flex-end" spacing={4}>
                <Grid item >
                    <NavLink to={ROUTES.TOP} disableUnderLine>
                        <Button variant="contained" disabled={loading}>トップへ戻る</Button>
                    </NavLink>
                </Grid>
                <Grid item >
                    <Button
                        variant="contained"
                        disabled={!(title?.value && body?.value)}
                        onClick={() => actions.submit(id)}
                    >更新する</Button>
                </Grid>
            </Grid>
        </Grid>
    </Container>;
};

export default withRouter(Edit);