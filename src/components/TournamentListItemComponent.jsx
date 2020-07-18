import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
class TournamentListItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tournament: props.tournament };
  }

  render() {
    let tour = this.state.tournament;
    let currTime = Date.now() / 1000;
    let startTime = new Date(0);
    startTime.setUTCSeconds(tour.startTime);
    let genTime = startTime;
    startTime = startTime.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
    });
    let endTime = new Date(0);
    endTime.setUTCSeconds(tour.endTime);
    endTime = endTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return (
      <Link
        to={'/tournaments/' + tour._id}
        className='list-group-item list-group-item-action list-group-item-dark'
      >
        <Row className>
          <h5 className={'col-6 m-auto text-center'}>{tour.name}</h5>
          <h7 className={'col m-auto d-none d-md-block'}>
            {tour.teams.length} Teams Registered
          </h7>
          <div className={'col m-auto'}>
            <h7 className='row justify-content-center'>
              {genTime.toLocaleDateString('en-US', { style: 'short' })}
            </h7>
            <h7 className={'row justify-content-center'}>
              {startTime} - {endTime}
            </h7>
          </div>
        </Row>
      </Link>
    );
  }
}

export default TournamentListItemComponent;
