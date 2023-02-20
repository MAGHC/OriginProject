import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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
  it('product item render', () => {
    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>,
    );
  });
});

export {};
