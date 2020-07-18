import React from 'react';
import NavbarComponent from './NavbarComponent';
import TournamentService from '../services/TournamentService';
import TeamService from '../services/TeamService';
import TeamCardComponent from './TeamCardComponent';

class TournamentDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tournament: {},
      teams: [],
    };
  }

  componentDidMount() {
    let tId = this.props.match.params.tournamentId;
    TournamentService.getTournament(tId).then(({ data: tourn }) => {
      TeamService.findTeamsByTournament(tourn._id).then(
        async ({ data: teams }) => {
          teams = await Promise.all(
            teams.map(async team => {
              return await TeamService.getTeamScore(team._id).then(
                ({ data: score }) => {
                  return { ...team, score };
                }
              );
            })
          );
          this.setState({ tournament: tourn, teams: teams });
        }
      );
    });
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className='container'>
          <h1 className={'text-center'}>{this.state.tournament.name}</h1>
          {this.state.teams
            .sort((a, b) => b.score - a.score)
            .map(team => (
              <TeamCardComponent key={team._id} team={team} />
            ))}
        </div>
      </div>
    );
  }
}

export default TournamentDetailComponent;
