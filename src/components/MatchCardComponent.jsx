import React from 'react';
import { Card, Row } from 'react-bootstrap';
import MatchService from '../services/MatchService';
import computeScore from '../utils/score';

class MatchCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: {},
    };
  }

  componentDidMount() {
    let matchId = this.props.matchId;
    MatchService.getMatch(matchId).then(({ data: match }) => {
      this.setState({ match });
    });
  }

  render() {
    let players = this.state.match && this.state.match.players;
    let totKills =
      players && players.reduce((acc, player) => (acc += player.kills), 0);
    return (
      <Card bg='secondary'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <h6>{computeScore([this.state.match])} points</h6>
          <h6>{totKills} Kills</h6>
          <h6>Placement: {this.state.match && this.state.match.placement}</h6>
        </Card.Header>
        <Card.Body>
          {players &&
            players.map(player => {
              return (
                <Row
                  key={player.username}
                  className='justify-content-between align-items-center'
                >
                  <h6>{player.username}</h6>
                  <h6>{player.kills} Kills</h6>
                </Row>
              );
            })}
        </Card.Body>
      </Card>
    );
  }
}

export default MatchCardComponent;
