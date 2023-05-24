import Hero from "./Hero/Hero";
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
    </main>
  );
};

export default Home;
