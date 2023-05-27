import { useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/icon/google.svg";
import { useAuh } from "../../contexts/AuthProvider";

const GoogleProvider = () => {
  const { signInWithGoogle } = useAuh();
  const { state } = useLocation();
  const navigation = useNavigate();
  const from = state?.path || "/";

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
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
      <img src={img} alt="Google" />
    </button>
  );
};

export default GoogleProvider;
