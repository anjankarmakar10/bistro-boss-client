import { useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/icon/google.svg";
import { useAuth } from "../../contexts/AuthProvider";
import addUser from "../../utils/addUser";

const GoogleProvider = () => {
  const { signInWithGoogle } = useAuth();
  const { state } = useLocation();
  const navigation = useNavigate();
  const from = state?.path || "/";

  const handleLogin = async () => {
    try {
      const { user } = await signInWithGoogle();
      const newUser = {
        name: user?.displayName,
        email: user?.email,
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
      <img src={img} alt="Google" />
    </button>
  );
};

export default GoogleProvider;
