import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

import { GetProductTypeI } from '../../type/GetProductType';

import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const mockProduct: GetProductTypeI = {
    id: '13',
    img: '',
    title: 'test',
    price: 13000,
    option: ['test'],
    description: 'stest',
    category: 'test',
  };

  const { id, img, title, price, option, description, category } = mockProduct;

  it('product item render', async () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>,
    );
    const image = screen.getByAltText(title);
    expect(image).toHaveAttribute('src', img);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`₩${price.toString()}`)).toBeInTheDocument();
  });

  it('naviagte to ProductDetail page when Clicked', () => {
    function TestComponent() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    }

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ProductCard product={mockProduct} />} />
          <Route path={`/product/${id}`} element={<TestComponent />} />
        </Routes>
      </MemoryRouter>,
    );

    const card = screen.getByRole('listitem');
    userEvent.click(card);

    expect(screen.getByText(JSON.stringify({ product: mockProduct }))).toBeInTheDocument();
  });
});

export {};
