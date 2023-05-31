import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { Trash2, User as UserIcon } from "react-feather";
const User = ({ user, index }) => {
  const [, refetch] = useUsers();

  const admin = user?.admin;
  const id = user?._id;

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
      const deleteUser = async () => {
        const response = await fetch(`http://localhost:4000/users/${id}`, {
          method: "DELETE",
        });
        const result = await response.json();
        if (result.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "User has been deleted.", "success");
        }
      };
      if (result.isConfirmed) {
        deleteUser();
      }
    });
  };

  const handleRole = (makeAdmin) => {
    const user = {
      admin: makeAdmin,
    };

    Swal.fire({
      title: `Make ${makeAdmin ? "admin?" : "normal user?"}`,
      text: "You will able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make ${makeAdmin ? "admin!" : "normal!"}`,
    }).then((result) => {
      const updateUser = async () => {
        const response = await fetch(
          `http://localhost:4000/users/admin/${id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        const result = await response.json();
        if (result.modifiedCount > 0) {
          refetch();
          Swal.fire(
            "Sucess!",
            `"User has been has been ${
              makeAdmin ? "promoted to admin" : "demoted from admin"
            } `
          );
        }
      };
      if (result.isConfirmed) {
        updateUser();
      }
    });
  };

  return (
    <tr>
      <th className="font-bold">{index}</th>
      <td>
        <div className="flex items-center space-x-3 ">{user?.name}</div>
      </td>
      <td>
        <div>
          <div className="">{user?.email}</div>
        </div>
      </td>
      <td className="">
        {admin ? (
          <button
            onClick={() => handleRole(false)}
            title={`${admin && "Admin"}`}
            className={`font-semibold`}
          >
            Admin
          </button>
        ) : (
          <button
            onClick={() => handleRole(true)}
            className={`btn border-none btn-square "bg-[#D1A054]"`}
          >
            <UserIcon />
          </button>
        )}
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
