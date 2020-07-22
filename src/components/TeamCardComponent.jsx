import React from 'react';
import { Accordion, Card, Row } from 'react-bootstrap';
import MatchCardComponent from './MatchCardComponent';
import MatchService from '../services/MatchService';
import computeScore from '../utils/score';

class TeamCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: this.props.team,
      matches: [],
    };
  }

  componentDidMount() {
    MatchService.getMatches(`teamId=${this.state.team._id}`).then(matches => {
      let top3 = matches.data
        .sort((a, b) => computeScore([b]) - computeScore([a]))
        .slice(0, 3);
      this.setState({ matches: top3 });
    });
  }

  render() {
    const team = this.state.team;
    return (
      <Accordion>
        <Card bg='dark'>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <Row className='align-items-center justify-content-between mx-auto'>
              <h5>{team.name}</h5>
              <h5>Score: {team.score}</h5>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body className={'card-deck cols-sm-1'}>
              {this.state.matches.map(match => (
                <MatchCardComponent key={match._id} match={match} />
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default TeamCardComponent;
