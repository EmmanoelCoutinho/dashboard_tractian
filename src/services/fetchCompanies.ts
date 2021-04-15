import { AxiosPromise } from 'axios';
import baseUrl from './baseUrl';

export default class fetchCompanies {
  public async executer(): Promise<AxiosPromise> {
    return baseUrl({
      url: '/companies',
      method: 'GET'
    });
  }
}
