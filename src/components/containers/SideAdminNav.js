import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogoutScreen from './Login/LogoutScreen';
import {Icon} from 'react-materialize';
import '../../styles/css/Home.css';
import {
    NavLink
} from 'react-router-dom';
import * as APIService from '../../services/api/APIService';

class SideAdminNav extends Component {

    componentDidMount() {
        APIService.checkAuth();
    }

    render() {
        return (
            <div>
                <div className="sideBarAdmin">
                    <div className="pusherAdmin">
                        <div className="profilePic">
                            <NavLink to={"/profile"}><img src={this.props.userToken.profileObj.imageUrl} alt="Avatar" /></NavLink>
                        </div>
                        <div className="profileLinks">
                            <p>{this.props.userToken.profileObj.name}</p>
                            <p><LogoutScreen /></p>
                        </div>
                        <div className="sideNavLinks">
                            <ul>
                                <li className="headerNavLink">Processes</li>
                                <li><NavLink activeClassName="activeV" to={"/dashboard"}><Icon>graphic_eq</Icon>Dashboard</NavLink></li>
                                <li><NavLink activeClassName="activeV" to={"/database"}><Icon>search</Icon>Database</NavLink></li>
                                <li><NavLink activeClassName="activeV" to={"/players"}><Icon>add</Icon>Players</NavLink></li>
                                <li><NavLink to={"/events"}><Icon>add_alarm</Icon>Events</NavLink></li>
                                <li><NavLink to={"/admin/logs"}><Icon>audiotrack</Icon>Logs</NavLink></li>
                            </ul>

                            <ul>
                                <li className="headerNavLink">Game</li>
                                <li><NavLink to={"/dashboard"}><Icon>add</Icon>JSON</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken,
        isLoggedIn: store.api.isLoggedIn,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus
    };
};

export default connect(mapStateToProps)(SideAdminNav);
