import React from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Jup Null Tournaments
        </Link>
      </nav>
    );
  }
}

export default NavbarComponent;
