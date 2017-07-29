import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import Headroom from 'react-headroom';
import Back2Top from 'react-back2top';

import {Navbar, Button, Icon} from 'react-materialize';
import SideBarAdmin from '../containers/SideAdminNav';

export default function(props) {
    return (
        <div className="App">
            <header>

                <Headroom>
                    <Navbar brand='TeamWork' right className="nav-bar-color" options={{ closeOnClick: true }}>
                        <li><NavLink to="/dashboard" activeClassName="activeV">Dashboard</NavLink></li>
                        <li><NavLink to="/profile" activeClassName="activeV">Profile</NavLink></li>
                        <li><NavLink to="/strike/list" activeClassName="activeV"><Icon>settings</Icon></NavLink></li>
                    </Navbar>
                </Headroom>
            </header>

            <main>


                <div className="row">
                    <div className="col m2 no-padding">
                        <SideBarAdmin />
                    </div>
                    <div className="col m10 appRoot2">
                        {props.children}
                    </div>
                </div>


                <Back2Top>
                    <div className="scrollTop">
                        <Button floating large className='black' waves='light' icon='navigation' />
                    </div>
                </Back2Top>


            </main>

            <footer className="admin-page-footer page-footer black">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Teamwork</h5>
                            <p className="grey-text text-lighten-4">Welcome to the Teamwork Admin Tool! Some Description can go Here.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Reference Links</h5>
                            <ul className="col l6 m6 s6">
                                <li><a className="grey-text text-lighten-3" href="//github.com/planlodge" target="_blank" rel="noopener noreferrer">Gungho Online</a></li>
                            </ul>
                            <ul className="col l6 m6 s6">
                                <li><a className="grey-text text-lighten-3" href="//Ko-fi.com/jarrodsampson" target="_blank" rel="noopener noreferrer">Donate</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright nav-bar-color">
                    <div className="container">
                        © 2017 Gungho Online Entertainment America Inc.
                        <a className="grey-text text-lighten-4 right" href="//planlodge.com" target="_blank" rel="noopener noreferrer">Version {props.version}</a>
                    </div>
                </div>

            </footer>

        </div>

    );
}