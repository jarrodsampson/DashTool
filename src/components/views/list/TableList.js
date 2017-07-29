import React from 'react';

import TableItem from '../item/TableItem';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (


        <div className="container-fluid">
            <table className="table highlight striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Story</th>
                    <th>Time</th>
                </tr>
                </thead>

                    <TableItem data={props.data}/>

            </table>
        </div>

    );
}