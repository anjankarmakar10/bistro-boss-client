import getCetagory from "../../../utils/getCetagory";
import SectionContainer from "../container/SectionContainer";
import MenuItem from "../../../components/Menu/MenuItem";

const Salads = ({ menus }) => {
  const data = getCetagory(menus, "salad");

  return (
    <>
      <SectionContainer title={"salad"}>
        {data?.map((menu) => (
          <MenuItem key={menu?._id} menu={menu} />
        ))}
      </SectionContainer>
    </>
  );
};

export default Salads;
