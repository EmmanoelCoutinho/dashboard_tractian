import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tractian/fake-api'
});

export default baseUrl;
