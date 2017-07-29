import store from '../../Store';
import * as APIFunction from '../../actions/API-data';
import _ from 'underscore';

var server = "https://api.dronestre.am/";


export function getAllDroneStrikes() {

    store.dispatch(APIFunction.setErrorStatus(false));
    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "data")
        .then(response => response.json())
        .then(json => {
            console.log("All Drone Strike Data", json);

            if (json.status === "OK") {
                store.dispatch(APIFunction.getAllDroneStrikesSuccess(_.sortBy(json.strike, function(item){ return item.date;}).reverse()));
                store.dispatch(APIFunction.setLoadingStatus(false));
            } else {
                store.dispatch(APIFunction.setErrorStatus(true));
                store.dispatch(APIFunction.setLoadingStatus(false));
            }
            return json;
        })
        .catch((err) => console.log(''));
}

export function getDroneStrikeById(id) {
    let strike;

    store.dispatch(APIFunction.setErrorStatus(false));
    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "data")
        .then(response => response.json())
        .then(json => {

            strike = _.findWhere(json.strike, {number: parseInt(id, 10)});
            console.log("Strike ID Data", strike);

            if (strike !== undefined) {
                store.dispatch(APIFunction.getSpecificDroneStrikeSuccess(strike));
                store.dispatch(APIFunction.setLoadingStatus(false));
            } else {
                store.dispatch(APIFunction.setErrorStatus(true));
                store.dispatch(APIFunction.setLoadingStatus(false));
            }


            return json;
        })
        .catch((err) => console.log(''));
}

export function getAdminLogs() {
    store.dispatch(APIFunction.setLoadingStatus(false));
    store.dispatch(APIFunction.setErrorStatus(false));
}

export function getEventsList() {
    store.dispatch(APIFunction.setLoadingStatus(false));
    store.dispatch(APIFunction.setErrorStatus(false));
}




export function checkAuth() {
    if (localStorage.getItem('accessToken') !== null) {
        store.dispatch(APIFunction.changeLoginStatus(true));
        store.dispatch(APIFunction.setUserToken(JSON.parse(localStorage.getItem('accessToken'))));
    }
}

export function checkAuthLogin() {
    return localStorage.getItem('accessToken') !== null;
}

export function signInUser(info) {

    if (info.accessToken) {
        store.dispatch(APIFunction.setUserToken(info));
        store.dispatch(APIFunction.changeLoginStatus(true));
        console.log(info);
        localStorage.setItem('accessToken', JSON.stringify(info));
    }

}

export function logoutUser( ) {
    localStorage.removeItem('accessToken');
    store.dispatch(APIFunction.logoutUser());
    store.dispatch(APIFunction.changeLoginStatus(false));
    window.location = "/";
}