import { CartI } from '../type/ProductType';

import { BiPlus, BiMinus, BiX } from 'react-icons/bi';

const COMMON_MARGIN_X = 'mx-[0.4rem]';

const CartItem = ({ cart }: { cart: CartI }) => {
  return (
    //맨위 li flex로 디자인
    <li className="  font-body font-light flex my-8 items-center">
      <div className="  flex flex-col items-center">
        <img
          className=" rounded-lg object-cover min-w-[10rem] h-36"
          src={cart.img}
          alt={cart.title}
        ></img>
        <p>{cart.title.substring(0, 17)}...</p>
      </div>
      <div className="flex items-center  ">
        <p className="  w-20 mx-[6rem]">{cart.option}</p>
        <BiMinus className={`${COMMON_MARGIN_X} ml-8`}></BiMinus>
        <p className={`${COMMON_MARGIN_X}`}>{cart.quantity}</p>
        <BiPlus className={`${COMMON_MARGIN_X}`}></BiPlus>
        <p className=" w-24 ml-[8rem]">{cart.price} ￦</p>
        <p className=" w-20 ml-[7rem] mr-[5rem]">{cart.quantity * cart.price} ￦</p>

        <BiX></BiX>
      </div>
    </li>
  );
};

export default CartItem;
