import { useForm } from "react-hook-form";
import img from "../../assets/others/authentication2.png";
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";
import { Link, useNavigate } from "react-router-dom";
import SigninContainer from "../../components/auth/SigninContainer";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useAuth } from "../../contexts/AuthProvider";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");
  const [captchaMsg, setCaptchaMsg] = useState("");
  const navigate = useNavigate();

  const { signInWithEmail, forgotPassword } = useAuth();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onSubmit = async (data) => {
    if (!validateCaptcha(data?.capcha)) {
      setCaptchaMsg("Captcha didn't Matched");
      return;
    }

    try {
      const { user } = await signInWithEmail(data?.email, data?.password);
      reset();
      Swal.fire(
        "Successfully Sign In!",
        `Welcome back ${user?.displayName}`,
        "success"
      );
      navigate("/", { replace: true });
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleForgot = async () => {
    Swal.fire({
      title: "Submit your email address",
      input: "email",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,
      preConfirm: async (email) => {
        try {
          await forgotPassword(email);
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error.message}`);
          return;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: `Check your email for forther informations`,
        });
      }
    });
  };

  return (
    <div className={`py-10 px-2 bg-auth`}>
      <section className="container mx-auto px-6 bg-auth min-h-[90vh] drop-shadow-2xl flex flex-col md:flex-row items-center py-8">
        <div className="flex-1 w-full hidden md:flex">
          <img className="w-full max-w-[648px]" src={img} alt="" />
        </div>
        <div className="flex-1 w-full">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-2">
            Login
          </h3>
          {message && (
            <div className="w-full text-white font-medium max-w-[536px] mx-auto  p-2 bg-slate-400 rounded-lg mb-2">
              {message}
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[536px] mx-auto"
            action=""
          >
            <div className="flex flex-col gap-4 mb-6">
              <label className="font-semibold text-xl" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                className="py-2 md:py-4 outline-none outline-blue-500 focus-within:outline-4 drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] placeholder:text-[#a1a1a1]"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email?.type === "required" && (
                <span className="mt-1 font-medium  text-red-800">
                  Email is required
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="mt-1 font-medium  text-red-800">
                  Please enter a valid email
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <label className="font-semibold text-xl" htmlFor="email">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                className="py-2 md:py-4 outline-none outline-blue-500 focus-within:outline-4 drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] placeholder:text-[#a1a1a1]"
                type="password"
                placeholder="Enter your email"
              />
              <span
                onClick={handleForgot}
                className="cursor-pointer text-blue-500 underline font-semibold"
              >
                Forgot Password?
              </span>
              {errors.email && (
                <span className="mt-1 font-medium  text-red-800">
                  Password is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <div className="pb-1 pt-2  outline-none drop-shadow-sm px-4 rounded-lg text-[#151515] bg-white">
                <LoadCanvasTemplate />
              </div>
              {captchaMsg && (
                <div className="w-full text-white font-medium max-w-[536px] mx-auto  p-2 bg-slate-400 rounded-lg mb-2">
                  {captchaMsg}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <input
                {...register("capcha", { required: true })}
                className="py-2 md:py-4 outline-none outline-blue-500 focus-within:outline-4 drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] placeholder:text-[#a1a1a1]"
                type="text"
                placeholder="Enter the text below"
              />
              {errors.capcha && (
                <span className="mt-1 font-medium  text-red-800">
                  Please fill this field
                </span>
              )}
            </div>

            <ButtonSubmit>Sign In</ButtonSubmit>
          </form>

          <div className="mt-8 text-xl text-[#D1A054] text-center">
            New here?{" "}
            <Link to="/signup" className="font-bold">
              Create a New Account
            </Link>
          </div>
          <SigninContainer />
        </div>
      </section>
    </div>
  );
};

export default SignIn;
