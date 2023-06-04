const HomeCard = ({ title, info, icon }) => {
  return (
    <article className="stats basis-56 w-full bg-primary text-primary-content">
      <div className="stat">
        <div className="stat-title text-white text-xl font-semibold mb-2">
          {title}
        </div>
        <div className="flex gap-2 items-center">
          {icon}
          <div className="stat-value">{info}</div>
        </div>
      </div>
    </article>
  );
};

export default HomeCard;
