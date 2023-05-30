import React from "react";
import useUsers from "../../../hooks/useUsers";
import User from "./User";

const AllUsers = () => {
  const [users] = useUsers();

  return (
    <div className="max-w-5xl px-4 py-8">
      <header className="mb-8 max-w-md mx-auto text-center">
        <h5 className="text-[#D99904] italic text-xl border-b-4 border-[#E8E8E8] pb-4 mb-5">
          ---How many??---
        </h5>
        <h3 className="text-3xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
          MANAGE ALL USERS
        </h3>
      </header>

      <section className="p-4 bg-slate-50 rounded-md">
        <div className="alert rounded-sm font-semibold alert-info shadow-sm mb-8">
          <span>Total Users: {users?.length}</span>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <User key={user?._id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllUsers;
