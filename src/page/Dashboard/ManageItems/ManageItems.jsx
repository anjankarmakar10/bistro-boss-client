import useMenu from "../../../hooks/useMenu";
import Item from "./Item";

const ManageItems = () => {
  const [menus] = useMenu();

  if (menus.lengh === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="alert rounded-lg font-semibold alert-info shadow-sm mb-8 flex items-center justify-between">
          <span>There are not items to manage</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 max-w-md mx-auto text-center">
        <h3 className="text-3xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
          All Recipes?
        </h3>
      </header>
      <div className="alert rounded-sm font-semibold alert-info shadow-sm mb-8">
        <span>Total Items: {menus?.length}</span>
      </div>

      <div className="overflow-x-auto w-full  rounded-md">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {menus?.map((menu, index) => (
              <Item index={index + 1} key={menu?._id} menu={menu} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
