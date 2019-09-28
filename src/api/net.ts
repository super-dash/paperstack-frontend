import axios from 'axios';
import { config } from './const';

function getUrl(url: string) {
  return `${config.baseUrl}${url}`;
}

class Network {
  get(path: string, params?: any) {
    return axios({
      url: getUrl(path),
      method: 'get',
      params
    }).then(response => {
      return response.data;
    }).catch(error => {
      console.log(error);
      if (error.response) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });
  }

  post(path: string, data?: any) {
    return axios({
      url: getUrl(path),
      method: 'post',
      data
    }).then(response => {
      return response.data;
    }).catch(error => {
      console.log(error);
      if (error.response) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });
  }
}

export default new Network();
