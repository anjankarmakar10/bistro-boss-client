import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useMenus from "../../../../hooks/useMenus";

const Menus = () => {
  const menus = useMenus();
  console.log(menus);

  return (
    <section>
      <SectionHeader title={"FROM OUR MENU"} heading={"---Check it out---"} />
    </section>
  );
};

export default Menus;
