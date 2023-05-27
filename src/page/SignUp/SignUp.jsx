import img from "../../assets/others/authentication2.png";
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";
import { useForm } from "react-hook-form";
import SigninContainer from "../../components/auth/SigninContainer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuh } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { signUpWithEmail, updateUserProfile, verifyEmail } = useAuh();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const { user } = await signUpWithEmail(data?.email, data?.password);
      await updateUserProfile(user, data?.name, "");
      await verifyEmail(user);
      reset();
      Swal.fire(
        "Successfully Account Created!",
        "Please check your email to verify your account",
        "success"
      );
      navigate("/", { replace: true });
    } catch (error) {
      setLoading(false);

      setMessage(error.message);
    }

    reset();
  };

  return (
    <div className={`py-10 px-2 bg-auth`}>
      <section className="container mx-auto px-6 bg-auth min-h-[90vh] drop-shadow-2xl flex flex-col md:flex-row-reverse items-center py-8">
        <div className="flex-1 w-full hidden md:flex">
          <img className="w-full max-w-[648px]" src={img} alt="" />
        </div>
        <div className="flex-1 w-full ">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-2">
            Sign Up
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
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="py-2 md:py-4 outline-none outline-blue-500 focus-within:outline-4 drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] placeholder:text-[#a1a1a1]"
                type="text"
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="mt-1 font-medium  text-red-800">
                  Name is required
                </span>
              )}
            </div>

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
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/,
                  minLength: 8,
                })}
                className="py-2 md:py-4 outline-none outline-blue-500 focus-within:outline-4 drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] placeholder:text-[#a1a1a1]"
                type="password"
                placeholder="Enter your password"
              />
              {errors.password?.type === "required" && (
                <span className="mt-1 font-medium  text-red-800">
                  Password is required
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="mt-1 font-medium  text-red-800">
                  Password should contain at least one digit one lower case, one
                  upper case.
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="mt-1 font-medium  text-red-800">
                  Password length must be upto 6 char
                </span>
              )}
            </div>

            <ButtonSubmit disabled={loading}>Sign Up</ButtonSubmit>
          </form>
          <div className="mt-8 text-xl text-[#D1A054] text-center">
            Already registered?{" "}
            <Link to="/signin" className="font-bold">
              Go to log in
            </Link>
          </div>
          <SigninContainer />
        </div>
      </section>
    </div>
  );
};

export default SignUp;
