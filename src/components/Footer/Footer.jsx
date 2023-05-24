import fb from "../../assets/icon/fb.svg";
import insta from "../../assets/icon/insta.svg";
import twt from "../../assets/icon/twt.svg";

const Footer = () => {
  return (
    <footer className="text-white text-center">
      <div className="flex flex-col md:flex-row">
        <div className="min-h-[400px] bg-[#1F2937] flex-1 flex items-center flex-col justify-center">
          <h3 className="uppercase text-3xl font-medium mb-4">CONTACT US</h3>
          <div className="text-xl font-medium flex flex-col gap-2">
            <span>123 ABS Street, Uni 21, Bangladesh</span>
            <span>+88 123456789 </span>
            <span>Mon - Fri: 08:00 - 22:00</span>
            <span>Sat - Sun: 10:00 - 23:00</span>
          </div>
        </div>
        <div className="min-h-[400px] bg-[#111827] flex-1 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-medium mb-4 ">Follow US</h3>
          <span className="text-xl font-medium mb-8">
            Join us on social media
          </span>
          <div className="flex gap-8 items-center">
            <a href="#">
              <img src={fb} alt="facebook" />
            </a>
            <a href="#">
              <img src={insta} alt="instagram" />
            </a>
            <a href="#">
              <img src={twt} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-xl font-medium p-4 bg-[#151515]">
        Copyright © BISTRO BOSS Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
