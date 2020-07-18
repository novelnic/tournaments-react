import axios from 'axios';

export default {
  getTeams: () => axios.get('/api/teams'),
  getTeamScore: id => axios.get(`/api/teams/${id}/score`),
  getTeam: id => axios.get('/api/teams/' + id),
  deleteTeam: id => axios.delete('/api/teams/' + id),
  saveTeam: teamData => axios.post('/api/teams', teamData),
  findTeamsByTournament: tournamentId =>
    axios.get('/api/teams', { params: { tournamentId } }),
};
