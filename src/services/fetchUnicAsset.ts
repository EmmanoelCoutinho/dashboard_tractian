import { AxiosPromise } from 'axios';
import baseUrl from './baseUrl';

export default class fetchAssets {
  public async executer(idAsset: any): Promise<AxiosPromise> {
    if (idAsset !== '') {
      return baseUrl({
        url: `/assets/${idAsset}`,
        method: 'GET'
      });
    }
  }
}
