import { ReduxAction } from "src/components/interface";
import { Payload } from "src/interfaces/Action";

export enum ReduxOutlinedInputAction {
    CHANGE = "ReduxOutlinedInput/CHANGE"
}


interface ReduxOutlinedInputChangePayload {
    value: unknown;
}
interface ReduxOutlinedInputChangeAction extends ReduxAction<ReduxOutlinedInputAction.CHANGE>, Payload<ReduxOutlinedInputChangePayload> { }

export type ReduxOutlinedInputActions = ReduxOutlinedInputChangeAction;

const reduxOutlinedInputActionCreators = ({
    change: (reduxId: string, value: ReduxOutlinedInputChangeAction["payload"]["value"]): ReduxOutlinedInputChangeAction => ({ reduxId, type: ReduxOutlinedInputAction.CHANGE, payload: { value } })
});

export default reduxOutlinedInputActionCreators;