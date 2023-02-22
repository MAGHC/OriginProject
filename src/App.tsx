import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthContextProvider } from './context/AuthContextProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <NavBar></NavBar>
          <Outlet></Outlet>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
