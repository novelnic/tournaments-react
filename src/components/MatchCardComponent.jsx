import React from 'react';
import { ReactComponent as Podium } from '../icons/rank.svg';
import { ReactComponent as Skull } from '../icons/bone.svg';
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
      <Card className={'m-1'} bg='secondary'>
        <Card.Header>
          <Row className='align-items-center'>
            <h5 className={'m-auto align-text-middle'}>
              {computeScore([this.state.match])} points
            </h5>
            <h6 className={'my-auto mr-2'}>
              {totKills} <Skull style={{ height: '1.5em', width: 'auto' }} />
            </h6>
            <h6 className={'my-auto'}>
              {this.state.match && this.state.match.placement}
              <Podium
                className={'ml-1'}
                style={{ height: '1.5em', width: 'auto' }}
              />
            </h6>
          </Row>
        </Card.Header>
        <Card.Body>
          {players &&
            players
              .sort((a, b) => b.kills - a.kills)
              .map(player => {
                return (
                  <Row
                    key={player.username}
                    className='justify-content-between align-items-center'
                  >
                    <h6>{player.username}</h6>
                    <h6>
                      {player.kills}
                      <Skull
                        className={'ml-1'}
                        style={{ height: '1em', width: 'auto' }}
                      />
                    </h6>
                  </Row>
                );
              })}
        </Card.Body>
      </Card>
    );
  }
}

export default MatchCardComponent;
