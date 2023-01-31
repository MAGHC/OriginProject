import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { GetProductTypeI } from './../type/GetProductType';

interface DetailLocationState {
  state: { product: GetProductTypeI };
}

const ProductDetail = () => {
  const {
    state: {
      product: { img, option, description, price, title },
    },
  } = useLocation() as DetailLocationState;

  const [select, setSelect] = useState(option && option[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(select);
    setSelect(e.target.value);
  };

  return (
    <>
      <section className=" relative flex flex-col md:flex-row justify-center  mx-[8.75rem] my-52 gap-12">
        <img
          className="  min-w-[23rem]  object-cover rounded-3xl w-[38rem] h-[30rem]"
          alt={title}
          src={img}
        ></img>
        <div className=" w-[23rem] md:w-[35rem]">
          <h2 className=" mb-5 font-bold font-title text-3xl">{title.toLocaleUpperCase()}</h2>{' '}
          <p className=" pb-5 w-full  border-b-2 font-thin font-body text-3xl">{price}￦</p>
          <article className="  mt-5 gap-4 flex items-center ">
            <label htmlFor="select" className="  font-body font-medium text-2xl">
              Options({option.length})
            </label>
            <select
              id="select"
              className=" font-body font-light  p-1 border-4 border-double border-darker text-xl"
            >
              {option &&
                option.map((opt, i) => (
                  <option
                    className="font-body font-light"
                    onChange={() => handleChange}
                    id={`옵션+${i}`}
                    key={i}
                  >
                    {opt}
                  </option>
                ))}
            </select>
          </article>
          <article className=" mt-8">
            <p className=" font-body font-medium text-2xl">About</p>
            <p className=" font-body font-light ">{description}</p>
          </article>
          <button className=" hover:animate-bounce w-full mt-8 bottom-0 md:absolute md:w-2/5 self-end font-body  py-3 rounded-sm bg-bright">
            ADD CART
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
