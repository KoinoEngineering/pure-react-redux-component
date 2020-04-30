import React from "react";
import { Container, Grid, Typography, Button, makeStyles, createStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { navigateActionsCreatetors } from "src/utils/ComponentUtils";
import ROUTES from "src/utils/Routes";

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const Top: React.FC = () => {
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
            <Grid id="Articles" container classes={rowClasses}>
                <Grid item>
                    記事の一覧を表示
                </Grid>
            </Grid>
        </Grid>
    </Container>;
};

export default Top;
