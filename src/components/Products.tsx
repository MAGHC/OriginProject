import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../api/firebase.js';
import ProductCard from './ProductCard';

const Products = () => {
  const { isLoading, data: products, error } = useQuery(['products'], getProducts);

  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && <p>에러</p>}
      {products && (
        <ul className=" p-20  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
