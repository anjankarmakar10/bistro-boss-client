import SectionCover from "../../../components/Cover/SectionCover";

import image from "../../../assets/home/chef-service.jpg";
import MenuContainer from "../../../components/Menu/MenuContainer";
import Button from "../../../components/Buttons/Button";
import { Link } from "react-router-dom";

const SectionContainer = ({ title, children }) => {
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
        <Link to={`/shop/${title}`}>
          <Button>ORDER YOUR FAVOURITE FOOD</Button>
        </Link>
      </div>
    </div>
  );
};

export default SectionContainer;
