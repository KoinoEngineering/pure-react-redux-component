import { Reducer } from "redux";
import { CreateActions } from "./CreateAction";

export interface CreateState {
}

const initialState = (): CreateState => ({
});

const create: Reducer<CreateState, CreateActions> = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default create;