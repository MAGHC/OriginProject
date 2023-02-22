import { render, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Products from './../Products';

import { withAllContext, withRouter } from '../../tests/utils';
import { Route } from 'react-router-dom';
import { mockProducts } from '../../tests/data';

describe('Products', () => {
  const mockAuth = {
    login: jest.fn(),
    logout: jest.fn(),
    uid: null,
    user: null,
  };

  const mockGetProdut = jest.fn();

  afterEach(() => {
    mockGetProdut.mockReset();
  });

  it('snapshot', () => {
    mockGetProdut.mockImplementation(() => mockProducts);

    const component = renderer
      .create(
        withAllContext(
          withRouter(
            <Route path="/" element={<Products getProducts={mockGetProdut}></Products>}></Route>,
          ),
          mockAuth,
        ),
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('error renders', async () => {
    mockGetProdut.mockImplementation(() => null);

    renderProduts();
    await waitFor(() => screen.findByText('에러'));
  });

  it('success renders', async () => {
    mockGetProdut.mockImplementation(() => mockProducts);
    renderProduts();

    await (waitFor(() => screen.findByText('test14')), { timeout: 3000 });
  });

  function renderProduts() {
    return render(
      withAllContext(
        withRouter(
          <Route path="/" element={<Products getProducts={mockGetProdut}></Products>}></Route>,
        ),
        mockAuth,
      ),
    );
  }
});

export {};
