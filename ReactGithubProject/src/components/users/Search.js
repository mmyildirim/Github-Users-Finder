import React, { Component } from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
    const githubContext = useContext(GithubContext)
    const { clearUsers, searchUsers, users } = githubContext;
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'danger');
        }
        else {
            searchUsers(text);
            setText('');
        }

    }
    const onChange = (e) => {
        setText(e.target.value)
    }


    return (
        <div>
            <form onSubmit={onSubmit} className="form py-2" >
                <input
                    type="text"
                    placeholder='Search Users.'
                    name='text'
                    className='form-control mb-2'
                    value={text}
                    onChange={onChange}
                />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {users.length > 0 && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            )}
        </div>
    )

}

export default Search