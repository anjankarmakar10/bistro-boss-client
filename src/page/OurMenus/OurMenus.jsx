import PageCover from "../../components/Cover/PageCover";
import useTitle from "../../hooks/useTitle";
import banner from "../../assets/menu/banner3.jpg";
import TodayOffer from "./Sections/TodayOffer";
import useMenu from "../../hooks/useMenu";
import Desserts from "./Sections/Desserts";
import Pizzas from "./Sections/Pizzas";
import Salads from "./Sections/Salads";
import Soups from "./Sections/Spups";
const OurMenus = () => {
  useTitle("Our Menus");

  const menus = useMenu();

  return (
    <>
      <PageCover
        title={"Our Menu"}
        tag={"Would you like to try a dish?"}
        bg={banner}
      />
      <TodayOffer menus={menus} />
      <Desserts menus={menus} />
      <Pizzas menus={menus} />
      <Salads menus={menus} />
      <Soups menus={menus} />
    </>
  );
};

export default OurMenus;
