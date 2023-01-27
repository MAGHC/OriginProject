import { GetProductTypeI } from '../type/GetProductType';

interface PropsI {
  product: GetProductTypeI;
}

const ProductCard = ({ product: { img, title, price } }: PropsI) => {
  return (
    <li>
      <img className=" w-44 h-40 object-cover" alt={title} src={img}></img>
      <div className=" flex  ">
        <h3 className=" truncate ... w-1/2">{title}</h3>
        <p className=" font-semibold flex justify-end">{`₩${price}`}</p>
      </div>
    </li>
  );
};

export default ProductCard;
