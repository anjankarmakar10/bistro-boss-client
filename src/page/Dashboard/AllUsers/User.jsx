import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { Trash2, User as UserIcon } from "react-feather";

const User = ({ user }) => {
  const [, refetch] = useUsers();

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
          `http://localhost:4000/users?id=${user?._id}`,
          { method: "DELETE" }
        );
        const result = await response.json();
        if (result.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "User has been deleted.", "success");
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
        <div className="flex items-center space-x-3 ">{user?.name}</div>
      </td>
      <td>
        <div>
          <div className="">{user?.email}</div>
        </div>
      </td>
      <td className="">
        <button className="btn border-none btn-square bg-[#D1A054]">
          <UserIcon />
        </button>
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

export default User;
