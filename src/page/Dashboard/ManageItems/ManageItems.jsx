import React from "react";

const ManageItems = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 max-w-md mx-auto text-center">
        <h3 className="text-3xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
          UPDATE ITEM
        </h3>
      </header>

      <div className="overflow-x-auto w-full bg-[#F3F3F3] p-4 py-8 rounded-md">
        <form className="max-w-4xl w-full mx-auto" action="">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Recipe name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Category*
                </span>
              </label>
              <select className="select select-bordered w-full ">
                <option disabled selected>
                  SALAD
                </option>
                <option>PIZZA</option>
                <option>SOUP</option>
                <option>DESSERT</option>
                <option>DRINKS</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Recipe Details*
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-56"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="btn gap-2 max-w-xs mx-auto">
              Update Recipe Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageItems;
