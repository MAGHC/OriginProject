import Products from '../components/Products';
import Slider from '../components/Slider/Slider';
const Home = () => {
  return (
    <section className=" flex flex-col justify-center">
      <Slider></Slider>
      <Products></Products>
    </section>
  );
};

export default Home;
