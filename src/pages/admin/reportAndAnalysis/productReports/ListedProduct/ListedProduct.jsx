import React from "react";
import {
  FaSearch,
  FaDownload,
  FaChevronDown,
  FaEye,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
const ListedProduct = () => {
  const data = [
    {
      sl: 1,
      product: "Chicken and Egg Pupp...",
      orderid: "100187",
      duration: "Abc Abc",
      inHouse: "$-250.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 2,
      orderid: "100187",
      product: "15 IN 1 MAKEUP COMBO...",
      duration: "Web seller",
      inHouse: "$10.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 3,
      orderid: "100187",
      product: "Voltage Tester 100-5...",
      duration: "Digital Seller",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 4,
      orderid: "100187",
      product: "Voltage Tester 100-5...",
      duration: "Digital Seller",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 5,
      orderid: "100187",
      product: "Voltage Tester 100-5...",
      duration: "Digital Seller",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
    {
      sl: 6,
      orderid: "100187",
      product: "Voltage Tester 100-5...",
      duration: "Digital Seller",
      inHouse: "$0.00",
      commission: "$0.00",
      shipping: "$0.00",
      incentive: "$0.00",
      discount: "$0.00",
      tax: "$0.00",
      refound: "$0.00",
      deliverd: "admin",
      total: "$0.00",
    },
  ];
  return (
    <div className="bg-gray-100  flex flex-col gap-4 px-5 py-5">
      <div className="rounded-md border bg-white border-gray-300 shadow-md hover:shadow-md px-5 py-5">
        <h1 className="font-bold text-md">Filter Data</h1> <br />
        <div className="grid grid-cols-4 gap-3">
          <select
            name=""
            id=""
            className="text-md  bg-white px-2 rounded py-2  border border-green-300"
          >
            <option value="">All </option>
            <option value="">Hold</option>
            <option value="">Disburse</option>
          </select>
          <select
            name=""
            id=""
            className="text-md  bg-white px-2 rounded py-2  border border-green-300"
          >
            <option value="">Wishlist Sort by High TO Low </option>
            <option value="">Wishlist Sort by Low To High</option>
          </select>
          <div className="flex ">
            <button
              className="px-6  py-2 rounded border border-green-200 bg-[#A1CB46] hover:bg-[#6a852f] text-white"
              style={{ color: "white" }}
            >
              Filter
            </button>
          </div>
        </div>{" "}
        <br />
      </div>

      {/* //////////// */}
      {/* ///////////// */}
      <div className="card">
        <div className="px-3 py-4">
          <div className="flex justify-between gap-3 align-items-center">
            <h5 className="mb-0 text-capitalize d-flex gap-2 mr-auto font-bold">
              Total Transactions{" "}
              <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                2
              </span>
            </h5>

            <div className="flex  gap-3">
              <form
                action="https://6valley.6amtech.com/admin/customer/subscriber-list"
                method="GET"
                className="w-80 "
              >
                <div className="input-group input-group-merge input-group-custom">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FaSearch />
                    </div>
                  </div>
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="searchValue"
                    className="form-control"
                    placeholder="Search by email"
                    aria-label="Search orders"
                    value=""
                  />
                  <button
                    type="submit"
                    className="btn bg-[#A1CB46] hover:bg-[#94ba42]"
                  >
                    Search
                  </button>
                </div>
              </form>

              <button
                type="button"
                className="rounded w-32 px-3 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] text-nowrap btn-block flex gap-2 "
                style={{
                  display: "flex",
                  color: "white",
                  alignItems: "center",
                  gap: "4",
                }}
                //   data-toggle="dropdown"
              >
                <FaDownload className="text-md" /> Export
              </button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table overflow-y-auto table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
            <thead className="thead-light thead-50 text-capitalize ">
              <tr>
                <th>SL</th>
                <th>Product Name</th>
                <th>Date</th>

                <th>Total In Wishlist </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.sl}>
                  <td>{index + 1}</td>
                  <td>{item.product}</td>
                  <td>13 Jun 2023</td>
                  <td>0</td>

                  {/* <td className="   text-green-500 ">
                    <IoMdDownload />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card-footer d-flex justify-content-center align-items-center">
          {/* <p className="m-0">
Showing 1 to {couponData.length} of {couponData.length} entries
</p> */}
        </div>
      </div>
    </div>
  );
};

export default ListedProduct;
