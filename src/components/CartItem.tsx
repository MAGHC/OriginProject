import { CartI } from '../type/ProductType';

import { BiPlus, BiMinus, BiX } from 'react-icons/bi';

import { useCart } from './../hooks/useCart';

const COMMON_MARGIN_X = 'mx-[0.4rem]';

const BUTTON_HOVER = 'hover:scale-150 transition-all duration-200';

const CartItem = ({ cart }: { cart: CartI }) => {
  const { setCart, setRemoveCart } = useCart();

  const handlePluse = () => {
    setCart.mutate({ ...cart, quantity: cart.quantity + 1 });
  };
  const handleMinus = () => {
    if (cart.quantity < 2) return;
    setCart.mutate({ ...cart, quantity: cart.quantity - 1 });
  };
  const handleDelete = () => {
    setRemoveCart.mutate(cart.id);
  };

  return (
    <li className="   text-lg font-body font-light md:flex my-8 items-center">
      <div className="   flex flex-col items-center">
        <img
          className=" w-56 h-48 md:w-44 rounded-lg object-cover md:h-36"
          src={cart.img}
          alt={cart.title}
        ></img>
        <p>{cart.title.substring(0, 17)}...</p>
      </div>
      <div className="   flex items-center  ">
        <p className=" hidden md:block  w-20 mx-[6rem]">{cart.option}</p>
        <button>
          <BiMinus
            onClick={handleMinus}
            className={`${COMMON_MARGIN_X} ${BUTTON_HOVER}  ml-8`}
          ></BiMinus>
        </button>
        <p className={`${COMMON_MARGIN_X}`}>{cart.quantity}</p>
        <button>
          <BiPlus onClick={handlePluse} className={`${COMMON_MARGIN_X} ${BUTTON_HOVER}`}></BiPlus>
        </button>
        <p className=" w-24 ml-[8rem]">{cart.price} ￦</p>
        <p className=" hidden md:block w-24 ml-[7rem] mr-[5rem]">{cart.quantity * cart.price} ￦</p>
        <button>
          <BiX className={`${BUTTON_HOVER}`} onClick={handleDelete}></BiX>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
