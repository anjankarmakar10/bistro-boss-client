import getCetagory from "../../../utils/getCetagory";
import SectionContainer from "../container/SectionContainer";
import MenuItem from "../../../components/Menu/MenuItem";

const Desserts = ({ menus }) => {
  const data = getCetagory(menus, "dessert");

  return (
    <>
      <SectionContainer title={"dessert"}>
        {data?.map((menu) => (
          <MenuItem key={menu?._id} menu={menu} />
        ))}
      </SectionContainer>
    </>
  );
};

export default Desserts;
