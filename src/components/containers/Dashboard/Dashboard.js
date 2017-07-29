import React, {Component} from 'react';
//import * as APIService from '../../services/api/APIService';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import NavigationAuth from '../../layouts/NavigationAuth';
import '../../../styles/css/Home.css';
import {Icon} from 'react-materialize';
import QuickMessageList from '../../views/list/QuickMessageList';
import rd3 from 'rd3';
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer, toast } from 'react-toastify';
import {
    NavLink
} from 'react-router-dom';

class DashBoard extends Component {

    getContent() {
        //APIService.getAllDroneStrikes();
    }

    componentDidMount() {
        this.getContent();
    }

    versionCheck(version) {
        toast("Upgraded to Version " + version + ".");
        localStorage.setItem('TeamWorkAdmin-versionNumber', version);
    }

    render() {
        return (
            <NavigationAuth className="App" version={this.props.version}>
                <DocumentTitle title={"Dashboard - TeamWork"}/>

                <div className="container-fluid-push">


                            <div className="row">
                                <nav className="breads">
                                    <div className="nav-wrapper">
                                        <div className="col s12">
                                            <a href="#!" className="breadcrumb">Dashboard</a>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            <div className="row">
                                <div className="col s12 m3">
                                    <div className="card nav-bar-color card-info">
                                        <div className="card-content white-text">
                                            <span className="card-title"><Icon>supervisor_account</Icon><span className="info-title">Total Users</span></span>
                                            <p className="numberHolder">{this.props.sampleSpecs.users}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col s12 m3">
                                    <div className="card nav-bar-color card-info">
                                        <div className="card-content white-text">
                                            <span className="card-title"><Icon>access_time</Icon><span className="info-title">Average Time</span></span>
                                            <p className="numberHolder">{this.props.sampleSpecs.average}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col s12 m3">
                                    <div className="card nav-bar-color card-info">
                                        <div className="card-content white-text">
                                            <span className="card-title"><Icon>perm_identity</Icon><span className="info-title">New Players</span></span>
                                            <p className="numberHolder">{this.props.sampleSpecs.new}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col s12 m3">
                                    <div className="card nav-bar-color card-info">
                                        <div className="card-content white-text">
                                            <span className="card-title"><Icon>shopping_basket</Icon><span className="info-title">Popular Items</span></span>
                                            <p className="numberHolder">{this.props.sampleSpecs.popular_item}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m8">
                                    <div className="col s12 chart-height">
                                        <rd3.LineChart
                                            legend={true}
                                            data={this.props.chartSampleData}
                                            width='100%'
                                            viewBoxObject={{
                                                x: 0,
                                                y: 0,
                                                width: 500,
                                                height: 400
                                            }}
                                            title="Historical"
                                            yAxisLabel="Total"
                                            xAxisLabel="Years"
                                            gridHorizontal={true}
                                        />
                                    </div>
                                </div>

                                <div className="col s12 m4">
                                    <div className="card nav-bar-color card-info">
                                        <div className="card-content white-text">
                                            <span className="card-title"><Icon>message</Icon><span className="info-title">Recent</span></span>
                                            <QuickMessageList data={this.props.sampleTransactionLogs} />
                                        </div>
                                        <div className="card-action">
                                            <NavLink to={"/admin/logs"}>More</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {(() => {

                                if (this.props.version !== parseInt(localStorage.getItem('TeamWorkAdmin-versionNumber'), 10)) {
                                    this.versionCheck(this.props.version);
                                }

                            })()}

                </div>

                <ToastContainer />

            </NavigationAuth>
        );
    }
}

const mapStateToProps = function (store) {

    //console.log("Store", store.api);
    return {
        droneStrikes: store.api.droneStrikes,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        chartSampleData: store.api.chartSampleData,
        sampleSpecs: store.api.sampleSpecs,
        sampleTransactionLogs: store.api.sampleTransactionLogs,
        version: store.api.version
    };
};

export default connect(mapStateToProps)(DashBoard);
