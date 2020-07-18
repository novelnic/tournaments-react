import React from 'react';
import { Link } from 'react-router-dom';
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
    startTime = startTime.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
    });
    let endTime = new Date(0);
    endTime.setUTCSeconds(tour.endTime);
    endTime = endTime.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
    });
    return (
      <Link
        to={'/tournaments/' + tour._id}
        className='list-group-item list-group-item-dark d-flex align-items-center justify-content-between'
      >
        <h5>{tour.name}</h5>
        <h5>{tour.teams.length} Teams Registered</h5>
        <h5>
          {startTime} - {endTime}
        </h5>
      </Link>
    );
  }
}

export default TournamentListItemComponent;
