const Menu = ({ menu }) => {
  return (
    <article className="flex gap-8">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-28 "
        src={menu?.image}
        alt={menu?.name}
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between">
          <h4 className="font2 line-clamp-1 font-semibold text-xl uppercase">
            {menu?.name} ------------------
          </h4>
          <span className="text-xl text-[#BB8506]">${menu?.price}</span>
        </div>
        <p className="text-[#8f8e8e] line-clamp-2 text-base">{menu?.recipe}</p>
      </div>
    </article>
  );
};

export default Menu;
