import { Edit, Trash2 } from "react-feather";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import useMenu from "../../../hooks/useMenu";

const Item = ({ menu, index }) => {
  const axios = useAxios();
  const [, refetch] = useMenu();

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
        const { data } = await axios.delete(`/menu/${menu?._id}`);
        if (data.deletedCount > 0) {
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
      <th>{index}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img src={menu?.image} alt={menu?.name} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{menu?.name}</div>
        </div>
      </td>
      <td className="">{menu?.price}</td>
      <td className="">
        <Link
          to={`/dashboard/updateitem/${menu?._id}`}
          className="btn btn-square border-none bg-orange-500 "
        >
          <Edit />
        </Link>
      </td>
      <th>
        <button
          onClick={handleDelete}
          className="btn btn-square border-none bg-red-500 "
        >
          <Trash2 />
        </button>
      </th>
    </tr>
  );
};

export default Item;
