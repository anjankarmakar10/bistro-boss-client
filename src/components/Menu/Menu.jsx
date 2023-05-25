const Menu = ({ menu }) => {
  return (
    <article className="relative rounded overflow-hidden">
      <img className="max-h-80 w-full object-cover" src={menu?.image} alt="" />
      <div className="text-center flex flex-col justify-center items-center py-8 px-4 bg-[#F3F3F3]">
        <h4 className="font-semibold text-2xl">{menu?.name}</h4>
        <p className="max-w-[260px] mx-auto text-base mt-2 mb-6 line-clamp-2">
          {menu?.recipe}
        </p>

        <div className="w-fit mx-auto  bg-[#BB8506] relative rounded-lg pb-1 min-w-[200px] focus:pb-0 transition-all">
          <button className="uppercase rounded-lg text-xl font-medium h-16 w-full text-[#BB8506] bg-[#e8e8e8] hover:bg-[#1F2937] transition-all">
            add to cart
          </button>
        </div>
      </div>
      <div className="py-2 px-5 bg-[#111827] rounded-md text-white font-semibold absolute top-4 right-4">
        ${menu?.price}
      </div>
    </article>
  );
};

export default Menu;
