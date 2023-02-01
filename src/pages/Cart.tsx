import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartItem from './../components/CartItem';

const COMMON_MARGIN_LEFT = ' border-b-2 mr-[9rem]';

const Cart = () => {
  const { uid } = useAuthContext();

  const { isLoading, error, data: carts } = useQuery(['cart'], () => getCart(uid));

  const hasProduct = carts && carts.length > 0;

  if (error) return <p>error</p>;
  if (isLoading) return <p> Loading</p>;

  return (
    <>
      <h2 className="   px-[9rem] py-[3rem] text-4xl font-kor font-bold">
        <p>나의 원천</p>
        <p className=" font-medium">장바구니</p>
      </h2>

      <section className="  px-[9rem] mt-[3rem] flex flex-col  ">
        {!hasProduct && (
          <p className=" my-[10rem] text-hilight animate-pulse text-3xl font-kor font-black mx-auto">
            아이템을 추가해주세요{' '}
          </p>
        )}

        {hasProduct && (
          <>
            <article className=" ml-[6.8rem] w-full  pb-8 font-body  text-xl flex justify ">
              <p className={`${COMMON_MARGIN_LEFT} ml-8`}>Product</p>
              <p className={`${COMMON_MARGIN_LEFT}`}>Option</p>
              <p className={`${COMMON_MARGIN_LEFT}`}>Quantity</p>
              <p className={`${COMMON_MARGIN_LEFT}`}>Price</p>
              <p className="border-b-2">Total Price</p>
            </article>
            <ul className="py-8 ml-[6.5rem]">
              {carts.map((cart) => {
                return <CartItem uid={uid} cart={cart}></CartItem>;
              })}
            </ul>
            <p className=" ">총액</p>
          </>
        )}
      </section>
    </>
  );
};

export default Cart;
