import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';

import { addAndEditCart, removeCart, getCart } from '../api/firebase';

import { CartI } from '../type/ProductType';
import { ContextI } from './../context/AuthContext';

export function useCart() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext() as ContextI;

  const {
    data: carts,
    isLoading,
    error,
  } = useQuery(['cart', uid || ''], () => getCart(uid), { enabled: !!uid });

  const setCart = useMutation((product: CartI) => addAndEditCart(uid, product), {
    onSuccess: () => queryClient.invalidateQueries(['cart', uid]),
  });

  const setRemoveCart = useMutation((productId: string) => removeCart(uid, productId), {
    onSuccess: () => queryClient.invalidateQueries(['cart', uid]),
  });

  return { setCart, carts, isLoading, error, setRemoveCart };
}
