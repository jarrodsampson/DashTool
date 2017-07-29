import React from 'react';
import Moment from 'react-moment';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <tbody className="">

                    {props.data.map((item, i) => {
                        return (
                            <tr key={i} className="">
                                <td>{i}</td>
                                <td>{item.narrative}</td>
                                <td><Moment fromNow>{item.date}</Moment></td>
                            </tr>
                        );

                    })}
        </tbody>
    );
}