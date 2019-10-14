import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators as getUserData } from '../../Store/Ducks/getUserData';
import { Creators as getUserRepos } from '../../Store/Ducks/getUserRepos';

import SearchHeading from '../../Components/SearchHeading';
import SearchBar from '../../Components/SearchBar';
import Details from '../../Components/Details';
import './index.css';

import RepoIcon from '../../Assets/Icons/Repo Icon.png';
import StarIcon from '../../Assets/Icons/Star Icon.png';
import LocationIcon from '../../Assets/Icons/Location Icon.png';
import FollowersIcon from '../../Assets/Icons/Followers Icon.png';
import OrganizationIcon from '../../Assets/Icons/Organization Icon.png';

const Result = props => {
    const userData = useSelector(state => state.getUserData.userData);
    const userRepos = useSelector(state => state.getUserRepos.userRepos);

    const dispatch = useDispatch();

    if (!Object.entries(userData).length) {
        dispatch(getUserData.get(props.match.params.userLogin));
    }

    useEffect(() => {
        if (userData.login) {
            dispatch(getUserRepos.get(userData.login));
        }
    }, [userData]);

    return (
        <div className="Result">
            <div className="d-flex row flex-wrap align-items-center justify-content-space-evenly">
                <div>
                    <SearchHeading />
                </div>
                <div className="w-60">
                    <SearchBar inputWidth="100%" />
                </div>
            </div>
            {Object.entries(userData).length ? (
                <div className="pt-3 d-flex row flex-wrap align-items-center justify-content-space-evenly">
                    <div className="col flex-wrap align-self-baseline">
                        <img src={userData.avatar_url} alt="Avatar" className="d-flex user-picture" />
                        <span className="user-name d-flex pt-3">{userData.name}</span>
                        <Details className="pt-3" height="25px">{userData.login}</Details>
                        <div className="pt-5">
                            {userData.company ? (
                                <div className="d-flex align-items-center pt-3">
                                    <img src={OrganizationIcon} alt="Organization icon" />
                                    <Details className="pl-2">{userData.company}</Details>
                                </div>
                            ) : null}
                            {userData.location ? (
                                <div className="d-flex align-items-center pt-3">
                                    <img src={LocationIcon} alt="Location icon" />
                                    <Details className="pl-2">{userData.location}</Details>
                                </div>
                            ) : null}
                            {userData.public_repos ? (
                                <div className="d-flex align-items-center pt-3">
                                    <img src={RepoIcon} alt="Repositories icon" />
                                    <Details className="pl-2">{userData.public_repos}</Details>
                                </div>
                            ) : null}
                            {userData.followers ? (
                                <div className="d-flex align-items-center pt-3">
                                    <img src={FollowersIcon} alt="Followers icon" />
                                    <Details className="pl-2">{userData.followers}</Details>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="w-60 pt-10-700">
                        <div className="d-flex col">
                            {userRepos.length ? (
                                userRepos.map(repo => (
                                    <div key={repo.id} className="d-flex row pb-2 pb-10-700">
                                        <div className="d-flex col">
                                            <span className="repo-name d-flex flex-one pb-10-700">{repo.name}</span>
                                            <span className="repo-description d-contents flex-one pt-1">{repo.description}</span>
                                            <Details className="pt-1">
                                                <img src={StarIcon} className="pr-3" alt="Stargazes icon" />
                                                {repo.stargazers_count}
                                            </Details>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
        </div>
    );
};

export default Result;
