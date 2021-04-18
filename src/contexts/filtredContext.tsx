import { ReactNode, createContext, useContext, useCallback, useEffect, useState } from 'react';

import { apiContext } from '../contexts/apiContexts';
import { ThemeContext } from 'styled-components';

interface IfiltredStatus {
  inAlert: number;
  inDowntime: number;
  inOperation: number;
  undefined: number;
}

interface Iexports {
  dataFilterStatus: () => IfiltredStatus;
  dataFilterHealth: () => any[];
  activesNumber: number;
}

interface IapiProviderProps {
  children: ReactNode;
}

export const FiltredContext = createContext({} as Iexports);

export function FiltredProvider({ children }: IapiProviderProps) {
  const { dataAssets } = useContext(apiContext);
  const { colors } = useContext(ThemeContext);

  const activesNumber = dataAssets.length;

  const dataFilterStatus = useCallback(() => {
    const status = [];
    const filtred: IfiltredStatus = {
      inAlert: 0,
      inDowntime: 0,
      inOperation: 0,
      undefined: 0
    };

    dataAssets.map((data: any) => {
      status.push(data.status);
    });

    status.forEach(function (i) {
      filtred[i] = (filtred[i] || 0) + 1;
    });

    return filtred;
  }, [dataAssets]);

  const dataFilterHealth = useCallback(() => {
    const components = [];

    dataAssets.map((data: any) => {
      components.push({ name: data.name, y: data.healthscore, color: colors.secundary });
    });

    return components;
  }, [dataAssets]);

  useEffect(() => {
    dataFilterStatus();
  }, [dataFilterStatus]);

  useEffect(() => {
    dataFilterHealth();
  }, [dataFilterHealth]);

  return (
    <FiltredContext.Provider value={{ dataFilterStatus, dataFilterHealth, activesNumber }}>
      {children}
    </FiltredContext.Provider>
  );
}
