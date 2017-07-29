import React, {Component} from 'react';
import * as APIService from '../../../services/api/APIService';
import * as AppFunctions from '../../../services/appFunctions';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import NavigationAuth from '../../layouts/NavigationAuth';
import '../../../styles/css/Home.css';
import Loader from '../../helpers/loader';
import IssueHandler from '../../helpers/IssueHandler';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Moment from 'react-moment';
import {Button} from 'react-materialize';
import PlayerSearchForm from './Search/PlayerSearchForm';
import {
    NavLink
} from 'react-router-dom';

class Player extends Component {

    getContent() {
        APIService.getAllDroneStrikes();
    }

    componentDidMount() {
        this.getContent();
    }

    onPageChange() {
        //window.scrollTo(0,0);
    }

    toggleSearch(toggleState) {
        if (toggleState) { return AppFunctions.toggle(false);}
        AppFunctions.toggle(true);
    }

    render() {
        return (
            <NavigationAuth className="page" version={this.props.version}>
                <DocumentTitle title={"Players - TeamWork"}/>

                <div className="container-fluid-push">

                    <div className="row">
                        <nav className="breads">
                            <div className="nav-wrapper">
                                <div className="col s12">
                                    <NavLink to="/dashboard" className="breadcrumb">Dashboard</NavLink>
                                    <NavLink to="/players" className="breadcrumb">Players</NavLink>
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

                                            <Button
                                                className="accent-color waves-effect waves-light button-margin"
                                                onClick={() => this.toggleSearch(this.props.toggleBlock)}>
                                                    Advanced Search
                                            </Button>
                                            <div className={!this.props.toggleBlock ? 'hidden' : ''}>
                                                <PlayerSearchForm />
                                            </div>

                                                <ReactTable
                                                    className='-striped -highlight'
                                                    data={this.props.droneStrikes}
                                                    noDataText='No Strike Data Found'
                                                    columns={columns}
                                                    defaultPageSize={20}
                                                    showPageJump={false}
                                                    showPageSizeOptions={true}
                                                    loading={this.props.isLoading}
                                                    filterable={true}
                                                    onPageChange={this.onPageChange}
                                                    defaultSorted={[{
                                                        id: 'number',
                                                        desc: false
                                                    }]}
                                                    style={{
                                                        height: '650px'
                                                    }}
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
        Header: 'Strike No.',
        accessor: 'number',
    },
    {
        Header: 'Country',
        accessor: 'country',
        Cell: props => <NavLink to={"/player/" + props.row.number}>{props.value}</NavLink>
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

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken,
        isLoggedIn: store.api.isLoggedIn,
        droneStrikes: store.api.droneStrikes,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        version: store.api.version,
        toggleBlock: store.api.toggleBlock
    };
};

export default connect(mapStateToProps)(Player);
