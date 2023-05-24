import Hero from "./Hero/Hero";
import CallUs from "./Sections/CallUs";
import ChefService from "./Sections/ChefService";
import Menus from "./Sections/Menus/Menus";
import OrderOnline from "./Sections/OrderOnline";
import OurMenu from "./Sections/OurMenu";
import Recommends from "./Sections/Recommends/Recommends";
import Testimonials from "./Sections/Testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <OrderOnline />
      <ChefService />
      <Menus />
      <CallUs />
      <Recommends />
      <OurMenu />
      <Testimonials />
    </main>
  );
};

export default Home;
