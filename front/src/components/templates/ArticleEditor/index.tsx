import { CircularProgress, createStyles, FormControl, Grid, InputAdornment, InputLabel, makeStyles } from "@material-ui/core";
import React, { ComponentProps, useEffect, useMemo } from "react";
import ReduxOutlinedInput from "src/components/atoms/ReduxOutlinedInput";
import { bindActionCreators } from "redux";
import reduxOutlinedInputActionCreators from "src/components/atoms/ReduxOutlinedInput/ReduxOutlinedInputAction";
import { useDispatch } from "react-redux";

interface ArticleEditorProps extends ComponentProps<typeof Grid> {
    titleReduxId: string;
    bodyReduxId: string;
    loading: boolean;
    keepUnMount?: boolean;
}

const useRowStyle = makeStyles(createStyles({
    root: {
        paddingBottom: 20,
    }
}));

const ArticleEditor: React.FC<ArticleEditorProps> = ({ titleReduxId, bodyReduxId, loading, keepUnMount, ...gridProps }) => {
    const rowClases = useRowStyle();
    const dispatch = useDispatch();

    const actions = useMemo(() => ({
        reduxOutlinedInput: bindActionCreators(reduxOutlinedInputActionCreators, dispatch)
    }), [dispatch])

    // アンマウント時にvalueをクリアする
    useEffect(() => () => {
        if (!keepUnMount) {
            actions.reduxOutlinedInput.change(titleReduxId, "");
            actions.reduxOutlinedInput.change(bodyReduxId, "");
        }
    }, [actions.reduxOutlinedInput, bodyReduxId, titleReduxId, keepUnMount])

    return <Grid container {...gridProps} >
        <Grid id="TitleContainer" container classes={rowClases}>
            <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor={titleReduxId}>タイトル</InputLabel>
                    <ReduxOutlinedInput
                        reduxId={titleReduxId}
                        disabled={loading}
                        fullWidth
                        label="タイトル"
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
                    <InputLabel htmlFor={bodyReduxId}>本文</InputLabel>
                    <ReduxOutlinedInput
                        reduxId={bodyReduxId}
                        disabled={loading}
                        multiline
                        rows={10}
                        label="本文"
                        fullWidth
                        endAdornment={loading &&
                            <InputAdornment position="end">
                                <CircularProgress />
                            </InputAdornment>}
                    />
                </FormControl>
            </Grid>
        </Grid>
    </Grid>;
}

export default ArticleEditor;