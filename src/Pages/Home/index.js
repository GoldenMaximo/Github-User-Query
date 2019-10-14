import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// vou usar useSelector pra pega o loading e fazer conditional rendering no icon do button
import { useSelector, useDispatch } from 'react-redux';
import { Creators as getUserData } from '../../Store/Ducks/getUserData';


import SearchHeading from '../../Components/SearchHeading';
import SearchBar from '../../Components/SearchBar';
import './index.css';


const Home = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const error = useSelector(state => state.getUserData.error);
    const loading = useSelector(state => state.getUserData.loading);
    const userData = useSelector(state => state.getUserData.userData);

    if (Object.entries(userData).length || error) {
        return (
            <Redirect to={`/${userData.login}`} />
        );
    }

    const submitHandler = event => {
        event.preventDefault();
        dispatch(getUserData.get(username));
    };

    const onChangeTextHandler = event => {
        setUsername(event.target.value);
    };

    return (
        <div className="home d-flex justify-content-center align-items-center">
            <SearchHeading />
            <SearchBar
                value={username}
                onChangeText={onChangeTextHandler}
                onSubmit={submitHandler}
                loading={loading}
                inputWidth="32.6vw"
            />
        </div>
    );
};

export default Home;
