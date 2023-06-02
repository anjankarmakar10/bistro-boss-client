import { useForm } from "react-hook-form";
import uploadImage from "../../../utils/uploadImage";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const AddItems = () => {
  const axios = useAxios();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (item) => {
    try {
      const response = await uploadImage(item.image);
      const { data } = await response.json();
      const recipe = { ...item, image: data?.display_url };
      const res = await axios.post("/menu", recipe);
      if (res?.data?.insertedId) {
        reset();
        Swal.fire("New Recipe Add Successfully", "", "success");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8 max-w-md mx-auto text-center">
        <h3 className="text-3xl font-semibold border-b-4 border-[#E8E8E8] pb-6">
          Add a new Recipe?
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
              {...register("recipe", { required: true })}
              className="textarea text-base textarea-bordered h-56"
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <span className="mt-1 font-medium text-red-600">
                Details is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input  file-input-bordered  w-full max-w-xs bg-[#E8E8E8]"
            />
            {errors.image && (
              <span className="mx-2 font-medium text-red-600">
                Image is required
              </span>
            )}
          </div>
          <button className="btn gap-2">
            Add Item
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001Z"
                fill="white"
              />
              <path
                d="M21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
