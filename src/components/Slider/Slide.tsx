const Slide = ({ img, index, cur }: { img: string; cur: number; index: number }) => {
  return (
    <img
      className={`${cur === index ? ' h-full' : ' h-0 '}  duration-500 w-full h-full `}
      src={img}
      alt="slide"
    ></img>
  );
};

export default Slide;
