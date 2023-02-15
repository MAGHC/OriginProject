const Slide = ({ img, index, cur }: { img: string; cur: number; index: number }) => {
  const currentZIndex = cur === index ? 4 : 0;
  return (
    <img
      style={{ zIndex: currentZIndex }}
      className={`  absolute bottom-0  translate-x-0 w-full h-full `}
      src={img}
      alt="slide"
    ></img>
  );
};

export default Slide;
