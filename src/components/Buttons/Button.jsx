const Button = ({ children, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="w-fit mx-auto  bg-black relative rounded-b-lg pb-1 min-w-[240px] focus:pb-0 transition-all"
    >
      <button className="uppercase rounded-b-lg bg-white text-xl font-medium h-16 w-full">
        {children}
      </button>
    </article>
  );
};

export default Button;
