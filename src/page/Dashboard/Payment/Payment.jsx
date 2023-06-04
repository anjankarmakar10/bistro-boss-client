import Checkout from "./Checkout";
import useCarts from "../../../hooks/useCarts";
import totalPrice from "../../../utils/totalPrice";
const Payment = () => {
  const [carts] = useCarts();

  let total = totalPrice(carts);

  return (
    <div className="py-8 px-4 bg-gradient-to-br to-[#5CB561] from-[#2CB8CB]">
      <header className="mb-8 max-w-md mx-auto text-center">
        <h3 className="text-3xl pb-8 text-white font-semibold border-b-4 border-[#E8E8E8] mb-10">
          Payment
        </h3>
      </header>
      <div className="flex items-center min-h-[72vh]">
        <section className="max-w-2xl w-full min-h-[320px] mx-auto p-4 rounded-md  bg-slate-800 flex items-center justify-center bg-gradient-to-tr from-[#401F3E] to-[#443F77]">
          <Checkout price={total} />
        </section>
      </div>
    </div>
  );
};

export default Payment;
