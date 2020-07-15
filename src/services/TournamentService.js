import axios from 'axios';

export default {
  getTournaments: () => axios.get('api/tournaments'),
  getTournament: id => axios.get('api/tournaments/' + id),
  deleteTournament: id => axios.delete('api/tournaments/' + id),
  saveTournament: tournamentData =>
    axios.post('api/tournaments', tournamentData),
};
