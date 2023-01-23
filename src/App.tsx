import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </AuthContextProvider>
    </>
  );
}

export default App;
