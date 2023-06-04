import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateItem = () => {
  const axios = useAxios();
  const navigate = useNavigate();

  const { data } = useLoaderData();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (item) => {
    try {
      const result = await axios.post(`/menu/${data?._id}`, {
        ...item,
        image: data?.image,
      });
      if (result?.data.modifiedCount > 0) {
        Swal.fire("Recipe Updated Successfully", "", "success");
        navigate("/dashboard/manageitems", { replace: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 max-w-md mx-auto text-center">
        <h3 className="text-3xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
          Update Recipe?
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
              defaultValue={data?.name}
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
                defaultValue={data?.category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option className="uppercase">salad</option>
                <option className="uppercase">pizza</option>
                <option className="uppercase">soup</option>
                <option className="uppercase">dessert</option>
                <option className="uppercase">drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Price*</span>
                {errors.price && (
                  <span className="mt-1 font-medium text-red-600">
                    Price is required
                  </span>
                )}
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                step="any"
                defaultValue={data?.price}
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
              {...register("recipe", { required: true })}
              defaultValue={data?.recipe}
              className="textarea text-base textarea-bordered h-56"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <span className="mt-1 font-medium text-red-600">
                Details is required
              </span>
            )}
          </div>

          <div className="flex justify-center">
            <button className="btn gap-2 max-w-xs w-full">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
