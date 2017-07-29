import * as types from '../actions/action-types';

const initialState = {

    userToken: {
        profileObj: {}
    },
    isLoggedIn: false
};


const APIReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.SET_USER_TOKEN:
            return Object.assign({}, state, { userToken: action.token });
        case types.LOGOUT_USER:
            return Object.assign({}, state, { userToken: {} });
        case types.SET_USER_LOGIN_STATUS:
            return Object.assign({}, state, { isLoggedIn: action.status });
        default:

    }

    return state;

};

export default APIReducer;