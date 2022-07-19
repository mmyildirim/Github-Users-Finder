import React, { Component, useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const User = () => {
  const githubContext = useContext(GithubContext);
  const { getUsers, user, loading, getUsersRepos, repos } = githubContext
  var { name, avatar_url, location, bio, blog, html_url, followers, following, public_repos, public_gists, hirable, login, company } = user;
  let { username } = useParams();

  // props.getUsers(login);
  useEffect(() => {
    getUsers(username);
    getUsersRepos(username);
  }, [])
  if (loading) return <Spinner />;

  return (
    <>
      <div className='d-flex align-items-center'>
        <Link className='text-light mt-1 btn btn-dark btn-md' to="/"><i className="mr-2 fa-solid fa-angle-left"></i>Back To Search</Link>
        <span className='ml-2'>
          Hirable:{''}
          {hirable ? <i className="fa-solid fa-circle-check"></i> : <i className="fa-solid fa-circle-exclamation ml-1"></i>}
        </span>
      </div>


      <div className='card mt-1'>
        <div className="row">
          <div className="col text-center">
            <img src={avatar_url} className='round-img mx-auto my-2' style={{ width: '150px', borderRadius: '50%' }} />
            <h2>{name}</h2>
            <p>Location:{location != null ? location : "Unkown"}</p>
          </div>
          <div className="col pt-2">
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark text-light">Visit Github Profile</a>
            <ul>
              <li>
                {login && <><strong>Username: </strong>{login}</>}
              </li>
              <li>
                {company && <><strong>Company: </strong>{company}</>}
              </li>
              <li>
                {blog && <><strong>Website: </strong>{blog}</>}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="badge-card p-2">
          <div className="badge badge-warning p-2 mt-1">
            Followers: {followers}
          </div>
          <div className="badge badge-info p-2 mt-1">
            Following: {following}
          </div>
          <div className="badge badge-dark p-2 mt-1">
            Public Repos: {public_repos}
          </div>
          <div className="badge badge-secondary p-2 mt-1">
            Public Gists: {public_gists}
          </div>
        </div>

      </div>
      <Repos repos={repos} />
    </>)



}
User.prototype = {
  getUsers: PropTypes.func.isRequired,
  getUsersRepos: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
export default User