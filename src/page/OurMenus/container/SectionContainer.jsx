import SectionCover from "../../../components/Cover/SectionCover";

import image from "../../../assets/home/chef-service.jpg";
import MenuContainer from "../../../components/Menu/MenuContainer";
import Button from "../../../components/Buttons/Button";

const SectionContainer = ({ title, children, onClick }) => {
  return (
    <div>
      <SectionCover
        coverTitle={title}
        coverInfo={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImage={image}
      />
      <div className="mt-20 mb-12">
        <MenuContainer>{children}</MenuContainer>
        <Button onClick={onClick}>ORDER YOUR FAVOURITE FOOD</Button>
      </div>
    </div>
  );
};

export default SectionContainer;
