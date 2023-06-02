import { useForm } from "react-hook-form";

const ManageItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 max-w-md mx-auto text-center">
        <h3 className="text-3xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
          Update a Recipe?
        </h3>
      </header>

      <div className="overflow-x-auto w-full  bg-[#F3F3F3] p-4 py-8 rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl w-full mx-auto"
          action=""
        >
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Recipe name*
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full "
            />
            {errors.name && (
              <span className="mt-1 font-medium text-red-600">
                Name is required
              </span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Category*
                </span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option selected>SALAD</option>
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
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
              {errors.price && (
                <span className="mt-1 font-medium text-red-600">
                  Price is required
                </span>
              )}
            </div>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Recipe Details*
              </span>
            </label>
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-56"
              placeholder="Recipe Details"
            ></textarea>
            {errors.details && (
              <span className="mt-1 font-medium text-red-600">
                Details is required
              </span>
            )}
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
