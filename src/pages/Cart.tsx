import { useAuthContext } from '../context/AuthContext';
import CartItem from './../components/CartItem';
import { useCart } from './../hooks/useCart';

import { BiPlusMedical, BiMenu } from 'react-icons/bi';

const COMMON_MARGIN_LEFT = ' border-b-2 mr-[9rem]';

const SHIFFING_FEE = 3000;

const COMMON_FEE_DESCRIBE = ' text-xs md:text-2xl font-semibold  font-kor  ';

const COMMON_FEE_STYLE =
  ' mx-4  md:mx-0 text-xl animate-pulse text-darker md:text-3xl font-semibold font-body ';

const Cart = () => {
  const { isLoading, error, carts } = useCart();

  const hasProduct = carts && carts.length > 0;

  if (error) return <p>error</p>;
  if (isLoading) return <p> Loading</p>;

  const totalPrice = carts && carts?.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  console.log(totalPrice);

  return (
    <>
      <h2 className=" px-[9rem] py-[3rem] text-4xl font-kor font-bold">
        <p>나의 원천</p>
        <p className=" font-medium">장바구니</p>
      </h2>

      <section className="  px-[9rem] mt-[3rem] flex flex-col  ">
        {!hasProduct && (
          <p className=" my-[10rem] text-highLight animate-pulse text-3xl font-kor font-black mx-auto">
            아이템을 추가해주세요
          </p>
        )}

        {hasProduct && (
          <>
            <article className="  hidden ml-[6.8rem] w-full  pb-8 font-body  text-xl md:flex ">
              <p className={`${COMMON_MARGIN_LEFT} ml-8`}>Product</p>
              <p className={`${COMMON_MARGIN_LEFT}`}>Option</p>
              <p className={`${COMMON_MARGIN_LEFT}`}>Quantity</p>
              <p className={` ${COMMON_MARGIN_LEFT}`}>Price</p>
              <p className="border-b-2">Total Price</p>
            </article>
            <ul className=" grid grid-row-1 md:grid-cols-1 py-8 md:ml-[6.5rem]">
              {carts.map((cart) => {
                return <CartItem cart={cart}></CartItem>;
              })}
            </ul>
            <div className=" ml-[-5rem] md:ml-0 flex  mb-8 items-center md:justify-around ">
              <p className={`${COMMON_FEE_DESCRIBE} ml-[6rem] md:ml-0 `}>
                상품 총액:<span className={`${COMMON_FEE_STYLE}`}>{totalPrice}￦</span>
              </p>
              <BiPlusMedical></BiPlusMedical>
              <p className={`${COMMON_FEE_DESCRIBE}`}>
                배송료 : <span className={`${COMMON_FEE_STYLE}`}>{SHIFFING_FEE}￦</span>
              </p>
              <BiMenu className=" text-3xl"></BiMenu>
              <p className={`${COMMON_FEE_DESCRIBE}`}>
                총 예상금액 :
                <span className={`${COMMON_FEE_STYLE}`}>{totalPrice + SHIFFING_FEE}￦</span>
              </p>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Cart;
