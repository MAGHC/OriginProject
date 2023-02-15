import Slider1 from '../../assets/images/slider/Slider1.jpg';
import Slider2 from '../../assets/images/slider/Slider2.jpg';
import Slider3 from '../../assets/images/slider/Slider3.jpg';

import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';

import { useState } from 'react';

import Slide from './Slide';

const SLIDERS_ARR = [Slider1, Slider2, Slider3];

const SLIDER_BTN_STYLE =
  'absolute translate-y-[15rem] md:translate-y-[17rem]   text-white animate-pulse text-6xl ';

const Slider = () => {
  const [cur, setCur] = useState<number>(0);

  const handleNext = () => {
    if (cur === SLIDERS_ARR.length - 1) return;
    setCur((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (cur <= 0) return;
    setCur((prev) => prev - 1);
  };

  return (
    <div className="  z-1  relative  flex flex-col my-[2rem] mx-auto  md:w-[72.5rem] md:h-[38.75rem] w-[35.5rem] h-[20.75rem] md:my-[5rem]">
      <ul className="flex items-center ">
        {SLIDERS_ARR.map((slider, i) => {
          return <Slide key={i} index={i} cur={cur} img={slider}></Slide>;
        })}
      </ul>
      <button
        className={` z-10 ${
          cur === SLIDERS_ARR.length - 1 ? 'hidden' : 'block'
        } ${SLIDER_BTN_STYLE} right-0`}
      >
        <BiRightArrowAlt onClick={handleNext}></BiRightArrowAlt>
      </button>
      <button className={` z-10 ${cur === 0 ? 'hidden' : 'block'} ${SLIDER_BTN_STYLE} left-0 `}>
        <BiLeftArrowAlt onClick={handlePrev}></BiLeftArrowAlt>
      </button>

      <p className=" z-10 opacity-50 font-title absolute bottom-0 right-0 text-xl">
        {cur + 1}/{SLIDERS_ARR.length}
      </p>
    </div>
  );
};

export default Slider;
