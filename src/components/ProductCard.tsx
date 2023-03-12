import { GetProductTypeI } from '../type/GetProductType';
import { useRouter } from 'next/router';

interface PropsI {
  product: GetProductTypeI;
}

const ProductCard = ({ product: { id, img, title, price, option, description } }: PropsI) => {
  const router = useRouter();

  const sendProps = () => {
    router.push({
      pathname: `/product/${id}`,
      query: { img, option, description, price, title, id },
    });
  };

  return (
    <li className=" flex flex-col items-center" onClick={sendProps}>
      <img
        className=" rounded-[20px] cursor-pointer w-56 h-44 object-cover"
        alt={title}
        src={img}
      ></img>
      <div className=" w-40 md:w-44  font-light lg:w-48 xl:w-56 font-body  flex justify-between mx-auto   ">
        <h3 className=" w-full lg:truncate ... lg:w-1/2">{title}</h3>
        <p className="  hidden lg:block lg:w-1/2  ">{`₩${price}`}</p>
      </div>
    </li>
  );
};

export default ProductCard;
