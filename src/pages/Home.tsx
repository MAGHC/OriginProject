import { getProducts } from '../api/firebase';

import Products from '../components/Products';
import Slider from '../components/Slider/Slider';
const Home = () => {
  return (
    <section className="  mx-[2rem] md:mx-[9rem]  flex flex-col justify-center">
      <Slider></Slider>
      <Products getProducts={getProducts}></Products>
    </section>
  );
};

export default Home;
