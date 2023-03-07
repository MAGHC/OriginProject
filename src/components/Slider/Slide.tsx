import Image from 'next/dist/client/image';

const Slide = ({ img, index, cur }: { img: string; cur: number; index: number }) => {
  return (
    <Image
      className={`  ${
        cur === index ? 'opacity-100' : 'opacity-0'
      } absolute bottom-0 transition-all duration-500   w-full h-full `}
      src={img}
      alt="slide"
    ></Image>
  );
};

export default Slide;
