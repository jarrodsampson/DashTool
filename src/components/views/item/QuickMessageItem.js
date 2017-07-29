import React from 'react';
//import Moment from 'react-moment';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <div className="messageBox">

        {props.data.map((item, i) => {
            return (
                <ul key={i} className="messageItem">
                    <li>
                        <p>{item.message}</p>
                        <p><em>{item.created}</em></p>
                    </li>
                </ul>
            );

        })}
        </div>
    );
}