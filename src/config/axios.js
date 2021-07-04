import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: '',
  timeout: 20000,
});

export default clienteAxios;
