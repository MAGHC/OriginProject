import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { BiLogIn, BiCartAlt, BiCubeAlt, BiLogOut } from 'react-icons/bi';

import { login, logout } from '../api/firebase.js';

import { LoginI } from '../type/AuthType';
import User from './User';

const NAV_COMMON_STYLE =
  ' transition duration-300 hover:scale-110 font-light font-body gap-1 flex items-center ';

const NavBar = () => {
  const [user, setUser] = useState<null | LoginI>(null);

  const handleLogin = () => {
    login().then((res) => {
      setUser(res);
    });
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <header className="  px-12 flex justify-between bg-slate-900 p-4">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <nav className=" items-center  flex gap-8 text-white font-light">
        <Link className={`${NAV_COMMON_STYLE} `} to="/product">
          <BiCubeAlt></BiCubeAlt>Products
        </Link>
        <Link className={`${NAV_COMMON_STYLE}`} to="/cart">
          <BiCartAlt></BiCartAlt>Cart
        </Link>
        {!user && (
          <button onClick={handleLogin} className={`${NAV_COMMON_STYLE} mr-5`}>
            <BiLogIn></BiLogIn>
            Login
          </button>
        )}
        {user && <User user={user}></User>}
        {user && (
          <button onClick={handleLogout} className={`${NAV_COMMON_STYLE} mr-5`}>
            <BiLogOut></BiLogOut>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
