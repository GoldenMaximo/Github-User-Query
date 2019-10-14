import React from 'react';
import './index.css';

const SearchHeading = props => (
    <a href={props.href} className={props.className}>
        <span className="Github-Search">
GitHub
            <span className="text-style-1"> Search</span>
        </span>
    </a>
);

export default SearchHeading;
