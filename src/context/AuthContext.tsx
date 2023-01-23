import { createContext, useState, useEffect, useContext } from 'react';

import { onAuthChange, login, logout } from '../api/firebase.js';

import { LoginI } from '../type/AuthType.js';

interface PropsI {
  children: React.ReactNode;
}

interface ContextI {
  user: null | LoginI;
  login: () => {};
  logout: () => {};
}

const AuthContext = createContext<ContextI>({ user: null, login, logout });

export const AuthContextProvider = ({ children }: PropsI) => {
  const [user, setUser] = useState<null | LoginI>(null);

  useEffect(() => {
    onAuthChange(setUser);
  }, []);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
