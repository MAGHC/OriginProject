import { useState, useEffect } from 'react';

import { onAuthChange, login, logout } from '../api/firebase.js';

import { AuthContext } from './AuthContext';

import { LoginI } from '../type/AuthType';

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | LoginI>(null);

  useEffect(() => {
    onAuthChange(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, uid: user && user.uid, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
