import React from 'react';

import SearchHeading from '../../Components/SearchHeading';
import SearchBar from '../../Components/SearchBar';
import './index.css';


const Home = () => (
    <div className="home d-flex justify-content-center align-items-center">
        <SearchHeading />
        <SearchBar
            inputWidth="32.6vw"
        />
    </div>
);

export default Home;
