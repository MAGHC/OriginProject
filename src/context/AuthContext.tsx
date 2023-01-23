import { createContext, useState, useEffect, useContext } from 'react';

import { onAuthChange } from '../api/firebase.js';

import { LoginI } from '../type/AuthType.js';

interface PropsI {
  children: React.ReactNode;
}

interface ContextI {
  user: null | LoginI;
}

const AuthContext = createContext<ContextI>({ user: null });

export const AuthContextProvider = ({ children }: PropsI) => {
  const [user, setUser] = useState<null | LoginI>(null);

  useEffect(() => {
    onAuthChange(setUser);
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
