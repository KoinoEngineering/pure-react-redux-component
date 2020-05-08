import { Reducer } from "redux";
import { EditActions } from "./EditAction";

export interface EditState {
}

const initialState = (): EditState => ({
});

const edit: Reducer<EditState, EditActions> = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default edit;