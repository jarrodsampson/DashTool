import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginView from '../../views/LoginView';
import Navigation from '../../layouts/Navigation';
class LoginScreen extends Component {

    render() {

        if (localStorage.getItem("accessToken") !== null) {
            window.location = "/dashboard";
        }

        return (
            <Navigation className="App">

                <div className="container center-align">
                    <LoginView />
                </div>

            </Navigation>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken
    };
};

export default connect(mapStateToProps)(LoginScreen);
