import getCetagory from "../../../utils/getCetagory";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import MenuContainer from "../../../components/Menu/MenuContainer";
import MenuItem from "../../../components/Menu/MenuItem";
import Button from "../../../components/Buttons/Button";

const TodayOffer = ({ menus }) => {
  const data = getCetagory(menus, "offered");
  console.log(data);
  return (
    <div className="mb-12">
      <SectionHeader title={"TODAY'S OFFER"} heading={"---Don't miss---"} />
      <MenuContainer>
        {data?.map((menu) => (
          <MenuItem key={menu?._id} menu={menu} />
        ))}
      </MenuContainer>
      <Button>ORDER YOUR FAVOURITE FOOD</Button>
    </div>
  );
};

export default TodayOffer;
