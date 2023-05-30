import { useNavigate, useLocation } from "react-router-dom";
import img from "../../assets/icon/github.svg";
import { useAuth } from "../../contexts/AuthProvider";
import addUser from "../../utils/addUser";

const GitHubProvider = () => {
  const { signInWithGithub } = useAuth();
  const { state } = useLocation();
  const navigation = useNavigate();
  const from = state?.path || "/";

  const handleLogin = async () => {
    try {
      const { user } = await signInWithGithub();

      const newUser = {
        name: user?.displayName,
        email: user?.email || `${user?.reloadUserInfo?.screenName}@github.com`,
        admin: false,
      };
      const res = await addUser(newUser);
      const result = await res.json();
      console.log(result);

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
