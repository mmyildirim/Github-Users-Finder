import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/githubContext'
import { useContext } from 'react'

const Users = () => {
  const githubContext = useContext(GithubContext)
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />
  }
  else {
    return (
      <div className='userGrid'>
        {users.map(user => (
          <UserItem key={user.id} user={user} loading={loading} />
        ))}
      </div>
    )
  }
}

export default Users