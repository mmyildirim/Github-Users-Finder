import React from 'react'
import PropTypes from 'prop-types';
const RepoItem = ({ repo }) => {
  return (
    <div className='card repo-item'>
      <h4 className='ml-2 pt-1'>
        <a href={repo.html_url}>{repo.name}</a>
      </h4>
    </div>
  )
}
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem;