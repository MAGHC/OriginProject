import { MemoryRouter, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AuthContext, ContextI } from './../context/AuthContext';

export function withRouter(routes: React.ReactElement, initalEntry = ['/']) {
  return (
    <MemoryRouter initialEntries={initalEntry}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}

export function withAllContext(children: React.ReactNode, auth: ContextI) {
  const testClient = createTestQueryClient();
  return (
    <QueryClientProvider client={testClient}>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </QueryClientProvider>
  );
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
    },
  });
}
