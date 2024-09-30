import { createContext, useContext } from 'react';
import api from '@/services/axios';

// Axios 인스턴스를 저장할 Context 생성
const AxiosContext = createContext(api);

// Context를 사용하기 쉽게 하는 커스텀 Hook
export const useAxios = () => useContext(AxiosContext);

// AxiosProvider를 통해 Axios 인스턴스를 전역으로 제공
export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  return <AxiosContext.Provider value={api}>{children}</AxiosContext.Provider>;
};
