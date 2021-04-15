import { AxiosPromise } from 'axios';
import baseUrl from './baseUrl';

export default class fetchUsers {
  public async executer(): Promise<AxiosPromise> {
    return baseUrl({
      url: '/users',
      method: 'GET'
    });
  }
}
