import React from "react";
import { IoMdPerson } from "react-icons/io";

const AddNewDelivery = () => {
  return (
    <>
      <div className="font-semibold bg-[#F9F9FB]  px-5 py-5 text-[1rem]  ">
        <div className="flex gap-3">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-delivery-man.png"
            alt=""
            className="w-7 h-7"
          />
          <h1> Add New Delivery Man</h1>
        </div>
        <div className="h-[110vh] w-full bg-white  rounded-lg mt-3 px-10 py-8">
          <h3 className="text-lg font-bold text-gray-600 mb-2 border-b-2 border-b-gray-300 w-100 flex gap-3 align-items-center">
            <IoMdPerson />
            General Information
          </h3>
          <form>
            <div className="mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[1rem]  text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="mt-1 block w-full border px-3 py-2  hover:border-blue-300 rounded-md border-gray-300 shadow-sm "
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Identity Type</label>
                  <select className="mt-1 block w-full border px-3 py-2 bg-white border-blue-400 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>Passport</option>
                    <option>National ID</option>
                    <option>Driver's License</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mt-1 block w-full border px-3 py-2 border-blue-400 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Identity Number</label>
                  <input
                    type="text"
                    placeholder="Ex:DH-23434-LS"
                    className="mt-1 block w-full border px-3 py-2 hover:border-blue-400 bg-white rounded-md border-gray-300 shadow-sm
                    "
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <div className="flex">
                    <select className="mt-1 block w-1/4 px-3 py-2 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>UK (+44)</option>
                      <option>US (+1)</option>
                      <option>IN (+91)</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Ex:017********"
                      className="mt-1 block w-3/4  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="mt-1 block w-full px-3 py-2  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-700">
                    Deliveryman Image{" "}
                    <span className="text-sm text-gray-500">(Ratio 1:1)</span>
                  </label>
                  <div className="flex flex-col items-center justify-center sm:w-full sm:max-w-xs lg:max-w-sm">
                    <input
                      type="file"
                      className="border px-3 py-2 hover:border-blue-400 bg-white rounded-md border-gray-300 shadow-sm cursor-pointer mb-4"
                    />
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
                      alt=""
                      className="h-[20vh] w-[10vw] sm:w-[50vw] sm:h-[30vh] lg:w-[15vw] lg:h-[30vh] object-cover rounded-md "
                    />
                  </div>
                </div>
                <div className="">
                  <label className="block text-gray-700">Identity Image</label>
                  <div className=" border-dashed border-2 border-gray-300 h-[36vh] w-[16vw] sm:w-[60vw] sm:h-[30vh] md:w-[40vw] md:h-[32vh] lg:w-[16vw] lg:h-[36vh] rounded flex items-center justify-center">
                    <img
                      src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
                      alt=""
                      className="h-[20vh] w-[10vw] sm:w-full sm:h-full lg:w-[15vw] lg:h-[30vh] object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="  mb-4 h-[40vh] w-full bg-white  rounded-lg mt-3 px-10 py-8">
          <h3 className="text-lg font-bold text-gray-600 mb-2 border-b-2 border-b-gray-300 w-100 flex gap-3 align-items-center">
            <IoMdPerson />
            Account Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Ex:ex@example.com"
                className="mt-1 block w-full border px-3 py-2 hover:border-blue-400 bg-white rounded-md border-gray-300 shadow-sm cursor-pointer focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-gray-700 flex items-center">
                Password{" "}
                <span
                  className="ml-1 text-gray-500 cursor-pointer"
                  title="Password minimum 8 characters"
                >
                  ℹ️
                </span>
              </label>
              <input
                type="password"
                placeholder="Password minimum 8 characters"
                className="mt-1 block w-full border px-3 py-2 hover:border-blue-400 bg-white rounded-md border-gray-300 shadow-sm cursor-pointer focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Password minimum 8 characters"
                className="mt-1 block w-full border px-3 py-2 hover:border-blue-400 bg-white rounded-md border-gray-300 shadow-sm cursor-pointer focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="reset"
                  className="mr-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  style={{ color: "white" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewDelivery;
