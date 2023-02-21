import { MemoryRouter, Routes } from 'react-router-dom';

export function withRouter(routes: React.ReactElement, initalEntry = ['/']) {
  return (
    <MemoryRouter initialEntries={initalEntry}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}
