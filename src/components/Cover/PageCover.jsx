const PageCover = ({ title, tag, bg }) => {
  return (
    <section
      style={{
        background: `url(${bg}) fixed center / cover`,
      }}
      className={"min-h-[700px] px-8 pt-32"}
    >
      <div className="min-h-[450px] max-w-screen-xl mx-auto grid place-content-center font2 text-center bg-[#15151599] text-white backdrop-blur-sm">
        <h2 className="font-bold uppercase text-5xl md:text-7xl">{title}</h2>
        <p className="text-2xl font-semibold mt-2">{tag}</p>
      </div>
    </section>
  );
};

export default PageCover;
