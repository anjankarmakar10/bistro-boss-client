import Hero from "./Hero/Hero";
import CallUs from "./Sections/CallUs";
import ChefService from "./Sections/ChefService";
import Menus from "./Sections/Menus/Menus";
import OrderOnline from "./Sections/OrderOnline";

const Home = () => {
  return (
    <main>
      <Hero />
      <OrderOnline />
      <ChefService />
      <Menus />
      <CallUs />
    </main>
  );
};

export default Home;
