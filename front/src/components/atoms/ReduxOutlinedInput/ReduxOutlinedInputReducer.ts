import { OutlinedInput } from "@material-ui/core";
import { ComponentProps } from "react";
import { Reducer } from "redux";
import { ReduxState } from "src/components/interface";
import { ReduxOutlinedInputAction, ReduxOutlinedInputActions } from "./ReduxOutlinedInputAction";

export interface ReduxOutlinedInputState extends ComponentProps<typeof OutlinedInput> {
    value: unknown;
}

export interface WithReduxOutlineInput {
    reduxOutlinedInput: ReduxState<ReduxOutlinedInputState>
}

const initialState = (): ReduxState<ReduxOutlinedInputState> => ({});

const reduxOutlinedInputReducer: Reducer<ReduxState<ReduxOutlinedInputState>, ReduxOutlinedInputActions> = (state = initialState(), { reduxId, type, payload }) => {
    switch (type) {
        case ReduxOutlinedInputAction.CHANGE:
            return {
                ...state,
                [reduxId]: {
                    ...state[reduxId],
                    value: payload.value
                }
            };
        default:
            return state;
    }
};

export enum ReduxOutlinedInputId {
    TITLE = "top/title",
    BODY = "top/body",
}

export default reduxOutlinedInputReducer;