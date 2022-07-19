import React from 'react';
import RepoItem from './RepoItem';
import { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
    const githubContext = useContext(GithubContext);
    const { repos } = githubContext;
    return repos.map((repo, index) => <RepoItem repo={repo} key={index} />)
}

export default Repos;

