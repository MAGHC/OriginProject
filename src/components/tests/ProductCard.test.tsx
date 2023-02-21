import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { Route, useLocation } from 'react-router-dom';

import ProductCard from '../ProductCard';

import { mockProduct } from '../../tests/data';
import { withRouter } from '../../tests/utils';

describe('ProductCard', () => {
  const { id, img, title, price, option, description, category } = mockProduct;

  it('snapshot test', () => {
    const component = renderer
      .create(
        withRouter(
          <Route path="/" element={<ProductCard product={mockProduct}></ProductCard>}></Route>,
        ),
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('product item render', async () => {
    render(
      withRouter(
        <Route path="/" element={<ProductCard product={mockProduct}></ProductCard>}></Route>,
      ),
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
      withRouter(
        <>
          <Route path="/" element={<ProductCard product={mockProduct} />} />
          <Route path={`/product/${id}`} element={<TestComponent />} />
        </>,
        ['/'],
      ),
    );

    const card = screen.getByRole('listitem');
    userEvent.click(card);

    expect(screen.getByText(JSON.stringify({ product: mockProduct }))).toBeInTheDocument();
  });
});

export {};
