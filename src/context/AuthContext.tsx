import { createContext, useContext } from 'react';

import { LoginI } from '../type/AuthType.js';

export interface ContextI {
  uid: null | string;
  user: null | LoginI;
  login: () => {};
  logout: () => {};
}

export const AuthContext = createContext<ContextI | null>(null);

export const useAuthContext = () => useContext(AuthContext);
