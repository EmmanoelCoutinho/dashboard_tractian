import { ReactNode, createContext, useCallback, useEffect, useContext } from 'react';

import { apiContext } from './apiContexts';

interface Iexports {
  HelthInsights: () => any[];
}

interface IapiProviderProps {
  children: ReactNode;
}

export const insightsContext = createContext({} as Iexports);

export function insightsProvider({ children }: IapiProviderProps) {
  const { dataAssets } = useContext(apiContext);

  const HelthInsights = useCallback(() => {
    const takeValues = dataAssets.map((data: any) => {
      return { name: data.name, hs: data.healthscore };
    });

    const filtred = takeValues.filter((data: any) => {
      if (data.hs < 70) {
        return true;
      }
    });
    return filtred;
  }, [dataAssets]);

  useEffect(() => {
    HelthInsights();
  }, []);

  return <insightsContext.Provider value={{ HelthInsights }}>{children}</insightsContext.Provider>;
}
