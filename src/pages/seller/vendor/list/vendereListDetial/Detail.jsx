import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ApiUrl from "../../../../../ApiUrl";
import LoadingSpinner from "../../../../../components/LoodingSpinner/LoadingSpinner";

const VendorDetailes = () => {
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Extract vendor ID from URL parameters

  // Fetch the vendor details
  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authorization token found.");
        }

        const response = await fetch(`${ApiUrl}vendors/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setVendorData(data.doc);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };

    fetchVendorDetails();
  }, []);

  // Function to update vendor status
  const updateStatus = async (newStatus) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authorization token found.");
      }

      const response = await axios.put(
        `${ApiUrl}vendors/status/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setVendorData((prevData) => ({
          ...prevData,
          status: newStatus,
        }));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Confirm status change
  const confirmStatusChange = (newStatus, action) => {
    Swal.fire({
      title: `Are you sure you want to ${action} this vendor?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatus(newStatus);
        Swal.fire("Success", `Vendor is now ${newStatus}`, "success");
      }
    });
  };

  if (loading) {
    return <div><LoadingSpinner /> </div>;
  }

  if (!vendorData) {
    return <div>Error loading vendor data.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white shadow rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
          <img
            src={vendorData.vendorImage}
            alt="Shop Logo"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              {vendorData.shopName}
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center py-5 space-y-1 md:space-y-0 md:space-x-6">
              <h1>
                <span>{vendorData?.totalProducts ?? 0}</span>
                <span className="font-semibold"> Products</span>
              </h1>
              <h1>
                <span>{vendorData?.totalOrders ?? 0}</span>
                <span className="font-semibold"> Orders</span>
              </h1>
            </div>
            <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              View Live
            </Link>
          </div>
        </div>

        {/* Dynamic Buttons */}
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          {vendorData.status === "pending" && (
            <>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => confirmStatusChange("active", "activate")}
              >
                Activate
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => confirmStatusChange("rejected", "reject")}
              >
                Reject
              </button>
            </>
          )}
          {vendorData.status === "active" && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => confirmStatusChange("inactive", "suspend")}
            >
              Suspend
            </button>
          )}
          {vendorData.status === "rejected" && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => confirmStatusChange("active", "activate")}
            >
              Activate
            </button>
          )}
          {vendorData.status === "inactive" && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => confirmStatusChange("active", "activate")}
            >
              Activate
            </button>
          )}
        </div>
      </div>

      {/* Vendor Info */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 border-t pt-4">
        {/* Stats */}
        <div className="col-span-1 md:col-span-2 border rounded-md p-4">
          <p>Total Products:</p>
          <p className="text-xl font-semibold text-blue-600">
            {vendorData?.totalProducts ?? 0}
          </p>
          <p>Total Orders:</p>
          <p className="text-xl font-semibold text-blue-600">
            {vendorData?.totalOrders ?? 0}
          </p>
        </div>
        {/* Shop Information */}
        <div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white mt-4">
          <div>
            <h2 className="font-semibold text-[1.1rem] mb-2">
              Shop Information
            </h2>
            <table>
              <tbody>
                <tr>
                  <td className="px-2 py-1 text-nowrap">Shop Name:</td>
                  <td className="px-2 py-1">{vendorData.shopName}</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Phone:</td>
                  <td className="px-2 py-1">{vendorData.phoneNumber}</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Address:</td>
                  <td className="px-2 py-1">{vendorData.address}</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Status:</td>
                  <td className="px-2 py-1">
                    <span className="bg-[#00C9DB] text-white rounded-xl p-1">
                      {vendorData.status}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Seller Information */}
          <div>
            <h2 className="font-semibold text-[1.1rem] mb-2">
              Seller Information
            </h2>
            <table className="min-w-full table-auto border-collapse">
              <tbody>
                <tr>
                  <td className="px-2 py-1">Name:</td>
                  <td className="px-2 py-1">
                    {vendorData.firstName} {vendorData.lastName}
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Email:</td>
                  <td className="px-2 py-1">{vendorData.email}</td>
                </tr>
                <tr>
                  <td className="px-2 py-1">Phone:</td>
                  <td className="px-2 py-1">{vendorData.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetailes;
