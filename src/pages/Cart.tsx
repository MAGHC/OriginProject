import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartItem from './../components/CartItem';

const COMMON_MARGIN_LEFT = ' border-b-2 mr-[9rem]';

const Cart = () => {
  const { user } = useAuthContext();

  const { isLoading, error, data: carts } = useQuery(['cart'], () => getCart(user?.uid));

  const hasProduct = carts && carts.length > 0;

  if (error) return <p>error</p>;
  if (isLoading) return <p> Loading</p>;

  return (
    <>
      <h2 className="   px-[9rem] py-[3rem] text-4xl font-kor font-bold">장바구니.</h2>
      <section className="  px-[9rem] mt-[3rem] flex flex-col  ">
        {!hasProduct && <p> 상품추가 </p>}
        <article className=" w-full  pb-8 font-body  text-xl flex justify ">
          <p className={`${COMMON_MARGIN_LEFT} ml-8`}>Product</p>
          <p className={`${COMMON_MARGIN_LEFT}`}>Option</p>
          <p className={`${COMMON_MARGIN_LEFT}`}>Quantity</p>
          <p className={`${COMMON_MARGIN_LEFT}`}>Price</p>
          <p className="border-b-2">Total Price</p>
        </article>
        {hasProduct && (
          <>
            <ul className="py-8">
              {carts.map((cart) => {
                return <CartItem cart={cart}></CartItem>;
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
