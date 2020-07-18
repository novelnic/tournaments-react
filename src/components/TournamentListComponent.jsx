import React from 'react';
import TournamentListItemComponent from './TournamentListItemComponent';
import TournamentService from '../services/TournamentService';

class TournamentListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tournaments: [] };
  }

  componentDidMount() {
    TournamentService.getTournaments().then(actualTournaments =>
      this.setState({ tournaments: actualTournaments.data })
    );
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Current Tournaments</h2>
        <ul className='list-group'>
          {this.state.tournaments &&
            this.state.tournaments.map(tournament => (
              <TournamentListItemComponent
                key={tournament._id}
                tournament={tournament}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default TournamentListComponent;
