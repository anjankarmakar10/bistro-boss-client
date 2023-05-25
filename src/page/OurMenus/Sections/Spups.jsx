import getCetagory from "../../../utils/getCetagory";
import SectionContainer from "../container/SectionContainer";
import MenuItem from "../../../components/Menu/MenuItem";

const Soups = ({ menus }) => {
  const data = getCetagory(menus, "soup");

  return (
    <>
      <SectionContainer title={"Soups"}>
        {data?.map((menu) => (
          <MenuItem key={menu?._id} menu={menu} />
        ))}
      </SectionContainer>
    </>
  );
};

export default Soups;
