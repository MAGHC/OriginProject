const Slide = ({ img, index, cur }: { img: string; cur: number; index: number }) => {
  return (
    <img
      className={`  ${
        cur === index ? 'opacity-100' : 'opacity-0'
      } absolute bottom-0 transition-all duration-500   w-full h-full `}
      src={img}
      alt="slide"
    ></img>
  );
};

export default Slide;
