const ButtonSubmit = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="py-2 md:py-4 px-4 md:px-6 rounded-md text-xl font-bold bg-[#D1A054] text-white border-none outline-none  focus-within:outline-blue-500 focus-within:outline-4 w-full disabled:bg-[#eec586b7]"
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
