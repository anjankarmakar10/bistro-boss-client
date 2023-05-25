import getCetagory from "../../../utils/getCetagory";
import SectionContainer from "../container/SectionContainer";
import MenuItem from "../../../components/Menu/MenuItem";

const Pizzas = ({ menus }) => {
  const data = getCetagory(menus, "pizza");
  return (
    <>
      <SectionContainer title={"pizza"}>
        {data?.map((menu) => (
          <MenuItem key={menu?._id} menu={menu} />
        ))}
      </SectionContainer>
    </>
  );
};

export default Pizzas;
