import Swal from "sweetalert2";
import useCarts from "../../../hooks/useCarts";

const CartItem = ({ cart }) => {
  const [, refetch] = useCarts();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      const deleteItem = async () => {
        const response = await fetch(
          `https://bistro-boss-server-anjankarmakar.vercel.app/carts?id=${cart?._id}`,
          { method: "DELETE" }
        );
        const result = await response.json();
        if (result.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your menu has been deleted.", "success");
        }
      };

      if (result.isConfirmed) {
        deleteItem();
      }
    });
  };

  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img src={cart?.image} alt={cart?.name} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{cart?.name}</div>
        </div>
      </td>
      <td className="">{cart?.price}</td>
      <th>
        <button
          onClick={handleDelete}
          className="btn text-white bg-red-500  btn-xs p-3 pt-[14px]  grid place-content-center"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default CartItem;
