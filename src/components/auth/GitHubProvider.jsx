import img from "../../assets/icon/github.svg";

const GitHubProvider = () => {
  return (
    <button className="p-[14px] border-2 border-[#444] rounded-full gird place-content-center cursor-pointer">
      <img src={img} alt="GitHub" />
    </button>
  );
};

export default GitHubProvider;
