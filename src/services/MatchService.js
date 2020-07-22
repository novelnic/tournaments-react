import axios from 'axios';

export default {
  getMatches: query => axios.get('/api/matches' + `?${query}`),
  getMatch: id => axios.get('/api/matches/' + id),
};
