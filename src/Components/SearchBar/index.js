import React from 'react';
// import SearchIcon from './../../Assets/Icons/Search Icon.svg'
import { ReactComponent as SearchIcon } from './../../Assets/Icons/Search Icon.svg';
import './index.css';

const SearchBar = props => {
    return (
        <form className="form d-flex row align-items-center">
            <input type="text" name="searchInput" id="searchInput" className="Search-Input"/>
            <button type="submit" className="d-flex justify-content-center">
                <SearchIcon />
            </button>
        </form>
    )
}

export default SearchBar;