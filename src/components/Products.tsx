import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../api/firebase.js';
import ProductCard from './ProductCard';
import ProductSkeleton from './skeleton/ProductSkeleton';

const MockSkeletonState = new Array(12);
MockSkeletonState.fill(null);

const Products = () => {
  const { isLoading, data: products, error } = useQuery(['products'], getProducts);

  return (
    <>
      {isLoading && (
        <ul className='className=" p-20  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"'>
          {MockSkeletonState.map(() => (
            <ProductSkeleton />
          ))}
        </ul>
      )}
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
