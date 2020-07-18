import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePageComponent from './HomePageComponent';
import TournamentDetailComponent from './TournamentDetailComponent';

class Tournaments extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact={true} component={HomePageComponent} />
          <Route
            path='/tournaments/:tournamentId'
            exact={true}
            component={TournamentDetailComponent}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Tournaments;
