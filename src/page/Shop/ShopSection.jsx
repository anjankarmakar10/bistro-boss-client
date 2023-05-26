import { useState } from "react";
import useMenus from "../../hooks/useMenus";
import Menu from "../../components/Menu/Menu";
import { useParams } from "react-router-dom";

const ShopSection = () => {
  const cetagories = ["salad", "pizza", "soup", "dessert", "drinks"];

  const { category } = useParams();
  console.log(category);

  const [cetagory, setCetagory] = useState(
    `${category === "foods" ? "salad" : category}`
  );
  const menus = useMenus();
  const data = menus?.filter((item) => item.category === cetagory);

  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <section className="mb-10 flex max-w-[680px] mx-auto flex-wrap justify-between">
        {cetagories?.map((item) => (
          <article
            className={`text-2xl  cursor-pointer uppercase font-medium pb-2 border-b-4  ${
              item === cetagory
                ? "text-[#bb8506] font-semibold border-[#bb8506]"
                : "border-white"
            }`}
            key={item}
            onClick={() => setCetagory(item)}
          >
            {item}
          </article>
        ))}
      </section>

      <section className="recommends">
        {data?.map((menu) => (
          <Menu key={menu?._id} menu={menu} />
        ))}
      </section>
    </div>
  );
};

export default ShopSection;
