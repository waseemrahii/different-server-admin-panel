import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineStreetview } from "react-icons/md"


const Ticket_Support = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Assuming currentPage state exists

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can add further logic here if needed
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here, e.g., fetch data based on searchTerm
    console.log("Searching for:", searchTerm);
    // Reset page number to 1 after search
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#F9F9FB] h-full w-full p-5">
      <div className="flex items-center">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/support_ticket.png"
          alt="Support Ticket Icon"
          className="w-auto h-auto max-w-16 max-h-20 pt-5 pl-8"
        />

        <p className="text-lg pt-4 pl-2 font-semibold text-[#334257]">
          Support Ticket
        </p>
        <p className="text-xs font-semibold mt-4 text-[#334257] ml-4 bg-slate-400 rounded-full px-2 py-1">
          4
        </p>
      </div>

      <div className="flex pl-5 pt-7 mt-4">
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by Store..."
            className="border border-gray-300 rounded h-12  px-4 py-2 focus:outline-none focus:border-blue-500"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          />
          <button
            type="submit"
            onClick={() => setCurrentPage(1)} // Reset page number on search
            className="bg-blue-500 text-white px-4 py-2 w-16 h-12 rounded hover:bg-blue-600"
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              marginLeft: "-1px",
            }}
          >
            <FaSearch />
          </button>

          <select className="border border-blue-600 rounded h-12 w-48 text-base text-gray-700 py-3 px-4 ml-64 hover:border-blue-500 hover:bg-white hover:text-black">
            <option value="1">ALL Priority</option>
            <option value="2">Low</option>
            <option value="3 ">Medium</option>
            <option value="4">Urgent</option>
          </select>

          <select className="border border-blue-600 rounded text-base h-12 w-48 text-gray-700 py-3 px-4 ml-10 hover:border-blue-500 hover:bg-white hover:text-black">
            <option value="ALL status">All status</option>
            <option value="Open">Open</option>
            <option value="Close ">Close</option>
          
          </select>
        </form>
      </div>


      <div>

      </div>
      <div className="border-t-2 mt-9"></div>
      <div className="bg-white w-75vw] h-[30vh] pt-5 mt-5 mr-7 ml-7 rounded-lg">
  <div className="flex items-center">
    <img
      src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
      className="ml-2 h-14 w-14"
      alt="Profile"
    />
    <div className="ml-5">
      <p className="text-slate-700 text-xs">Devid Jack</p>
      <div className="flex pt-2">
      <p className="text-xs text-red-700 bg-red-400  rounded-full  px-3 py-1">Low</p>
      <p className="text-xs text-blue-800 bg-indigo-400  rounded-full ml-2 px-3 py-1">Pending</p>
      <p className="text-slate-700 text-sm ml-2"> Complaint</p>
      </div>
      <p className="pt-4 text-sm">10 Jan 2023 02:38:AM</p>


    </div>
  </div>
  <div className="border-t-2 mt-6"></div>
  <div className="flex justify-between items-end">
  <p className="pt-2 text-sm pl-5">While adding product</p>
  <button className="rounded-md bg-blue-800 h-10 w-20 mt-3 mr-8 text-white flex items-center justify-center">
  <MdOutlineStreetview />view
  </button>
</div>
</div>

     




<div className="bg-white w-75vw] h-[30vh] pt-5 mt-5 mr-7 ml-7 rounded-lg">
  <div className="flex items-center">
    <img
      src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
      className="ml-2 h-14 w-14"
      alt="Profile"
    />
    <div className="ml-5">
      <p className="text-slate-700 text-xs">Devid Jack</p>
      <div className="flex pt-2">
      <p className="text-xs text-red-700 bg-red-400  rounded-full  px-3 py-1">Low</p>
      <p className="text-xs text-blue-800 bg-indigo-400  rounded-full ml-2 px-3 py-1">Pending</p>
      <p className="text-slate-700 text-sm ml-2"> Complaint</p>
      </div>
      <p className="pt-4 text-sm">10 Jan 2023 02:38:AM</p>


    </div>
  </div>
  <div className="border-t-2 mt-6"></div>
  <div className="flex justify-between items-end">
  <p className="pt-2 text-sm pl-5">While adding product</p>
  <button className="rounded-md bg-blue-800 h-10 w-20 mt-3 mr-8 text-white flex items-center justify-center">
  <MdOutlineStreetview />view
  </button>
</div>
</div>




<div className="bg-white w-75vw] h-[30vh] pt-5 mt-5 mr-7 ml-7 rounded-lg">
  <div className="flex items-center">
    <img
      src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
      className="ml-2 h-14 w-14"
      alt="Profile"
    />
    <div className="ml-5">
      <p className="text-slate-700 text-xs">Devid Jack</p>
      <div className="flex pt-2">
      <p className="text-xs text-red-700 bg-red-400  rounded-full  px-3 py-1">Low</p>
      <p className="text-xs text-blue-800 bg-indigo-400  rounded-full ml-2 px-3 py-1">Pending</p>
      <p className="text-slate-700 text-sm ml-2"> Complaint</p>
      </div>
      <p className="pt-4 text-sm">10 Jan 2023 02:38:AM</p>


    </div>
  </div>
  <div className="border-t-2 mt-6"></div>
  <div className="flex justify-between items-end">
  <p className="pt-2 text-sm pl-5">While adding product</p>
  <button className="rounded-md bg-blue-800 h-10 w-20 mt-3 mr-8 text-white flex items-center justify-center">
  <MdOutlineStreetview />view
  </button>
</div>
</div>




    </div>
  );
};

export default Ticket_Support;


