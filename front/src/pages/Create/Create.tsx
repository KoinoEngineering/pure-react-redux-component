import { Button, CircularProgress, Container, createStyles, FormControl, Grid, InputAdornment, InputLabel, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ArticlesState } from "src/apis/Articles/ArticlesReducer";
import ReduxOutlinedInput, { useReduxOutlinedInputState } from "src/components/atoms/ReduxOutlinedInput";
import { ReduxOutlinedInputId } from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputReducer";
import { State } from "src/interfaces/State";
import createActionCreators from "./CreateAction";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const Create: React.FC = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(createActionCreators, dispatch);
    const { loading } = useSelector<State, ArticlesState>(state => state.articles);
    const { [ReduxOutlinedInputId.TITLE]: title, [ReduxOutlinedInputId.BODY]: body } = useReduxOutlinedInputState([ReduxOutlinedInputId.TITLE, ReduxOutlinedInputId.BODY]);

    const rowClases = useRowStyle();
    return <Container>
        <Grid container>
            <Grid id="PageTitleContainer" container classes={rowClases}>
                <Grid item>
                    <Typography variant="h1">Create Article</Typography>
                </Grid>
            </Grid>
            <Grid id="TitleContainer" container classes={rowClases}>
                <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor={ReduxOutlinedInputId.TITLE}>タイトル</InputLabel>
                        <ReduxOutlinedInput
                            id={ReduxOutlinedInputId.TITLE}
                            reduxId={ReduxOutlinedInputId.TITLE}
                            disabled={loading}
                            fullWidth
                            label={ReduxOutlinedInputId.TITLE}
                            endAdornment={loading &&
                                <InputAdornment position="end">
                                    <CircularProgress />
                                </InputAdornment>}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid id="BodyContainer" container classes={rowClases}>
                <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor={ReduxOutlinedInputId.BODY}>本文</InputLabel>
                        <ReduxOutlinedInput
                            id={ReduxOutlinedInputId.BODY}
                            reduxId={ReduxOutlinedInputId.BODY}
                            label={ReduxOutlinedInputId.BODY}
                            disabled={loading}
                            multiline
                            rows={10}
                            fullWidth
                            endAdornment={loading &&
                                <InputAdornment position="end">
                                    <CircularProgress />
                                </InputAdornment>}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid id="BodyContainer" container classes={rowClases} justify="flex-end">
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