const ProductSkeleton = () => {
  return (
    <li className=" animate-pulse mx-auto ">
      <div className=" bg-slate-400 w-56 h-44"></div>
      <div className=" w-56 my-2 gap-4 flex justify-between">
        <div className=" bg-slate-400 w-1/4 h-3"></div>
        <div className=" bg-slate-400 w-1/4 h-3"></div>
      </div>
    </li>
  );
};

export default ProductSkeleton;
