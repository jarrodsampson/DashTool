import React, {Component} from 'react';
import * as APIService from '../../../services/api/APIService';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import NavigationAuth from '../../layouts/NavigationAuth';
//import ReactPaginate from 'react-paginate';
import '../../../styles/css/Home.css';
import Loader from '../../helpers/loader';
import IssueHandler from '../../helpers/IssueHandler';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Moment from 'react-moment';
import {
    NavLink
} from 'react-router-dom';
//import TableList from '../views/list/TableList';

class Database extends Component {

    getContent() {
        APIService.getAllDroneStrikes();
    }

    componentDidMount() {
        this.getContent();
    }

    onPageChange() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <NavigationAuth className="page" version={this.props.version}>
                <DocumentTitle title={"Database - TeamWork"}/>

                <div className="container-fluid-push">

                    <div className="row">
                        <nav className="breads">
                            <div className="nav-wrapper">
                                <div className="col s12">
                                    <NavLink to="/dashboard" className="breadcrumb">Dashboard</NavLink>
                                    <NavLink to="/database" className="breadcrumb">Database</NavLink>
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

                                        <ReactTable
                                            className='-striped -highlight'
                                            data={this.props.droneStrikes}
                                            noDataText='No Strike Data Found'
                                            columns={columns}
                                            defaultPageSize={40}
                                            showPageJump={true}
                                            showPageSizeOptions={true}
                                            filterable={true}
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

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken,
        isLoggedIn: store.api.isLoggedIn,
        droneStrikes: store.api.droneStrikes,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        version: store.api.version
    };
};

export default connect(mapStateToProps)(Database);
