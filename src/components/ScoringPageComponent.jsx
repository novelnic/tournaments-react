import React from 'react';
import NavbarComponent from './NavbarComponent';
import ScoringTableComponent from './ScoringTableComponent';

class ScoringPageComponent extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className='container'>
          <ScoringTableComponent />
        </div>
      </div>
    );
  }
}

export default ScoringPageComponent;
