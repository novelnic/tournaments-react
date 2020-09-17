import React from 'react';
import {ReactComponent as Podium} from '../icons/rank.svg';
import {ReactComponent as Skull} from '../icons/bone.svg';
import {Card, Row} from 'react-bootstrap';
import computeScore from '../utils/score';
import '../styling/MatchCard.css'

class MatchCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match,
    };
  }

  render() {
    let players = this.state.match && this.state.match.players;
    let totKills =
      players && players.reduce((acc, player) => (acc += player.kills), 0);
    return (
      <Card className='m-1 match-card' bg='secondary'>
        <Card.Header className='match-card-header'>
          <Row className='align-items-center'>
            <h5 className='m-auto align-text-middle'>
              {computeScore([this.state.match])} points
            </h5>
            <h6 className='my-auto mr-2 kills-text'>
              {totKills}
            </h6>
            <h6 className='my-auto mr-2'>
              <Skull className='svg'/>
            </h6>
            <h6 className='my-auto placement-text'>
              {this.state.match && this.state.match.placement}
            </h6>
            <h6 className='my-auto'>
              <Podium className={'ml-1 svg'}/>
            </h6>
          </Row>
        </Card.Header>
        <Card.Body className='match-card-body'>
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
                      className={'ml-1 svg'}
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
