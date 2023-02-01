import { uuidv4 } from '@firebase/util';
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getDatabase, ref, child, get, set, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

const database = getDatabase(app);
const dbRef = ref(getDatabase());

//Auth

//로그인 계정 선택 매번 킬건지 옵션
// provider.setCustomParameters({
//   prompt: 'select_account',
// });

export async function login() {
  return await signInWithPopup(auth, provider).catch((error) => error);
}

export async function logout() {
  return signOut(auth).catch((error) => error);
}

export async function onAuthChange(setState) {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const updatedUser = user && (await getAdmin(user));
      console.log(updatedUser);
      setState(updatedUser);
    } else {
      return setState(null);
    }
  });
}

export async function getAdmin(user) {
  return await get(child(dbRef, `admin`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admin = snapshot.val();
        console.log(user.uid, admin);
        const isAdmin = admin.includes(user.uid);

        return { ...user, Admin: isAdmin };
      }
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function setNewProduct(product, img) {
  const id = uuidv4();
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    img,
    price: parseInt(product.price),
    option: product.option.split(','),
  });
}

export async function getProducts() {
  return await get(child(dbRef, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function addAndEditCart(id, product) {
  return await set(ref(database, `cart/${id}/${product.id}`), product);
}

export async function getCart(userId) {
  return await get(child(dbRef, `cart/${userId}`)).then((snapshot) => {
    const carts = snapshot.val() || {};

    return Object.values(carts);
  });
}

export async function removeCart(userId, prdocutId) {
  return await remove(ref(database, `cart/${userId}/${prdocutId}`));
}
