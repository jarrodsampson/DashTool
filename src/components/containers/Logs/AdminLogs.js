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

import {
    NavLink
} from 'react-router-dom';

//import TableList from '../views/list/TableList';

class AdminLogs extends Component {

    getContent() {
        APIService.getAdminLogs();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <NavigationAuth className="page" version={this.props.version}>
                <DocumentTitle title={"Admin Logs - TeamWork"}/>

                <div className="container-fluid-push">

                    <div className="row">
                        <nav className="breads">
                            <div className="nav-wrapper">
                                <div className="col s12">
                                    <NavLink to="/dashboard" className="breadcrumb">Dashboard</NavLink>
                                    <a href="#!" className="breadcrumb">Admin Logs</a>
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
                                            data={this.props.sampleTransactionLogs}
                                            noDataText='No Transaction Logs Found'
                                            columns={columns}
                                            defaultPageSize={10}
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
        Header: 'Message',
        accessor: 'message',
    },
    {
        Header: 'Time',
        accessor: 'created' // String-based value accessors!
    }
];

const mapStateToProps = function (store) {

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken,
        isLoggedIn: store.api.isLoggedIn,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        sampleTransactionLogs: store.api.sampleTransactionLogs,
        version: store.api.version
    };
};

export default connect(mapStateToProps)(AdminLogs);
