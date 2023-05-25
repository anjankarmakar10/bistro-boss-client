const SectionCover = ({ coverTitle, coverInfo, coverImage }) => {
  return (
    <section
      style={{
        background: `url(${coverImage}) no-repeat center / cover`,
      }}
      className={`container mx-auto px-8 text-center relative min-h-[70vh]`}
    >
      <div className="flex justify-center items-center bg-[#1515152d] absolute inset-0">
        <div className="w-fit mx-auto bg-white py-14 px-10 mt-4">
          <h3 className="font2 pb-3 text-4xl ">{coverTitle}</h3>
          <p className="max-w-2xl mx-auto">{coverInfo}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionCover;
