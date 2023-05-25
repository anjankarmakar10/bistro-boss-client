import PageCover from "../../components/Cover/PageCover";
import useTitle from "../../hooks/useTitle";
import image from "../../assets/shop/banner2.jpg";
import ShopSection from "./ShopSection";
const Shop = () => {
  useTitle("Our Shop");
  return (
    <>
      <PageCover
        bg={image}
        title={"Our Shop"}
        tag={"Would you like to try a dish?"}
      />
      <ShopSection />
    </>
  );
};

export default Shop;
