import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

import fetchUser from '../services/fetchUsers';
import fetchUnits from '../services/fetchUnits';
import fetchAssets from '../services/fetchAssets';
import fetchCompanies from '../services/fetchCompanies';

interface Iexports {
  dataAssets: any;
}

interface IapiProviderProps {
  children: ReactNode;
}

export const apiContext = createContext({} as Iexports);

export function ApiProvider({ children }: IapiProviderProps) {
  const [dataAssets, setDataAssets] = useState([]);

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
