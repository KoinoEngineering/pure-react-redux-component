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
    CREATE_ARTICLE_TITLE = "create/article/title",
    CREATE_ARTICLE_BODY = "create/article/body",
    EDIT_ARTICLE_TITLE = "edit/article/title",
    EDIT_ARTICLE_BODY = "edit/article/body",
}

export default reduxOutlinedInputReducer;