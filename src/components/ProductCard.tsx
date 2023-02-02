import { GetProductTypeI } from '../type/GetProductType';
import { useNavigate } from 'react-router-dom';

interface PropsI {
  product: GetProductTypeI;
}

const ProductCard = ({ product, product: { id, img, title, price } }: PropsI) => {
  const navigate = useNavigate();
  return (
    <li
      className=" flex flex-col items-center"
      onClick={() => navigate(`/product/${id}`, { state: { product } })}
    >
      <img
        className=" rounded-[20px] cursor-pointer w-56 h-44 object-cover"
        alt={title}
        src={img}
      ></img>
      <div className=" w-40 md:w-44  font-light lg:w-48 xl:w-56 font-body  flex justify-between mx-auto   ">
        <h3 className=" truncate ... w-1/2">{title}</h3>
        <p className="  hidden lg:block  ">{`₩${price}`}</p>
      </div>
    </li>
  );
};

export default ProductCard;
