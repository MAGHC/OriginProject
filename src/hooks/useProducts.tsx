import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { getProducts, setNewProduct } from '../api/firebase.js';

import { GetProductTypeI } from './../type/GetProductType';
import { ProductI } from '../type/ProductType';

export function useAddProducts() {
  const queryClient = useQueryClient();

  const addProducts = useMutation(
    ({ product, url }: { product: ProductI; url: string }) => setNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    },
  );

  return addProducts;
}

export function useGetProduct(filter: string | boolean) {
  const {
    error,
    isLoading,
    data: products,
  } = useQuery<GetProductTypeI[]>(['products'], getProducts, {
    select: (products) =>
      products.filter((product) => {
        return filter ? product.category === filter : product;
      }),
  });

  return { error, isLoading, products };
}
