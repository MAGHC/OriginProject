import { useState } from 'react';
import { useGetProduct } from '../hooks/useProducts';

import ProductCard from './ProductCard';
import ProductSkeleton from './skeleton/ProductSkeleton';

const PRODUCT_WRAPPER = ' md:mx-[16rem]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8';

const MockSkeletonState = new Array(12);
MockSkeletonState.fill(null);

const CATEGORYIES = ['Women', 'Goods', 'Life', 'Special'];

const Products = ({ getProducts }: { getProducts: Function }) => {
  const [filter, setFilter] = useState<string | boolean>(false);
  const { products, isLoading, error } = useGetProduct(filter, getProducts);

  return (
    <>
      <ul className="sm:my-20 mx-[8rem] text-xl md:mx-[16rem] font-body text-highLight mt-[6.85rem] mb-[1.9rem] flex gap-12">
        {CATEGORYIES.map((category) => (
          <li key={category} className=" hover:scale-110 transition-all duration-200">
            <button onClick={() => setFilter(category)}>{category}</button>
          </li>
        ))}
      </ul>
      {isLoading && (
        <ul className={`${PRODUCT_WRAPPER}`}>
          {MockSkeletonState.map(() => (
            <ProductSkeleton />
          ))}
        </ul>
      )}
      {error && <p>에러</p>}
      {products && (
        <ul className={`${PRODUCT_WRAPPER}`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
