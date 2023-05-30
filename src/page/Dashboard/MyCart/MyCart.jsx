import { Link } from "react-router-dom";
import useCarts from "../../../hooks/useCarts";
import useTitle from "../../../hooks/useTitle";
import totalPrice from "../../../utils/totalPrice";
import CartItem from "./CartItem";

const MyCart = () => {
  useTitle("My Cart");

  const [carts] = useCarts();
  const pirce = totalPrice(carts);

  if (carts?.length === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="alert rounded-lg font-semibold alert-info shadow-sm mb-8 flex items-center justify-between">
          <span>There are no items in this carts</span>
          <Link to={"/shop/foods"} className="underline">
            Want to add?
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 max-w-md mx-auto text-center">
        <h5 className="text-[#D99904] italic text-xl border-b-4 border-[#E8E8E8] pb-4 mb-5">
          My Cart
        </h5>
        <h3 className="text-3xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
          Wanna Add Mor?
        </h3>
      </header>

      <div className="alert rounded-sm font-semibold alert-info shadow-sm mb-8">
        <span>Total Items: {carts?.length}</span>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((cart) => (
              <CartItem key={cart?._id} cart={cart} />
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Total Price</th>
              <th></th>
              <th>${pirce}</th>
              <th>
                <button className="btn btn-sm  px-4">Pay</button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
