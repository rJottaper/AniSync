import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.jikan.moe/v4' 
});

export default API;