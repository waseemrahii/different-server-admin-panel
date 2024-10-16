import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import the necessary icons
import { FaPen, FaTrash } from "react-icons/fa"; // Import the necessary icon
import ActionButton from "../../../../components/ActionButton/Action";
import {
  createDeal,
  deleteDeal,
  fetchDeals,
  updateDeal,
  updateDealStatus,
} from "../../../../redux/slices/admin/dealOfDaySlice";
import Swal from "sweetalert2";
import { fetchProducts } from "../../../../redux/slices/admin/productSlice";

const DealOfTheDay = () => {
  const dispatch = useDispatch();
  const deals = useSelector((state) => state.dealOfTheDay.deals);
  const loading = useSelector((state) => state.dealOfTheDay.loading);
  const products = useSelector((state) => state.product.products);
  const [title, setTitle] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentDealId, setCurrentDealId] = useState(null); // To track which deal is being updated
  const dropdownRef = useRef(null);

  useEffect(() => {
    dispatch(fetchDeals());
    dispatch(fetchProducts()); // Fetch products when the component mounts
  }, [dispatch]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setDropdownOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the status of this deal?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateDealStatus({ id, status: newStatus }));
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !selectedProduct) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields",
        icon: "error",
        confirmButtonColor: "#4CAF50",
        confirmButtonText: "OK",
      });
      return;
    }

    const data = {
      title,
      product: selectedProduct._id,
    };

    console.log("flash deal data ", data);
    try {
      if (currentDealId) {
        // If currentDealId is set, we are updating an existing deal
        await dispatch(updateDeal({ id: currentDealId, data })).unwrap();
        Swal.fire({
          title: "Success!",
          text: "Deal has been updated successfully.",
          icon: "success",
          confirmButtonColor: "#4CAF50",
          confirmButtonText: "OK",
        });
        setCurrentDealId(null); // Reset current deal id after update
      } else {
        // Otherwise, we are creating a new deal
        await dispatch(createDeal(data)).unwrap();
        Swal.fire({
          title: "Success!",
          text: "Deal has been added successfully.",
          icon: "success",
          confirmButtonColor: "#4CAF50",
          confirmButtonText: "OK",
        });
      }
      setTitle("");
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error posting deal:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to add or update the deal. Please try again.",
        icon: "error",
        confirmButtonColor: "#4CAF50",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = (dealItem) => {
    setTitle(dealItem.title);
    setSelectedProduct(dealItem.product); // Assuming dealItem.product is the full product object
    setCurrentDealId(dealItem._id); // Set current deal ID for updating
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDeal(id));
      }
    });
  };

  return (
    <div className="content container-fluid">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/deal_of_the_day.png"
            alt=""
          />
          Deal of the Day
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="text-start">
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link active"
                      href="javascript:;"
                      id="en-link"
                    >
                      English (EN)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:;"
                      id="sa-link"
                    >
                      Arabic (SA)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:;"
                      id="bd-link"
                    >
                      Bangla (BD)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:;"
                      id="in-link"
                    >
                      Hindi (IN)
                    </a>
                  </li>
                </ul>
                <div className="form-group">
                  <div className="row lang-form" id="en-form">
                    <div className="col-md-12">
                      <label htmlFor="title">Title (EN)</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        id="title"
                        placeholder="Ex: LUX"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <label htmlFor="product" className="title-color">
                        Products
                      </label>
                      <div
                        ref={dropdownRef}
                        className={`dropdown select-product-search w-100 ${
                          dropdownOpen ? "show" : ""
                        }`}
                      >
                        <button
                          type="button"
                          className="form-control text-start dropdown-toggle text-capitalize select-product-button"
                          onClick={toggleDropdown}
                        >
                          {selectedProduct
                            ? selectedProduct.name
                            : "Select product"}
                        </button>
                        <div
                          className={`dropdown-menu w-100 px-2 ${
                            dropdownOpen ? "show" : ""
                          }`}
                        >
                          <div className="search-form mb-3">
                            <button type="button" className="btn">
                              {/* <AiOutlineSearch /> */}
                            </button>
                            <input
                              type="text"
                              className="js-form-search form-control search-bar-input search-product"
                              placeholder="Search menu..."
                            />
                          </div>
                          <div className="d-flex flex-column gap-3 max-h-40vh overflow-y-auto overflow-x-hidden search-result-box">
                            {products.map((product) => (
                              <button
                                key={product._id}
                                className="dropdown-item text-start"
                                onClick={() => handleProductSelect(product)}
                              >
                                {product.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button type="submit" className="btn btn-primary mt-4">
                  Add Deal
                </button> */}
              </form>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {deals.map((dealItem, index) => (
                    <tr key={dealItem._id}>
                      <td>{index + 1}</td>
                      <td>
                        {dealItem.product ? dealItem.product.name : "N/A"}
                      </td>
                      <td>{dealItem.title}</td>
                      <td>
                        <label className="switcher">
                          <input
                            type="checkbox"
                            className="switcher_input"
                            checked={dealItem.status === "active"}
                            onChange={() =>
                              toggleStatus(dealItem._id, dealItem.status)
                            }
                          />
                          <span className="switcher_control"></span>
                        </label>
                      </td>
                      <td className="text-center flex justify-center">
                        <div className="d-flex gap-2">
                          {/* <button
                            title="Edit"
                            className="btn hover:text-white btn-sm border-green-400 hover:bg-green-400 hover:text-white"
                            onClick={() => console.log("Edit button clicked")}
                          >
                            <FaPen />
                          </button>
                          <button
                            title="Delete"
                            className="btn btn-outline-danger hover:text-white btn-sm border-red-400"
                            onClick={() => handleDelete(dealItem._id)}
                          >
                            <AiOutlineDelete />
                          </button> */}
                          {/* <ActionButton
                            onClick={() => console.log("Edit button clicked")}
                            icon={FaEdit} // Pass dynamic icon
                            className="ml-4"
                            label="edit"
                          /> */}
                          <button
                            title="Edit"
                            className="btn  btn-sm border-green-400 hover:bg-green-400 hover:text-white"
                            onClick={() => console.log("Edit button clicked")}
                          >
                            <FaPen />
                          </button>
                          <ActionButton
                            onClick={() => handleDelete(dealItem._id)}
                            icon={FaTrash} // Pass dynamic icon
                            className="ml-4"
                            label="Delete"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
