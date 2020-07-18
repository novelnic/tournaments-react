import React from 'react';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import HomePageComponent from './HomePageComponent';
import TournamentDetailComponent from './TournamentDetailComponent';

class Tournaments extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' exact={true} component={HomePageComponent} />
          <Route
            path='/tournaments/:tournamentId'
            exact={true}
            component={TournamentDetailComponent}
          />
        </div>
      </HashRouter>
    );
  }
}

export default Tournaments;
