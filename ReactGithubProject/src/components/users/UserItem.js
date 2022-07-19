import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card py-2 text-center'>
      <img
        src={avatar_url}
        style={{ width: '60px', borderRadius: '50%' }}
        className='round-img mx-auto my-2' />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  )
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
export default UserItem