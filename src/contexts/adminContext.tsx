import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';

interface Iexports {
  oi: string;
}

interface IapiProviderProps {
  children: ReactNode;
}

export const adminContext = createContext({} as Iexports);

export function adminProvider({ children }: IapiProviderProps) {
  const oi = 'oi';

  return <adminContext.Provider value={{ oi }}>{children}</adminContext.Provider>;
}
