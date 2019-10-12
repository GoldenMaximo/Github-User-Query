import React from 'react';
import SearchHeading from '../../Components/SearchHeading';
import SearchBar from './../../Components/SearchBar';

import './index.css';

const Home = props => {
    return (
        <div className="home d-flex justify-content-center align-items-center">
            <SearchHeading />
            <SearchBar />
        </div>
    )
}

export default Home;