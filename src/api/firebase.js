import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

//Auth

//로그인 계정 선택 매번 킬건지 옵션
// provider.setCustomParameters({
//   prompt: 'select_account',
// });

export async function login() {
  return await signInWithPopup(auth, provider)
    .then((res) => res.user)
    .catch((error) => error);
}

export async function logout() {
  return signOut(auth)
    .then(() => null)
    .catch((error) => error);
}

export async function onAuthChange(setState) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setState(user);
    } else {
      return setState(null);
    }
  });
}
