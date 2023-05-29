import { Link } from "react-router-dom";
import profile from "../../assets/others/profile.png";
import { useAuth } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";

const ProfileBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out",
    }).then((result) => {
      const signOut = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error.message);
          return;
        }
      };

      if (result.isConfirmed) {
        signOut();
        Swal.fire("Successfully Sign Out!", "", "success");
      }
    });
  };

  return (
    <article className="dropdown dropdown-end text-black">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?.photoURL ? (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={profile}
              alt=""
            />
          )}
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact bg-base-100 dropdown-content mt-3 p-2 shadow rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li onClick={handleLogOut}>
          <a>Logout</a>
        </li>
      </ul>
    </article>
  );
};

export default ProfileBar;
