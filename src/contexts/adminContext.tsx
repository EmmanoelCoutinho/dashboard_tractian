import { ReactNode, createContext, useCallback, useEffect, useState, useContext } from 'react';

//importing api calls
import { apiContext } from './apiContexts';
import fetchCompanies from '../services/fetchCompanies';
import fetchUnits from '../services/fetchUnits';
import fetchUser from '../services/fetchUsers';
import fetchUnicUser from '../services/fetchUnicUser';
import fetchUnicAsset from '../services/fetchUnicAsset';

interface Iexports {
  dataCompanies: any[];
  dataUnits: any[];
  dataUsers: any[];
  dataUnicUser: IdataUnicUsers;
  dataUnicAsset: IdataUnicAsset;
  GetUnicUser: (idProfile: string) => void;
  GetUnicAsset: (idAsset: any) => void;
  FilterAssets: () => any[];
}

interface IdataUnicUsers {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
}

interface IdataUnicAsset {
  id: number;
  sensors: [string];
  model: string;
  status: string;
  healthscore: 0;
  name: string;
  image: string;
  specifications: Ispecifications;
  metrics: Imetrics;
  unitId: number;
  companyId: number;
}

interface Ispecifications {
  maxTemp: number;
}

interface Imetrics {
  totalCollectsUptime: number;
  totalUptime: number;
  lastUptimeAt: string;
}

interface IapiProviderProps {
  children: ReactNode;
}

export const adminContext = createContext({} as Iexports);

export function adminProvider({ children }: IapiProviderProps) {
  const { dataAssets } = useContext(apiContext);

  const [dataCompanies, setDataCompanies] = useState([]);
  const [dataUnits, setDataUnits] = useState([]);
  const [dataUsers, setDataUsers] = useState([]);
  const [dataUnicUser, setDataUnicUser] = useState<IdataUnicUsers>({
    id: 0,
    email: '',
    name: '',
    unitId: 1,
    companyId: 1
  });
  const [dataUnicAsset, setDataUnicAsset] = useState<IdataUnicAsset>({
    id: 0,
    sensors: [''],
    model: '',
    status: '',
    healthscore: 0,
    name: '',
    image: '',
    specifications: {
      maxTemp: 0
    },
    metrics: {
      totalCollectsUptime: 0,
      totalUptime: 0,
      lastUptimeAt: ''
    },
    unitId: 0,
    companyId: 0
  });

  //API CALL AREA
  //TAKE API DATA **COMPANIES**
  const GetCompanies = useCallback(async () => {
    const response = new fetchCompanies();
    try {
      const { data } = await response.executer();
      setDataCompanies(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //TAKE API DATA **UNITS**
  const GetUnits = useCallback(async () => {
    const response = new fetchUnits();
    try {
      const { data } = await response.executer();
      setDataUnits(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //TAKE API DATA **USERS**
  const GetUsers = useCallback(async () => {
    const response = new fetchUser();
    try {
      const { data } = await response.executer();
      setDataUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //TAKE JUST ONE USER
  const GetUnicUser = useCallback(async (idProfile) => {
    const response = new fetchUnicUser();
    try {
      const { data } = await response.executer(idProfile);
      setDataUnicUser(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //TAKE JUST ONE ASSET
  const GetUnicAsset = useCallback(async (idAsset) => {
    const response = new fetchUnicAsset();
    try {
      const { data } = await response.executer(idAsset);
      setDataUnicAsset(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //CONTROL FUNCTIONS AREA
  const FilterAssets = useCallback(() => {
    const filtred = dataAssets.filter((data: any) => {
      if (data.unitId === dataUnicUser.unitId && data.companyId === dataUnicUser.companyId) {
        return true;
      }
    });
    return filtred;
  }, [dataUnicUser, dataAssets]);

  useEffect(() => {
    GetCompanies();
    GetUnits();
    GetUsers();
    FilterAssets();
  }, []);

  return (
    <adminContext.Provider
      value={{
        dataCompanies,
        dataUnits,
        dataUsers,
        dataUnicUser,
        GetUnicUser,
        GetUnicAsset,
        FilterAssets,
        dataUnicAsset
      }}>
      {children}
    </adminContext.Provider>
  );
}
