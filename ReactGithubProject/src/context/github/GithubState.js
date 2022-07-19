import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer'

import {
    SEARCH_USER,
    GET_USERS,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const GithubState = props => {
    const initalState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initalState);

    //Search Users
    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        dispatch({
            type: SEARCH_USER,
            payload: res.data.items
        });
    }
    //Get User
    const getUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${text}`);
        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    }
    //Get Repos
    const getUsersRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    }
    //Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS })
    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <githubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            getUsers,
            clearUsers,
            getUsersRepos

        }}
    >
        {props.children}
    </githubContext.Provider>
}

export default GithubState;
