import React, {Component} from 'react';
import * as APIService from '../../../services/api/APIService';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import NavigationAuth from '../../layouts/NavigationAuth';
//import ReactPaginate from 'react-paginate';
import Loader from '../../helpers/loader';
import IssueHandler from '../../helpers/IssueHandler';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Button, Icon} from 'react-materialize';
import {
    NavLink
} from 'react-router-dom';

class EventsList extends Component {

    getContent() {
        APIService.getEventsList();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <NavigationAuth className="page" version={this.props.version}>
                <DocumentTitle title={"Events List - TeamWork"}/>

                <div className="container-fluid-push">

                    <div className="row">
                        <nav className="breads">
                            <div className="nav-wrapper">
                                <div className="col s12">
                                    <NavLink to="/dashboard" className="breadcrumb">Dashboard</NavLink>
                                    <NavLink to="/events" className="breadcrumb">Events</NavLink>
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

                                        <div className="row">
                                            <NavLink to="/events/create"><Button className="accent-color waves-effect waves-light button-margin">New Event</Button></NavLink>
                                            <NavLink to="/events/logs"><Button className="accent-color waves-effect waves-light button-margin">Logs</Button></NavLink>
                                        </div>

                                        <ReactTable
                                            className='-striped -highlight'
                                            data={this.props.sampleEventList}
                                            noDataText='No Events Found'
                                            columns={columns}
                                            defaultPageSize={10}
                                            showPageJump={true}
                                            filterable={true}
                                            showPageSizeOptions={true}
                                            loading={this.props.isLoading}
                                            onPageChange={this.onPageChange}
                                            defaultSorted={[{
                                                id: 'number',
                                                desc: false
                                            }]}
                                        />
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
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Time',
        accessor: 'created'
    },
    {
        Header: 'Action',
        accessor: 'id',
        Cell: props => <NavLink to={"/events/create/" + props.value}><Button className="accent-color waves-effect waves-light"><Icon>search</Icon></Button></NavLink>
    }
];

const mapStateToProps = function (store) {

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken,
        isLoggedIn: store.api.isLoggedIn,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        sampleEventList: store.api.sampleEventList,
        version: store.api.version
    };
};

export default connect(mapStateToProps)(EventsList);
