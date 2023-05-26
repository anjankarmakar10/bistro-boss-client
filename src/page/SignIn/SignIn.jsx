import img from "../../assets/others/authentication2.png";
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";

const SignIn = () => {
  return (
    <div className={`py-10 px-2 bg-auth`}>
      <section className="container mx-auto px-4 bg-auth min-h-[90vh] drop-shadow-2xl flex items-center">
        <div className="flex-1">
          <img className="w-full max-w-[648px]" src={img} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-2">
            Login
          </h3>
          <form className="w-full max-w-[536px]" action="">
            <div className="flex flex-col gap-4 mb-6">
              <label className="font-semibold text-xl" htmlFor="email">
                Email
              </label>
              <input
                className="py-2 md:py-4 outline-none outline-blue-500 focus-within:outline-4 drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] placeholder:text-[#a1a1a1]"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <label className="font-semibold text-xl" htmlFor="email">
                Email
              </label>
              <input
                className="py-2 md:py-4 outline-none outline-blue-500 focus-within:outline-4 drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] placeholder:text-[#a1a1a1]"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <input
                className="py-2 md:py-4 outline-none drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] bg-white"
                type="text"
                value={"U A g l u o "}
                disabled
              />
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <input
                className="py-2 md:py-4 outline-none outline-blue-500 focus-within:outline-4 drop-shadow-sm px-4 md:px-6 rounded-lg text-[#151515] placeholder:text-[#a1a1a1]"
                type="text"
                placeholder="Enter the text below"
              />
            </div>

            <ButtonSubmit>Sign In</ButtonSubmit>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
