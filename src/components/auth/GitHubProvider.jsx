import { useNavigate, useLocation } from "react-router-dom";
import img from "../../assets/icon/github.svg";
import { useAuh } from "../../contexts/AuthProvider";

const GitHubProvider = () => {
  const { signInWithGithub } = useAuh();
  const { state } = useLocation();
  const navigation = useNavigate();
  const from = state?.path || "/";

  const handleLogin = async () => {
    try {
      await signInWithGithub();
      navigation(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="p-[14px] border-2 border-[#444] rounded-full gird place-content-center cursor-pointer"
    >
      <img src={img} alt="GitHub" />
    </button>
  );
};

export default GitHubProvider;
