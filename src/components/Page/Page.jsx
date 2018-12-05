import React, { Component } from 'react';
import './Page.css';

function Page (props) {
    return (
        <div className="container">{props.children}</div>
    );
}

export default Page;