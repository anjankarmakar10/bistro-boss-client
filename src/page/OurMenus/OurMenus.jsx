import PageCover from "../../components/Cover/PageCover";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useTitle from "../../hooks/useTitle";

const OurMenus = () => {
  useTitle("Our Menus");
  return (
    <div>
      <PageCover title={"Our Menu"} tag={"Would you like to try a dish?"} />
      <SectionHeader title={"TODAY'S OFFER"} heading={"---Don't miss---"} />
    </div>
  );
};

export default OurMenus;
