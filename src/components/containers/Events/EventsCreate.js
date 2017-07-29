import React, {Component} from 'react';
import * as APIService from '../../../services/api/APIService';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import NavigationAuth from '../../layouts/NavigationAuth';
//import ReactPaginate from 'react-paginate';
import Loader from '../../helpers/loader';
import 'react-table/react-table.css';
import {Button, Input, Row} from 'react-materialize';
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer, toast } from 'react-toastify';

import {
    NavLink
} from 'react-router-dom';

var eventItem = {};
var message = "";

class EventsCreate extends Component {

    getContent() {
        APIService.getEventsList();
    }

    getData(id) {
        eventItem = this.props.sampleEventList.filter(function(item, i){ return item.id === parseInt(id,10);})[0];
        console.log(eventItem);
    }

    componentDidMount() {
        message = "Create Event";
        this.getContent();
    }

    submitEvent(event) {
        event.preventDefault();

        /* gather form items */
        let eventName = document.getElementById("eventName").value;
        let description = document.getElementById("description").value;
        let dateTime = document.getElementById("eventTime").value;
        let eventType = document.getElementById("eventType").value;
        let automatic = document.getElementById("automatic").checked;
        let notification = document.getElementById("notification").checked;
        let radios = document.getElementsByName('group1');
        let radioItem = "";
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                // do whatever you want with the checked radio
                radioItem = radios[i].value;

                // only one radio can be logically checked, don't check the rest
                break;
            }
        }

        /* validation */
        if (!eventName || !description || !dateTime || !eventType) {
            toast("Please Check Form");
            return;
        } else {

            toast("New Event Created!");
            let reqObj = {
                name:         eventName,
                description:  description,
                dateTime:     dateTime,
                type:         eventType,
                automatic:    automatic,
                notification: notification,
                alert:        radioItem
            };

            console.log(reqObj);
        }
    }

    render() {

        let eventItemData = eventItem || {};

        if (this.props.match.params.id) {
            message = "Edit Event";
            this.getData(this.props.match.params.id);
        } else { eventItemData = ""}

        return (
            <NavigationAuth className="page" version={this.props.version}>
                <DocumentTitle title={"Create An Event - TeamWork"}/>

                <div className="container-fluid-push">

                    <div className="row">
                        <nav className="breads">
                            <div className="nav-wrapper">
                                <div className="col s12">
                                    <NavLink to="/dashboard" className="breadcrumb">Dashboard</NavLink>
                                    <NavLink to="/events" className="breadcrumb">Events</NavLink>
                                    <NavLink to="/event/create" className="breadcrumb">{message}</NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="row">


                        <div className={!this.props.isLoading ? 'hidden' : ''}>
                            <Loader />
                        </div>
                        <div className={this.props.isLoading ? 'hidden' : ''}>

                            <div className="container">
                                <h4>{message}</h4>

                                <form>
                                    <Row>
                                        <Input validate={true} s={12} label="Event Name" id="eventName" value={eventItemData.name || ""} type={"text"} />
                                    </Row>
                                    <Row>
                                        <Input validate={true} s={12} className="materialize-textarea" label="Description" id="description" type={"text"}></Input>
                                    </Row>
                                    <Row>
                                        <Input s={12} name='on' type='date' placeholder="Event Time" id="eventTime" onChange={function(e, value) {}} />
                                    </Row>
                                    <Row>
                                        <Input s={12} type='select' label="Event Type" id="eventType" defaultValue='2'>
                                            <option value='1'>One Day</option>
                                            <option value='2'>Weekly</option>
                                            <option value='3'>Annually</option>
                                        </Input>
                                    </Row>
                                    <Row>
                                        <Input name='groupN' id="automatic" type='checkbox' value='yes' label='Submit Automatically' className='filled-in' defaultChecked='checked' />
                                    </Row>
                                    <Row>
                                        <p className="form-manual-label-push">Push Notification:</p>
                                        <Input name='on' type='switch' id="notification" value='1' />
                                    </Row>
                                    <Row>
                                        <p className="form-manual-label-push">Alert User Via:</p>
                                        <Input name='group1' type='radio' value='red' label='Email' defaultChecked='checked' />
                                        <Input name='group1' type='radio' value='yellow' label='Text' />
                                        <Input name='group1' type='radio' value='green' label='Phone' />
                                    </Row>
                                    <Button onClick={this.submitEvent} className="accent-color waves-effect waves-light">Submit</Button>
                                </form>
                            </div>


                        </div>


                    </div>
                </div>

                <ToastContainer hideProgressBar={true} />


            </NavigationAuth>
        );
    }
}

const mapStateToProps = function (store) {

    //console.log("Store", store.api);
    return {
        userToken: store.api.userToken,
        isLoggedIn: store.api.isLoggedIn,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        sampleTransactionLogs: store.api.sampleTransactionLogs,
        sampleEventList: store.api.sampleEventList,
        version: store.api.version
    };
};

export default connect(mapStateToProps)(EventsCreate);
