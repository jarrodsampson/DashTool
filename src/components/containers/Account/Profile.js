import React, { Component } from 'react';
//import * as APIService from '../../services/api/APIService';
import {connect} from 'react-redux';
import DocumentTitle from 'react-document-title';
import NavigationAuth from '../../layouts/NavigationAuth';

import {
    NavLink
} from 'react-router-dom';

class Profile extends Component {

    getContent() {
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <NavigationAuth className="App" version={this.props.version}>
                <DocumentTitle title={(this.props.userToken.profileObj.givenName) + "'s Profile - TeamWork"}/>

                <div className="container-fluid-push">
                    <div className="row">
                        <nav className="breads">
                            <div className="nav-wrapper">
                                <div className="col s12">
                                    <NavLink to="/dashboard" className="breadcrumb">Dashboard</NavLink>
                                    <NavLink to="/profile" className="breadcrumb">Profile</NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="container center-align">

                    <p><img src={this.props.userToken.profileObj.imageUrl} alt="Avatar" /></p>
                    <p>{this.props.userToken.profileObj.email}</p>

                    <p>{this.props.userToken.profileObj.name}</p>

                </div>

            </NavigationAuth>
        );
    }
}

const mapStateToProps = function (store) {

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken,
        isLoggedIn: store.api.isLoggedIn,
        version: store.api.version
    };
};

export default connect(mapStateToProps)(Profile);
