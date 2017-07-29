import * as APIFunction from '../actions/API-data';
import store from '../Store';

export function goBack() {
    window.history.back();
}

export function toggle(status) {
    store.dispatch(APIFunction.setToggleStatus(status));
}