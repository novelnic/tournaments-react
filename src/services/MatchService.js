import axios from 'axios';

export default {
  getMatches: () => axios.get('/api/matches'),
  getMatch: id => axios.get('/api/matches/' + id),
};
