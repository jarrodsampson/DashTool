import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import Headroom from 'react-headroom';
import Back2Top from 'react-back2top';

import {Navbar, Button, Modal} from 'react-materialize';

export default function(props) {
    return (
        <div className="App">
                <header>

                    <Headroom>
                        <Navbar brand='TeamWork' right className="nav-bar-color" options={{ closeOnClick: true }}>
                            <li><NavLink to="/login" activeClassName="activeV">SignIn</NavLink></li>
                            <li><NavLink to="#helpModal">Help</NavLink></li>
                        </Navbar>
                    </Headroom>
                </header>

                <main>

                    <div className="appRoot2">
                        {props.children}
                    </div>



                    <Back2Top>
                        <div className="scrollTop">
                            <Button floating large className='black' waves='light' icon='navigation' />
                        </div>
                    </Back2Top>

                    <Modal
                        header='Login Trouble'
                        id='helpModal'>
                        <div>
                            <p>
                                 Please contact your administrator for an account recovery process. This login is based off of your Google account.
                            </p>

                            <p><strong>Things you can check</strong></p>
                            <p>
                                <ul>
                                    <li>- Make sure you are allowed to access this admin tool.</li>
                                    <li>- Check the domain for your E-Mail address, see if it is allowed.</li>
                                    <li>- Verify that your google account is valid.</li>
                                </ul>
                            </p>
                        </div>
                    </Modal>
                </main>

                <footer className="page-footer black">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Teamwork</h5>
                                <p className="grey-text text-lighten-4">Get updates on the most recent and historical drone strikes conducted by the United States Government.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">About The Developer</h5>
                                <ul className="col l6 m6 s6">
                                    <li><a className="grey-text text-lighten-3" href="//github.com/planlodge" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                    <li><a className="grey-text text-lighten-3" href="//www.linkedin.com/in/jarrodsampson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                </ul>
                                <ul className="col l6 m6 s6">
                                    <li><a className="grey-text text-lighten-3" href="//Ko-fi.com/jarrodsampson" target="_blank" rel="noopener noreferrer">Donate</a></li>
                                    <li><a className="grey-text text-lighten-3" href="//www.npmjs.com/~planlodge" target="_blank" rel="noopener noreferrer">NPMJS</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright nav-bar-color">
                        <div className="container">
                            © 2017 Planlodge
                            <a className="grey-text text-lighten-4 right" href="//planlodge.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
                        </div>
                    </div>

                </footer>

        </div>

    );
}