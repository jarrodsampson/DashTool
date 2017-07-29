import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import * as APPService from '../../../services/appFunctions';
//import '../../css/NotFound.css';
import {Button} from 'react-materialize';

class NotFound extends Component {

    componentDidMount() {}

    render() {
        return (
            <div className="container-fluid coverbackground">
                <div className="errorBox">
                    <DocumentTitle title={"404 Issue - Page Not Found"} />
                    <div className="container center-align">
                        <div className="col s12 pushDown"></div>
                        <h4>404 Error</h4>
                        <p>Sorry, the page you requested cannot be found. Please try your search again.</p>
                        <p>There is no data here...</p>

                        <div className="row">
                            <Button className="accent-color waves-effect waves-light not-deep" onClick={APPService.goBack}>Back</Button>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default NotFound;
