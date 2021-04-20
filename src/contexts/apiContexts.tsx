import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

import fetchAssets from '../services/fetchAssets';

interface Iexports {
  dataAssets: any;
}

interface IapiProviderProps {
  children: ReactNode;
}

export const apiContext = createContext({} as Iexports);

export function ApiProvider({ children }: IapiProviderProps) {
  const [dataAssets, setDataAssets] = useState([]);

  //ASSETS CALL
  const GetAssets = useCallback(async () => {
    const response = new fetchAssets();
    try {
      const { data } = await response.executer();
      setDataAssets(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    GetAssets();
  }, []);

  return <apiContext.Provider value={{ dataAssets }}>{children}</apiContext.Provider>;
}
