import React from 'react';
import './index.css';

const Details = props => (
    <span className={`details d-flex${props.className ? (` ${props.className}`) : ''}`} style={{ height: props.height }}>{props.children}</span>
);

export default Details;
