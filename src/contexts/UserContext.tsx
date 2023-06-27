import {createContext, useContext, useEffect, useState} from 'react';
import {storage} from '../config/storage';

interface UserContextProps {
  children: React.ReactNode;
}

interface UserContextType {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  isLogin: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({children}: UserContextProps) => {
  const [isLogin, setIsLogin] = useState(false);

  const saveLogin = (isLogin: boolean) => {
    storage.set('isLogin', isLogin);
  };

  useEffect(() => {
    const getLogin = () => {
      const isLogin = storage.getBoolean('isLogin');
      if (isLogin) {
        setIsLogin(isLogin);
      }
    };
    getLogin();
  }, []);

  const login = () => {
    setIsLogin(true);
    saveLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
    saveLogin(false);
  };

  return (
    <UserContext.Provider value={{isLogin, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
