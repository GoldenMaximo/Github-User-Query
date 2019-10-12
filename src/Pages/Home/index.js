import React, { useState } from 'react';

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
    console.log(loading);
    console.log(userData);


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
            />
        </div>
    );
};

export default Home;
