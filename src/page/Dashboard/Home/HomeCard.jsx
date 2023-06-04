const HomeCard = ({ title, info, icon }) => {
  return (
    <article className=" basis-56">
      <div className="stat  ">
        <div className="stat-title  text-xl font-semibold mb-2">{title}</div>
        <div className="flex gap-2 items-center">
          <div className="text-secondary">{icon}</div>
          <div className="stat-value ">{info}</div>
        </div>
      </div>
    </article>
  );
};

export default HomeCard;
