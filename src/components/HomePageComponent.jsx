import React from 'react';
import NavbarComponent from './NavbarComponent';
import TournamentListComponent from './TournamentListComponent';

class HomePageComponent extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className='container'>
          <TournamentListComponent />
        </div>
      </div>
    );
  }
}

export default HomePageComponent;
