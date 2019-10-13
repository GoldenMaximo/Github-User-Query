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
            <div className="d-flex row align-items-center justify-content-space-evenly">
                <div>
                    <SearchHeading />
                </div>
                <div className="search-bar-container">
                    <SearchBar inputWidth="100%" />
                </div>
            </div>
            <div className="row">
                <p>teste</p>
            </div>
        </div>
    );
};

export default Result;
