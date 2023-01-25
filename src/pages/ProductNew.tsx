import { useState } from 'react';

const NEW_PRODUCT_INPUT_COMMON_STYLE = ' rounded-lg m-8 w-3/4 p-4 border border-gray-600';

const ProductNew = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState<Blob>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = (e.currentTarget.files as FileList)[0];
    setFile(files);
    console.log(files);
  };

  return (
    <section className=" text-center p-14 ">
      <h1 className=" text-4xl mb-12 font-body my-4">{'New product registration'.toUpperCase()}</h1>
      {file && (
        <img className=" w-1/4 mx-auto" alt="uploadImg" src={URL.createObjectURL(file)}></img>
      )}
      <form className="flex text-xl flex-col items-center p-14 ">
        <input
          onChange={handleChange}
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          type="file"
          accept="image/*"
        ></input>
        <input
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          type="text"
          placeholder="제품 명 "
        ></input>
        <input
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          type="number"
          placeholder="가격"
        ></input>
        <input
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          type="text"
          placeholder="제품 설명 "
        ></input>
        <input
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          type="text"
          placeholder="옵션"
        ></input>
        <button className=" mt-8 rounded-lg bg-bright font-kor  py-2 w-3/4  ">제출</button>
      </form>
    </section>
  );
};

export default ProductNew;
