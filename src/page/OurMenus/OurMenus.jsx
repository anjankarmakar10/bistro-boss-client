import PageCover from "../../components/Cover/PageCover";
import useTitle from "../../hooks/useTitle";
import banner from "../../assets/menu/banner3.jpg";
import TodayOffer from "./Sections/TodayOffer";
import useMenus from "../../hooks/useMenus";
const OurMenus = () => {
  useTitle("Our Menus");

  const menus = useMenus();

  return (
    <>
      <PageCover
        title={"Our Menu"}
        tag={"Would you like to try a dish?"}
        bg={banner}
      />
      <TodayOffer menus={menus} />
    </>
  );
};

export default OurMenus;
