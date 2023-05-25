const MenuContainer = ({ children }) => {
  return (
    <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {children}
    </section>
  );
};

export default MenuContainer;
