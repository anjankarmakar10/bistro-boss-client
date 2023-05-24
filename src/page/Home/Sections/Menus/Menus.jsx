import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useMenus from "../../../../hooks/useMenus";
import Menu from "./Menu";

const Menus = () => {
  const menus = useMenus();

  return (
    <section className="mb-32">
      <SectionHeader title={"FROM OUR MENU"} heading={"---Check it out---"} />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {menus?.slice(1, 7).map((menu) => (
          <Menu key={menu?._id} menu={menu} />
        ))}
      </div>
      <div className="w-fit mx-auto  bg-black relative rounded-b-lg pb-1 min-w-[240px] focus:pb-0 transition-all">
        <button className="uppercase rounded-b-lg bg-white text-xl font-medium h-16 w-full">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menus;
