import React from 'react';
import { Accordion, Card, Row } from 'react-bootstrap';
import MatchCardComponent from './MatchCardComponent';
class TeamCardComponent extends React.Component {
  render() {
    const team = this.props.team;
    return (
      <Accordion>
        <Card bg='dark'>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <Row className='align-items-center justify-content-between'>
              <h5>{team.name}</h5>
              <h5>Score: {team.score}</h5>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              {team.matches.map(matchId => (
                <MatchCardComponent key={matchId} matchId={matchId} />
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default TeamCardComponent;
