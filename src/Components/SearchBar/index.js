import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';


// vou usar useSelector pra pega o loading e fazer conditional rendering no icon do button
import { useSelector, useDispatch } from 'react-redux';
import { Creators as getUserData } from '../../Store/Ducks/getUserData';

import { ReactComponent as SearchIcon } from '../../Assets/Icons/Search Icon.svg';
import { ReactComponent as LoadingSpinner } from '../../Assets/Icons/Loading Spinner.svg';
import './index.css';

const SearchBar = props => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const error = useSelector(state => state.getUserData.error);
    const loading = useSelector(state => state.getUserData.loading);
    const userData = useSelector(state => state.getUserData.userData);
    const userlogin = useSelector(state => state.getUserData.username);

    useEffect(() => {
        if (Object.entries(userData).length) {
            props.history.push(`/${userData.login}`);
        }
        if (error) {
            props.history.push(`/${userlogin}`);
        }
    }, [userData, error, props.history, userlogin]);

    const submitHandler = event => {
        event.preventDefault();
        dispatch(getUserData.get(username));
    };

    const onChangeTextHandler = event => {
        setUsername(event.target.value);
    };

    return (
        <form className="form d-flex row align-items-center" onSubmit={submitHandler}>
            <input
                type="text"
                name="searchInput"
                id="searchInput"
                className="Search-Input"
                style={{
                    width: props.inputWidth,
                    minWidth: props.inputMinWidth,
                    maxWidth: props.inputMaxWidth,
                }}
                onChange={onChangeTextHandler}
                value={username}
            />
            <button type="submit" className="d-flex justify-content-center align-items-center">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <SearchIcon />
                )}
            </button>
        </form>
    );
};

export default withRouter(SearchBar);
