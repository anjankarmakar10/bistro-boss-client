import image from "../../../assets/home/chef-service.jpg";
import SectionCover from "../../../components/Cover/SectionCover";

const ChefService = () => {
  return (
    <>
      <SectionCover
        coverTitle={"BISTRO BOSS"}
        coverImage={image}
        coverInfo={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at,nihil iusto ducimus incidunt quibusdam nemo."
        }
      />
    </>
  );
};

export default ChefService;
