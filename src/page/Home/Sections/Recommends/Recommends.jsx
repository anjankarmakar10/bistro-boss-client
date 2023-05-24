import Menu from "../../../../components/Menu/Menu";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

const Recommends = () => {
  return (
    <section className=" pb-32">
      <SectionHeader title={"CHEF RECOMMENDS"} heading={"---Should Try---"} />
      <div className="container mx-auto px-4 recommends">
        <Menu />
        <Menu />
        <Menu />
      </div>
    </section>
  );
};

export default Recommends;
