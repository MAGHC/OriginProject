import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { GetProductTypeI } from './../type/GetProductType';

import { addAndEditCart } from '../api/firebase';

import { useAuthContext } from '../context/AuthContext';

interface DetailLocationState {
  state: { product: GetProductTypeI };
}

const ProductDetail = () => {
  const {
    state: {
      product: { img, option, description, price, title },
      product,
    },
  } = useLocation() as DetailLocationState;

  const { user } = useAuthContext();

  const [select, setSelect] = useState(option && option[0]);
  const [successs, setSuccess] = useState<string | null>();

  console.log(select);

  const handlebutton = () => {
    if (!user) {
      alert('로그인해주세요');
      return;
    }
    addAndEditCart(user?.uid, { ...product, option: select, quantity: 1 }).then(() => {
      setSuccess('상품이 추가되었습니다');
      setTimeout(() => setSuccess(null), 3000);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
              onChange={handleChange}
              id="select"
              className=" font-body font-light  p-1 border-4 border-double border-darker text-xl"
            >
              {option &&
                option.map((opt, i) => (
                  <option className="font-body font-light" id={`옵션+${i}`} key={i}>
                    {opt}
                  </option>
                ))}
            </select>
          </article>
          <article className=" mt-8">
            <p className=" font-body font-medium text-2xl">About</p>
            <p className=" font-body font-light ">{description}</p>
          </article>
          <button
            onClick={handlebutton}
            className=" hover:animate-bounce w-full mt-8 bottom-0 md:absolute md:w-2/5 self-end font-body  py-3 rounded-sm bg-bright"
          >
            ADD CART
          </button>
          {successs && <p className=" md:mt-28 animate-bounce font-kor text-2xl">{successs}</p>}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
