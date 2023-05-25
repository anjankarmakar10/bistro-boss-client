import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useMenus from "../../../../hooks/useMenus";
import MenuItem from "../../../../components/Menu/MenuItem";
import Button from "../../../../components/Buttons/Button";
import MenuContainer from "../../../../components/Menu/MenuContainer";

const Menus = () => {
  const menus = useMenus();

  return (
    <section className="mb-32">
      <SectionHeader title={"FROM OUR MENU"} heading={"---Check it out---"} />
      <MenuContainer>
        {menus?.slice(1, 7).map((menu) => (
          <MenuItem key={menu?._id} menu={menu} />
        ))}
      </MenuContainer>
      <Button>View Full Menu</Button>
    </section>
  );
};

export default Menus;
