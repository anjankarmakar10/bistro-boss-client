import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import img from "../../../assets/home/featured.jpg";
const OurMenu = () => {
  return (
    <section className="ourmenu relative lg:min-h-[800px] min-h-[1000px]">
      <div className="text-white absolute inset-0 bg-[#151515b2] grid place-content-center ">
        <header className="mb-10 max-w-md mx-auto text-center ">
          <h5 className="text-[#D99904] italic text-xl border-b-4 border-[#E8E8E8] pb-4 mb-5">
            ---Check it out---
          </h5>
          <h3 className="text-4xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
            FROM OUR MENU
          </h3>
        </header>

        <div className="flex flex-col lg:flex-row items-center gap-10 container mx-auto px-4">
          <img
            className="w-full max-w-[648px] h-[400px] object-cover rounded-sm"
            src={img}
            alt=""
          />
          <div>
            <h5 className="text-xl uppercase">March 20, 2023</h5>
            <h4 className="text-xl">WHERE CAN I GET SOME?</h4>
            <p className="mb-6 text-lg max-w-xl line-clamp-4 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className="w-fit relative rounded-lg pb-1 min-w-[175px] focus:pb-0 transition-all bg-transparent border-b-4">
              <button className="uppercase rounded-lg  text-xl h-16 w-full font-semibold transition-all text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
