import * as types from '../actions/action-types';

// Dummy Data
import * as sampleData from '../sample/SampleData';

const initialState = {

    droneStrikes: [],
    droneStrikeSpecific: {},
    userToken: {
        profileObj: {}
    },
    isLoggedIn: false,
    errorStatus: false,
    isLoading: true,
    toggleBlock: false,
    chartSampleData: sampleData.rawJsonData,
    sampleSpecs: sampleData.speculative,
    sampleTransactionLogs: sampleData.messages,
    sampleEventList: sampleData.eventList,
    version: sampleData.versionNo
};


const APIReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_ALL_DRONE_STRIKES:
            return Object.assign({}, state, { droneStrikes: action.strikes });
        case types.GET_SPECIFIC_DRONE_STRIKE:
            return Object.assign({}, state, { droneStrikeSpecific: action.strike });
        case types.SET_USER_TOKEN:
            return Object.assign({}, state, { userToken: action.token });
        case types.LOGOUT_USER:
            return Object.assign({}, state, { userToken: {} });
        case types.SET_USER_LOGIN_STATUS:
            return Object.assign({}, state, { isLoggedIn: action.status });
        case types.GET_LOADING_STATUS:
            return Object.assign({}, state, { isLoading: action.status });
        case types.GET_ERROR_STATUS:
            return Object.assign({}, state, { errorStatus: action.errorStatus });
        case types.GET_TOGGLE_STATUS:
            return Object.assign({}, state, { toggleBlock: action.statusToggle });
        default:

    }

    return state;

};

export default APIReducer;