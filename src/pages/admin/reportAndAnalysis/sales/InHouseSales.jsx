import React from "react";
import {
  FaSearch,
  FaDownload,
  FaChevronDown,
  FaEye,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
const InHouseSales = () => {
  const data = [
    {
      id: 1,
      name: "Women's long-sleeve lightweight french terry fleece quarter-zip top",
      sales: 7,
    },
    {
      id: 2,
      name: "Crossbody Shoulder Bag Soft Leather Bag Female Fashion",
      sales: 7,
    },
    {
      id: 3,
      name: "Progress lighting P4009-10 5-light chandelier, polished brass",
      sales: 2,
    },
    {
      id: 4,
      name: "Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac",
      sales: 12,
    },
    {
      id: 5,
      name: "Timex marlin stainless steel hand-wound movement",
      sales: 1,
    },
    { id: 6, name: "Fastest Electric Spice Grinder and Blender", sales: 1 },
    {
      id: 5,
      name: "Timex marlin stainless steel hand-wound movement",
      sales: 1,
    },
    { id: 6, name: "Fastest Electric Spice Grinder and Blender", sales: 1 },
    {
      id: 5,
      name: "Timex marlin stainless steel hand-wound movement",
      sales: 1,
    },
    { id: 6, name: "Fastest Electric Spice Grinder and Blender", sales: 1 },
  ];
  return (
    <>
      <div className="">
        <div className="rounded-md border bg-white border-gray-300 shadow-md hover:shadow-md px-5 py-5 mx-5">
          <div className="flex gap-2 items-center pb-5 pt-5">
            <img
              src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse_sale.png"
              alt=""
              className="w-10 h-10"
            />
            <h1 className="font-bold text-md">Inhouse Sale</h1> <br />
          </div>
          <div className="flex items-center gap-5 mb-5">
            Category
            <select
              name=""
              id=""
              className="text-md  bg-white px-4 rounded py-3 w-[70%] border border-green-300"
            >
              <option value="">This Year</option>
              <option value="">This Month</option>
              <option value="">This Week</option>
              <option value="">This Day</option>
              <option value="">Custom Date</option>
            </select>
            <button
              className="px-3 w-[20% ] py-3 rounded border border-green-200 bg-[#A1CB46] hover:bg-[#6a852f] text-white"
              style={{ color: "white" }}
            >
              Filter
            </button>
          </div>
          <div className="card">
            <div className="table-responsive">
              <table className="table  table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table text-left">
                <thead className="thead-light thead-50 text-capitalize ">
                  <tr>
                    <th>SL</th>
                    <th>Product Name</th>
                    {/* <th></th>
                    <th></th>

                    <th></th>
                    <th></th> */}

                    <th className="">Total Sale</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.sl}>
                      <td>{index + 1}</td>
                      <td>
                        <div>{item.name}</div>
                      </td>
                      {/* <td></td>
                      <td></td>
                      <td></td>
                      <td></td> */}

                      <td className="">{item.sales}</td>
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
      </div>
    </>
  );
};

export default InHouseSales;
