import React, { useEffect, useState } from "react";
import { FaSearch, FaDownload, FaChevronDown } from "react-icons/fa";
import axios from 'axios';

const SubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/subscribers');
      setSubscribers(response.data);
    } catch (error) {
      console.error("Error fetching subscribers", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/api/subscribers', {
        params: { searchValue }
      });
      setSubscribers(response.data);
    } catch (error) {
      console.error("Error searching subscribers", error);
    }
  };

  const handleExport = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/subscribers/export');
      // Handle the export logic (e.g., download the file)
      console.log(response.data);
    } catch (error) {
      console.error("Error exporting subscribers", error);
    }
  };

  return (
    <div className="content container-fluid snipcss-bShdM">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/subscribers.png"
            width="20"
            alt=""
          />{" "}
          Subscriber list{" "}
          <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
            {subscribers.length}
          </span>
        </h2>
      </div>
      <div className="row mt-20">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <form onSubmit={handleSearch}>
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
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
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
                className="btn rounded text-white bg-[#A1CB46] hover:bg-[#94ba42] text-nowrap flex justify-center align-items-center gap-2"
                onClick={handleExport}
              >
                <FaDownload /> Export <FaChevronDown />
              </button>
            </div>
            <div className="table-responsive">
              <table
                className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-CSLoI"
                id="style-CSLoI"
              >
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>SL</th>
                    <th scope="col">Email</th>
                    <th>Subscription date</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((subscriber, index) => (
                    <tr key={subscriber._id}>
                      <td>{index + 1}</td>
                      <td>{subscriber.email}</td>
                      <td>{new Date(subscriber.subscriptionDate).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-responsive mt-4">
              <div className="px-4 d-flex justify-content-lg-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberList;
