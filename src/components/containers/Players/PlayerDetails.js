import React, {Component} from 'react';
import * as APIService from '../../../services/api/APIService';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import NavigationAuth from '../../layouts/NavigationAuth';
import '../../../styles/css/Home.css';
import Loader from '../../helpers/loader';
import IssueHandler from '../../helpers/IssueHandler';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Moment from 'react-moment';
import {Button, Icon, Tab, Tabs, Collapsible, CollapsibleItem} from 'react-materialize';

import {
    NavLink
} from 'react-router-dom';

class PlayerDetails extends Component {

    getContent(id) {
        APIService.getDroneStrikeById(id);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    onPageChange() {
        //window.scrollTo(0,0);
    }

    render() {
        return (
            <NavigationAuth className="page" version={this.props.version}>
                <DocumentTitle title={"Player " + this.props.match.params.id + " - TeamWork"}/>

                <div className="container-fluid-push">

                    <div className="row">
                        <nav className="breads">
                            <div className="nav-wrapper">
                                <div className="col s12">
                                    <NavLink to="/dashboard" className="breadcrumb">Dashboard</NavLink>
                                    <NavLink to="/players" className="breadcrumb">Players</NavLink>
                                    <NavLink to="/players" className="breadcrumb">{"Player " + this.props.match.params.id}</NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="row">


                        <div className={!this.props.isLoading ? 'hidden' : ''}>
                            <Loader />
                        </div>
                        <div className={this.props.isLoading ? 'hidden' : ''}>


                            {(() => {
                                if (this.props.errorStatus) {
                                    return <IssueHandler requestItem={this.props.match.params.id}/>
                                } else {

                                    return <div className="row">


                                        <Tabs className='tab-demo z-depth-2'>
                                            <Tab title="Details" tabWidth={25} active>

                                                <Collapsible defaultActiveKey={1}>
                                                    <CollapsibleItem eventKey={1} header='First' icon='filter_drama'>
                                                        Lorem ipsum dolor sit amet.
                                                    </CollapsibleItem>
                                                    <CollapsibleItem header='Second' icon='place'>
                                                        Lorem ipsum dolor sit amet.
                                                    </CollapsibleItem>
                                                    <CollapsibleItem header='Third' icon='whatshot'>
                                                        Lorem ipsum dolor sit amet.
                                                    </CollapsibleItem>
                                                </Collapsible>

                                            </Tab>
                                            <Tab title="Items" tabWidth={25}>


                                            </Tab>
                                            <Tab title="Currency">


                                            </Tab>
                                            <Tab title="Logs">

                                                <textarea value={JSON.stringify(this.props.droneStrikeSpecific)}>
                                                </textarea>


                                            </Tab>
                                        </Tabs>

                                    </div>

                                }
                            })()}

                        </div>


                    </div>
                </div>


            </NavigationAuth>
        );
    }
}

const columns = [
    {
        Header: 'Strike No.',
        accessor: 'number',
        filterMethod: (filter, row) =>
        row[filter.id].startsWith(filter.value) &&
        row[filter.id].endsWith(filter.value)
    },
    {
        Header: 'Country',
        accessor: 'country' // String-based value accessors!
    },
    {
        Header: 'Deaths',
        accessor: 'deaths' // String-based value accessors!
    },
    {
        Header: 'Story',
        accessor: 'narrative',
        minWidth: 400,
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    },
    {
        Header: 'Time',
        accessor: 'date', // String-based value accessors!
        Cell: props => <Moment fromNow>{props.value}</Moment> // Custom cell components!
    }
];

const mapStateToProps = function (store) {

    console.log("Store", store.api);
    console.log(JSON.stringify(store.api.droneStrikeSpecific));
    return {
        userToken: store.api.userToken,
        isLoggedIn: store.api.isLoggedIn,
        droneStrikeSpecific: store.api.droneStrikeSpecific,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        version: store.api.version
    };
};

export default connect(mapStateToProps)(PlayerDetails);
