import Hero from "./Hero/Hero";
import ChefService from "./Sections/ChefService";
import OrderOnline from "./Sections/OrderOnline";

const Home = () => {
  return (
    <main>
      <Hero />
      <OrderOnline />
      <ChefService />
    </main>
  );
};

export default Home;
