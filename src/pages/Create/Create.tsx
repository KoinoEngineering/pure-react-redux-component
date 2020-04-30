import React from "react";
import { Container, Grid, Typography, TextField, makeStyles, createStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { State } from "src/interfaces/State";
import { CreateState } from "./CreateReducer";
import { bindActionCreators } from "redux";
import createActionCreators from "./CreateAction";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const Create: React.FC = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(createActionCreators, dispatch);
    const { title, body } = useSelector<State, CreateState>(state => state.create);
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
                    <TextField
                        variant="outlined"
                        value={title}
                        label="タイトル"
                        fullWidth
                        onChange={(e) => actions.changeValues({ title: e.currentTarget.value })} />
                </Grid>
            </Grid>
            <Grid id="BodyContainer" container classes={rowClases}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        value={body}
                        label="本文"
                        multiline
                        rows={10}
                        fullWidth
                        onChange={(e) => actions.changeValues({ body: e.currentTarget.value })} />
                </Grid>
            </Grid>
        </Grid>
    </Container>;
};

export default Create;