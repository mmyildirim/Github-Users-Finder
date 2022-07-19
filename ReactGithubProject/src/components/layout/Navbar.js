import React from 'react';
import PropTypes from 'prop-types'
import '../../App.css';
import { Link } from 'react-router-dom';
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-dark text-light justify-content-between'>
      <Link to='/'>
        <h1 className='headerLogo'>
          <i className={icon} />{title}
        </h1>
      </Link>
      <div>
        <Link className='mr-2' to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

    </nav>
  )
}
Navbar.defaultProps = {
  title: "Github Search Users",
  icon: "btn"
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
export default Navbar