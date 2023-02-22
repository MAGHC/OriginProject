import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';

import { GetProductTypeI } from './../type/GetProductType';
import { ProductI } from '../type/ProductType';

export function useAddProducts(setFn: Function) {
  const queryClient = useQueryClient();

  const addProducts = useMutation(
    ({ product, url }: { product: ProductI; url: string }) => setFn(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    },
  );

  return addProducts;
}

export function useGetProduct(filter: string | boolean, getFn: Function) {
  const {
    error,
    isLoading,
    data: products,
  } = useQuery<GetProductTypeI[]>(['products'], () => getFn(), {
    select: (products) =>
      products.filter((product) => {
        return filter ? product.category === filter : product;
      }),
  });

  return { error, isLoading, products };
}
