import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from '../context/AuthContextProvider';

import '../global.css';
import '../base.css';

import '../components/Layout';
import Layout from '../components/Layout';

const queryClient = new QueryClient();

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
