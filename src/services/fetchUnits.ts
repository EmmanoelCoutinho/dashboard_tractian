import { AxiosPromise } from 'axios';
import baseUrl from './baseUrl';

export default class fetchUnits {
  public async executer(): Promise<AxiosPromise> {
    return baseUrl({
      url: '/units',
      method: 'GET'
    });
  }
}
