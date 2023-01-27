const ProductSkeleton = () => {
  return (
    <li className=" animate-pulse mx-8">
      <div className=" bg-slate-400 w-44 h-40"></div>
      <div className="my-4 gap-4 flex justify-between">
        <div className=" bg-slate-400 w-3/4 h-3"></div>
        <div className=" bg-slate-400 w-1/4 h-3"></div>
      </div>
    </li>
  );
};

export default ProductSkeleton;
