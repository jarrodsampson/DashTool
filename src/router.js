import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';


import PrivateRoute from './routeAuth';
import ScrollToTop from './components/helpers/ScrollToTop';

import Dashboard from './components/containers/Dashboard/Dashboard';
import LoginScreen from './components/containers/Login/LoginScreen';
import Profile from './components/containers/Account/Profile';
import Database from './components/containers/Game/Database';
import Player from './components/containers/Players/Player';
import PlayerDetails from './components/containers/Players/PlayerDetails';
import AdminLogs from './components/containers/Logs/AdminLogs';

import Events from './components/containers/Events/EventsList';
import EventsLog from './components/containers/Events/EventsLog';
import EventsCreate from './components/containers/Events/EventsCreate';
// Error 404 NOT FOUND
import NotFound from './components/containers/Error/NotFound';

export default (
    <Router>
        <ScrollToTop>
            <Switch>

                <Route exact path="/" component={LoginScreen}/>
                <Route exact path="/login" component={LoginScreen}/>

                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <PrivateRoute exact path="/players" component={Player}/>
                <PrivateRoute exact path="/player/:id" component={PlayerDetails}/>
                <PrivateRoute exact path="/profile" component={Profile}/>
                <PrivateRoute exact path="/database" component={Database}/>
                <PrivateRoute exact path="/events" component={Events}/>
                <PrivateRoute exact path="/events/create" component={EventsCreate}/>
                <PrivateRoute exact path="/events/create/:id" component={EventsCreate}/>
                <PrivateRoute exact path="/events/logs" component={EventsLog}/>
                <PrivateRoute exact path="/admin/logs" component={AdminLogs}/>


                <Route path="/error" component={NotFound}/>
                <Redirect from="*" to="/error"/>
            </Switch>
        </ScrollToTop>
    </Router>
);