const SectionHeader = ({ heading, title }) => {
  return (
    <header className="mt-20 mb-10 max-w-md mx-auto text-center">
      <h5 className="text-[#D99904] italic text-xl border-b-4 border-[#E8E8E8] pb-4 mb-5">
        {heading}
      </h5>
      <h3 className="text-4xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
        {title}
      </h3>
    </header>
  );
};

export default SectionHeader;
