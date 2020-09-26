import axios from 'axios';
import io from 'socket.io-client';

axios.defaults.baseURL = '';

export default {
  getTournaments: () => axios.get('/api/tournaments'),
  getTournament: (id) => axios.get('/api/tournaments/' + id),
  deleteTournament: (id) => axios.delete('/api/tournaments/' + id),
  saveTournament: (tournamentData) =>
    axios.post('/api/tournaments', tournamentData),
  updateScores: (id, socket, callback) => {
    socket.on('scores', (data) => {
      callback(data);
    });
  },
  connectToSocket: (id) => {
    const socket = io().connect();
    console.log('connecting to socket');
    socket.emit('scores', { tournamentId: id });
    return socket;
  },
  disconnectFromSocket: (socket) => {
    socket.disconnect();
  },
};
