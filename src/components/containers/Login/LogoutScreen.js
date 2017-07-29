import React, { Component } from 'react';
import * as APIService from '../../../services/api/APIService';
import { connect } from 'react-redux';
import {Button} from 'react-materialize';

class LogoutScreen extends Component {

    render() {
        return (
            <div className="">
                <Button className="accent-color waves-effect waves-light" onClick={APIService.logoutUser}>Logout</Button>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken
    };
};

export default connect(mapStateToProps)(LogoutScreen);
