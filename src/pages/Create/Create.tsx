import { CircularProgress, Button, Container, createStyles, Grid, InputAdornment, makeStyles, OutlinedInput, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "src/interfaces/State";
import createActionCreators from "./CreateAction";
import { CreateState } from "./CreateReducer";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const Create: React.FC = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(createActionCreators, dispatch);
    const { title, body, submitting } = useSelector<State, CreateState>(state => state.create);
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
                    <OutlinedInput
                        placeholder="タイトル"
                        value={title}
                        disabled={submitting}
                        fullWidth
                        onChange={(e) => actions.changeValues({ title: e.currentTarget.value })}
                        endAdornment={submitting &&
                            <InputAdornment position="end">
                                <CircularProgress />
                            </InputAdornment>}
                    />
                </Grid>
            </Grid>
            <Grid id="BodyContainer" container classes={rowClases}>
                <Grid item xs={12}>
                    <OutlinedInput
                        value={body}
                        disabled={submitting}
                        placeholder="本文"
                        multiline
                        rows={10}
                        fullWidth
                        onChange={(e) => actions.changeValues({ body: e.currentTarget.value })}
                        endAdornment={submitting &&
                            <InputAdornment position="end">
                                <CircularProgress />
                            </InputAdornment>}
                    />
                </Grid>
            </Grid>
            <Grid id="BodyContainer" container classes={rowClases} justify="flex-end">
                <Grid item >
                    <Button
                        variant="contained"
                        disabled={!(title && body)}
                        onClick={() => actions.submit()}
                    >作成</Button>
                </Grid>
            </Grid>
        </Grid>
    </Container>;
};

export default Create;