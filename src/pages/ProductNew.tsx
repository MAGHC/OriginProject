import React, { useState } from 'react';

import { BiCheckCircle } from 'react-icons/bi';

import { uploadImg } from '../api/cloudinary.js';
import { setNewProduct } from '../api/firebase.js';

import { ProductI } from '../type/NewProductType';

const NEW_PRODUCT_INPUT_COMMON_STYLE = ' rounded-lg m-8 w-3/4 p-4 border border-gray-600';

const ProductNew = () => {
  const [product, setProduct] = useState<ProductI>({});
  const [file, setFile] = useState<Blob>();
  const [uploading, setUploading] = useState(false);
  const [successs, setSuccess] = useState<string | null>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    uploadImg(file)
      .then((img) => {
        setNewProduct(product, img).then(() => {
          setSuccess('제품이 데이터베이스에 등록되었습니다');
          window.scrollTo(0, 0);
          setTimeout(() => setSuccess(null), 3000);
        });
      })
      .finally(() => setUploading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'file') {
      const files = (e.currentTarget.files as FileList)[0];
      setFile(files);
      return;
    }
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className=" text-center p-14 ">
      <h1 className=" text-4xl mb-12 font-body my-4">{'New product registration'.toUpperCase()}</h1>
      {successs && (
        <p className="animate-bounce my-8 flex font-bold tracking-widest justify-center text-4xl font-kor items-center  ">
          <BiCheckCircle></BiCheckCircle>
          {successs}
        </p>
      )}
      {file && (
        <img className=" w-1/4 mx-auto" alt="uploadImg" src={URL.createObjectURL(file)}></img>
      )}
      <form onSubmit={handleSubmit} className="flex text-xl flex-col items-center p-14 ">
        <input
          onChange={handleChange}
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          name="file"
          type="file"
          accept="image/*"
        ></input>
        <input
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          onChange={handleChange}
          value={product.title ?? ''}
          name="title"
          type="text"
          placeholder="제품 명 "
        ></input>
        <input
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          onChange={handleChange}
          value={product.price ?? ''}
          name="price"
          type="number"
          placeholder="가격"
        ></input>
        <input
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          required
          onChange={handleChange}
          value={product.description ?? ''}
          name="description"
          type="text"
          placeholder="제품 설명 "
        ></input>
        <input
          className={`${NEW_PRODUCT_INPUT_COMMON_STYLE}`}
          value={product.option ?? ''}
          required
          onChange={handleChange}
          name="option"
          type="text"
          placeholder="옵션"
        ></input>
        <button disabled={uploading} className=" mt-8 rounded-lg bg-bright font-kor  py-2 w-3/4  ">
          {uploading ? '업로딩중...' : '제출 하기'}
        </button>
      </form>
    </section>
  );
};

export default ProductNew;
