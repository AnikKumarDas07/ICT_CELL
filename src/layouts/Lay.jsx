//import { Outlet } from "react-router-dom";
import Header from "../assets/component/Header";
import Footer from "../assets/component/Footer";
import Slider from "../assets/component/Slider";
import anik_img1 from '../assets/images/anik_convo2020.png';
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div>
              <marquee style={{ fontSize: '40px' }}>Welcome To Anik's Website</marquee>
            {/*<img src={anik_img1} alt="self" style={{ width: '100%', height: 'auto' }}/>*/}
            <Slider />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Home;