/** @format */

import Swal from "sweetalert2";

const AddTea = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const supplier = from.supplier.value;
    const category = from.tea.value;
    const chef = from.chef.value;
    const quantity = from.quantity.value;
    const tast = from.tast.value;
    const photo = from.photo.value;
    const newTea = { name, supplier, category, chef, quantity, tast, photo };
    fetch("http://localhost:5000/teas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTea),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your tea has been saved",
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-5 ">
      <div className="text-center w-1/2 mx-auto mb-2">
        <h2 className="text-4xl font-semibold my-2">Add New Coffee</h2>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="  max-w-screen-lg mx-auto ">
        <form
          onSubmit={handleAddItem}
          className="">
          <div className="flex gap-5">
            <div className="w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tea Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tea name"
                  className="w-full input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="select w-full"
                  name="tea">
                  <option
                    disabled
                    defaultValue={"pick an item"}>
                    Pick an item
                  </option>
                  <option>Hot Tea</option>
                  <option>Green Tea</option>
                  <option>Pudina Tea</option>
                  <option>Tulshi Tea</option>
                  <option>Only Tea</option>
                </select>
              </div>
            </div>
            <div className="w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Chef"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tast</span>
                </label>
                <input
                  type="text"
                  name="tast"
                  placeholder="Tast"
                  className="w-full input input-bordered"
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo url"
              className="w-full input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] border border-[#331A15] hover:bg-[#331A15] hover:text-white">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTea;
