import React, { useState } from "react";

const ShopSection = () => {
  const cetagories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const [cetagory, setCetagory] = useState("salad");

  return (
    <div className="container mx-auto px-4 pt-32">
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

      <section></section>
    </div>
  );
};

export default ShopSection;
