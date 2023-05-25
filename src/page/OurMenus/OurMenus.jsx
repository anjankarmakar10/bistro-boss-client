import PageCover from "../../components/Cover/PageCover";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useTitle from "../../hooks/useTitle";
import banner from "../../assets/menu/banner3.jpg";
import TodayOffer from "./Sections/TodayOffer";
const OurMenus = () => {
  useTitle("Our Menus");

  return (
    <div>
      <PageCover
        title={"Our Menu"}
        tag={"Would you like to try a dish?"}
        bg={banner}
      />
      <SectionHeader title={"TODAY'S OFFER"} heading={"---Don't miss---"} />
      <TodayOffer />
    </div>
  );
};

export default OurMenus;
