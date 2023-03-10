import { useState } from 'react';

import { ContextI, useAuthContext } from '../../context/AuthContext';
import { useCart } from '../../hooks/useCart';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();

  const {
    query: { id, img, option, description, price, title },
  } = router;

  const product = {
    id: typeof id === 'string' ? id : '',
    img: typeof img === 'string' ? img : '',
    option: typeof option === 'object' ? option : '',
    description: typeof description === 'string' ? description : '',
    price: typeof price === 'string' ? parseInt(price) : 0,
    title: typeof title === 'string' ? title : '',
  };

  const { user } = useAuthContext() as ContextI;

  const [select, setSelect] = useState(option && option[0]);
  const [successs, setSuccess] = useState<string | null>();

  const { setCart } = useCart();

  console.log(select);

  const handlebutton = () => {
    if (!user) {
      alert('로그인해주세요');
      return;
    }

    setCart.mutate(
      { ...product, option: typeof select === 'string' ? select : '', quantity: 1 },
      {
        onSuccess: () => {
          setSuccess('상품이 추가되었습니다');
          setTimeout(() => setSuccess(null), 3000);
        },
      },
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <section className=" relative flex flex-col md:flex-row justify-center  mx-[8.75rem] my-52 gap-12">
        <img
          className="  min-w-[23rem]  object-cover rounded-3xl w-[38rem] h-[30rem]"
          alt={product.title}
          src={product.img}
        ></img>
        <div className=" w-[23rem] md:w-[35rem]">
          <h2 className=" mb-5 font-bold font-title text-3xl">
            {typeof title === 'string' ? title.toLocaleUpperCase() : ''}
          </h2>
          <p className=" pb-5 w-full  border-b-2 font-thin font-body text-3xl">{price}￦</p>
          <article className="  mt-5 gap-4 flex items-center ">
            <label htmlFor="select" className="  font-body font-medium text-2xl">
              Options({option && option.length})
            </label>
            <select
              onChange={handleChange}
              id="select"
              className=" font-body font-light  p-1 border-4 border-double border-darker text-xl"
            >
              {typeof option === 'object' &&
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
            className=" hover:bg-darker  transition-all duration-300  w-full mt-8 bottom-0 md:absolute md:w-2/5 self-end font-body  py-3 rounded-sm bg-bright"
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
