import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:1337/api/',
});

export default axios;