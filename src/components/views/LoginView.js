import React, { Component } from 'react';
import * as APIService from '../../services/api/APIService';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import {
    Redirect
} from 'react-router-dom';

class LoginView extends Component {

    render() {
        return (
            <div className="App">
                <h1>Please Login</h1>
                <p>Login to your Work Google Account.</p>
                <GoogleLogin
                    className="btn accent-color waves-effect waves-light"
                    clientId="450948927475-hu2g6or8eet3mn468kl0387ftdbn9cq4.apps.googleusercontent.com"
                    buttonText="Login"
                    hostedDomain={this.props.domainRestriction}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        );
    }
}

const responseGoogle = (response) => {
    console.log(response);
    APIService.signInUser(response);
    window.location = "/dashboard";

return <Redirect to="/dashboard" />
};


const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        domainRestriction: store.api.domainRestriction
    };
};

export default connect(mapStateToProps)(LoginView);
