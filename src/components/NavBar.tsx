import Link from 'next/link';
import Image from 'next/image';

import Logo from '../assets/images/Logo.svg';

import { BiLogIn, BiCartAlt, BiCubeAlt, BiLogOut } from 'react-icons/bi';

import User from './User';

import { useAuthContext } from '../context/AuthContext';
import { useCart } from './../hooks/useCart';
import { ContextI } from './../context/AuthContext';

const NAV_COMMON_STYLE =
  ' transition duration-300 hover:scale-110 font-light font-title gap-1 flex items-center ';

const NavBar = () => {
  const { user, login, logout } = useAuthContext() as ContextI;

  const { carts } = useCart();
  return (
    <header className=" z-50 w-screen sticky top-0  px-12 flex justify-between bg-slate-900 p-4">
      <Link href="/">
        <Image width={120} src={Logo} alt="logo"></Image>
      </Link>
      <nav className=" items-center  flex gap-8 text-white font-light">
        <Link className={`${NAV_COMMON_STYLE} `} href="/product/new">
          <BiCubeAlt></BiCubeAlt>New Products
        </Link>
        <Link className={`${NAV_COMMON_STYLE} relative`} href="/cart">
          <span className=" absolute text-sm left-0.5 -top-3">{carts && carts.length}</span>
          <BiCartAlt></BiCartAlt>Cart
        </Link>
        {!user && (
          <button onClick={login} className={`${NAV_COMMON_STYLE} mr-5`}>
            <BiLogIn></BiLogIn>
            Login
          </button>
        )}
        {user && <User user={user}></User>}
        {user && (
          <button onClick={logout} className={`${NAV_COMMON_STYLE} mr-5`}>
            <BiLogOut></BiLogOut>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
