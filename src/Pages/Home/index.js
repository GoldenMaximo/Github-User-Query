import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// vou usar useSelector pra pega o loading e fazer conditional rendering no icon do button
import { useSelector, useDispatch } from 'react-redux';
import { Creators as getUser } from '../../Store/Ducks/getUser';


import SearchHeading from '../../Components/SearchHeading';
import SearchBar from '../../Components/SearchBar';
import './index.css';


const Home = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');


    const loading = useSelector(state => state.getUser.loading);
    const userData = useSelector(state => state.getUser.data);
    const error = useSelector(state => state.getUser.error);

    if (Object.entries(userData).length || error) {
        return (
            <Redirect to={`/${userData.id}`} />
        );
    }

    const submitHandler = event => {
        event.preventDefault();
        dispatch(getUser.get(username));
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
            />
        </div>
    );
};

export default Home;
