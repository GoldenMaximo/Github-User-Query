import React from 'react';
import { useSelector } from 'react-redux';
// import { Creators as getUser } from '../../Store/Ducks/getUser';


import SearchHeading from '../../Components/SearchHeading';
import SearchBar from '../../Components/SearchBar';
import './index.css';


const Result = () => {
    // const dispatch = useDispatch();
    // const [username, setUsername] = useState('');


    // const loading = useSelector(state => state.getUser.loading);
    const userData = useSelector(state => state.getUser.data);
    if (Object.entries(userData).length) {
        console.log('diferente de vazio');
    } else {
        console.log('vaziozz~ao');
    }


    // const submitHandler = event => {
    //     event.preventDefault();
    //     dispatch(getUser.get(username));
    // };

    // const onChangeTextHandler = event => {
    //     setUsername(event.target.value);
    // };

    return (
        <div className="Result">
            {/* <div className="d-flex row">
                <div className="d-flex col pl-2">
                    <SearchHeading />
                    </div>
                    <div className="d-flex col pl-8 justify-content-center">
                    <SearchBar inputWidth="100%" />
                    </div>
                </div> */}
            <div className="d-flex row flex-wrap align-items-center justify-content-space-evenly">
                <div>
                    <SearchHeading />
                </div>
                <div className="search-bar-container">
                    <SearchBar inputWidth="100%" />
                </div>
            </div>
            {/* <div className="row">
                <div className="d-flex col">
                    <img src={userData.avatar_url} alt="Avatar" />
                </div>
                <div className="d-flex col">
                    <p>teste</p>
                </div>
            </div> */}
            <div className="d-flex row flex-wrap align-items-center justify-content-space-evenly">
                <div>
                    <img src={userData.avatar_url} alt="Avatar" />
                </div>
                <div className="search-bar-container">
                    {/* {userData.map((number) =>
                        <li>{number}</li>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default Result;
