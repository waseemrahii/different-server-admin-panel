import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiEdit,
  FiTrash,
  FiEye,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";
import ExportButton from "../../../components/ActionButton/Export";
import { FaDownload } from "react-icons/fa";

const ProductTable = React.memo(
  ({
    products,
    onToggleFeatured,
    onUpdateStatus,
    onDeleteProduct,
    totalDocs,
    limit,
    totalPages,
    currentPage,
    hasPrevPage,
    hasNextPage,
    onPageChange,
  }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handlePrevPage = () => {
      if (hasPrevPage) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNextPage = () => {
      if (hasNextPage) {
        onPageChange(currentPage + 1);
      }
    };

    return (
      <>
        <div className="px-3 py-4">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="d-flex align-items-center"
              >
                <div className="input-group input-group-custom input-group-merge border-green-400">
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="searchValue"
                    className="form-control border-green-400"
                    placeholder="Search by Product Name"
                    aria-label="Search orders"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button
                    type="button"
                    className="btn bg-primary text-white hover:bg-primary-dark"
                    onClick={() =>
                      console.log(
                        "Search functionality can be implemented here"
                      )
                    }
                    style={{ color: "white" }}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-8 mt-3 mt-lg-0 d-flex flex-wrap gap-3 justify-content-lg-end">
              <Link
                to="#"
                className="btn border-primary bg-primary hover:bg-primary-dark hover:text-white"
              >
                <span className="text" style={{ color: "white" }}>
                  Limited Stocks
                </span>
              </Link>
              <Link
                to="/inhouseaddproduct"
                className="btn flex justify-center items-center gap-3 bg-primary text-white hover:bg-primary"
              >
                <FiPlus />
                <span className="text">Add new product</span>
              </Link>
              <ExportButton
                data={filteredProducts} // Pass the data to export
                filename="ProductList" // Optional filename for the exported file
                icon={FaDownload} // Icon for the button
                label="Export " // Button label
                className="bg-primary text-white hover:bg-primary-dark" // Tailwind classes for styling
                style={{ color: "white" }} // Optional inline styles
              />
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
            <thead className="thead-light thead-50 text-capitalize">
              <tr>
                <th>SL</th>
                <th>Product Name</th>
                <th className="text-center">Product Type</th>
                <th className="text-center">Unit price</th>
                <th className="text-center">Show as featured</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <tr key={product._id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <Link to="#" className="media align-items-center gap-2">
                        <img
                          src={`https://lionfish-app-tdhk5.ondigitalocean.app/${product.thumbnail}`}
                          className="avatar border"
                          alt={product.name}
                        />
                        <span className="hover-c1">{product.name}</span>
                      </Link>
                    </td>
                    <td className="text-center">{product.productType}</td>
                    <td className="text-center">PKR {product.price}</td>
                    <td className="text-center">
                      <label className="switcher mx-auto">
                        <input
                          type="checkbox"
                          className="switcher_input"
                          checked={product.isFeatured}
                          onChange={() => onToggleFeatured(product)}
                        />
                        <span className="switcher_control" />
                      </label>
                    </td>
                    <td className="text-center">
                      <div className="btn-group flex gap-3">
                        <Link
                          to={`/products/${product._id}`}
                          className="btn border-primary text-primary hover:bg-primary hover:text-white"
                          title="View"
                        >
                          <FiEye />
                        </Link>
                        <Link
                          to={`/product/${product._id}`}
                          className="btn btn-sm border-gray-400 hover:bg-gray-500 hover:text-white"
                          title="Edit"
                        >
                          <FiEdit />
                        </Link>
                        <button
                          type="button"
                          className="btn btn-sm border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
                          onClick={() => onDeleteProduct(product._id)}
                          title="Delete"
                        >
                          <FiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="pagination flex bg-green-200 p-2 justify-around">
            <button
              onClick={handlePrevPage}
              disabled={!hasPrevPage}
              className="pagination-button px-3 rounded-sm text-primary hover:bg-green-400 hover:text-white hover:border-green-400"
              style={{
                border: "1px solid lightgreen",
                color: "green !important",
              }}
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={!hasNextPage}
              className="pagination-button px-3 rounded-sm text-primary hover:bg-green-400 hover:text-white hover:border-green-400"
              style={{
                border: "1px solid lightgreen",
                color: "green !important",
              }}
            >
              Next
            </button>
          </div>
        )}
      </>
    );
  }
);

export default ProductTable;
