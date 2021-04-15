import { AxiosPromise } from 'axios';
import baseUrl from './baseUrl';

export default class fetchAssets {
  public async executer(): Promise<AxiosPromise> {
    return baseUrl({
      url: '/assets',
      method: 'GET'
    });
  }
}
