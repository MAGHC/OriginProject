import { Fragment } from 'react';
import NavBar from '../components/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main className="  mx-[8rem] h-full ">{children}</main>
    </Fragment>
  );
};

export default Layout;
