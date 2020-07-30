import React from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Live Tournaments
        </Link>
        {this.props.scoring && this.props.scoring == true && (
          <Link to='/scoring' className='btn btn-primary'>
            Scoring
          </Link>
        )}
      </nav>
    );
  }
}

export default NavbarComponent;
