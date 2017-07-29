import React, {Component} from 'react';
import {connect} from 'react-redux';
import serialize from 'form-serialize';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';
import {Button, Input, Row} from 'react-materialize';

class PlayerSearchForm extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func
    };

    getContent() {

    }

    componentDidMount() {
        this.getContent();
    }

    handleSubmit() {
        let form = serialize(document.querySelector('#searchData'));
        console.log(form);

    }


    render() {

        return (
            <form id="searchData" onSubmit={this.handleSubmit}>
                <Row>
                    <Input validate={true} s={6} label="Event Name" id="eventName" type={"text"} />
                    <Input validate={true} s={6} className="materialize-textarea" label="Description" id="description" type={"text"} />
                </Row>
                <Row>
                    <Input s={4} name='on' type='date' placeholder="Event Time" id="eventTime" onChange={function(e, value) {}} />
                    <Input s={8} type='select' label="Event Type" id="eventType" defaultValue='2'>
                        <option value='1'>One Day</option>
                        <option value='2'>Weekly</option>
                        <option value='3'>Annually</option>
                    </Input>
                </Row>
                <Row s={4}>
                    <Input name='groupN' id="automatic" type='checkbox' value='yes' label='Include Invalid Players' className='filled-in' defaultChecked='checked' />
                </Row>
            </form>
        );
    }
}

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

export default connect(mapStateToProps)(PlayerSearchForm);
