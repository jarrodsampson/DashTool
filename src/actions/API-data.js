import * as types from './action-types';


export function getAllDroneStrikesSuccess(strikes) {
    return {
        type: types.GET_ALL_DRONE_STRIKES,
        strikes
    };
}

export function getSpecificDroneStrikeSuccess(strike) {
    return {
        type: types.GET_SPECIFIC_DRONE_STRIKE,
        strike
    };
}


export function setUserToken(token) {
    return {
        type: types.SET_USER_TOKEN,
        token
    };
}

export function logoutUser() {
    return {
        type: types.LOGOUT_USER,
    };
}

export function changeLoginStatus(status) {
    return {
        type: types.SET_USER_LOGIN_STATUS,
        status
    };
}

export function setLoadingStatus(status) {
    return {
        type: types.GET_LOADING_STATUS,
        status
    };
}

export function setErrorStatus(errorStatus) {
    return {
        type: types.GET_ERROR_STATUS,
        errorStatus
    };
}

export function setToggleStatus(statusToggle) {
    return {
        type: types.GET_TOGGLE_STATUS,
        statusToggle
    };
}