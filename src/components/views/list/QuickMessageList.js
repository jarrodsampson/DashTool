import React from 'react';

import QuickMessageItem from '../item/QuickMessageItem';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (

        <QuickMessageItem data={props.data}/>

    );
}