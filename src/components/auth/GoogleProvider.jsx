import img from "../../assets/icon/google.svg";

const GoogleProvider = () => {
  return (
    <button className="p-[14px] border-2 border-[#444] rounded-full gird place-content-center cursor-pointer">
      <img src={img} alt="Google" />
    </button>
  );
};

export default GoogleProvider;
