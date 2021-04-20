import { AxiosPromise } from 'axios';
import baseUrl from './baseUrl';

export default class fetchUsers {
  public async executer(id: any): Promise<AxiosPromise> {
    return baseUrl({
      url: `/users/${id}`,
      method: 'GET'
    });
  }
}
