import { OutlinedInput } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ReduxProps } from "src/components/interface";
import { State } from "src/interfaces/State";
import reduxOutlinedInputActionCreators from "./ReduxOutlinedInputAction";
import { ReduxOutlinedInputState } from "./ReduxOutlinedInputReducer";

type ReduxOutlinedInputProps = Omit<ReduxProps<ReduxOutlinedInputState>, "value">;

export const useReduxOutlinedInputState = (ids: string[]) => useSelector<State, (ReduxOutlinedInputState | undefined)[]>(state => ids.map(id => state.reduxOutlinedInput[id]));

const ReduxOutlinedInput: React.FC<ReduxOutlinedInputProps> = ({ reduxId, ...props }) => {

    const dispatch = useDispatch();
    const actions = bindActionCreators(reduxOutlinedInputActionCreators, dispatch);
    const [state] = useReduxOutlinedInputState([reduxId]);

    return <OutlinedInput {...props} {...state} value={state?.value || ""} onChange={(e) => {
        props.onChange && props.onChange(e);
        actions.change(reduxId, e.currentTarget.value);
    }} />;
};

export default ReduxOutlinedInput;