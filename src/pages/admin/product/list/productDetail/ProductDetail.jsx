import React, { useState, useEffect } from "react";
import { FaGlobe, FaStar, FaTrash } from "react-icons/fa";
import { AiOutlineFile, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom"; 
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageApiUrl from "../../../../../ImageApiUrl";
import ActionButton from "../../../../../components/ActionButton/Action";
import ApiConfig from "../../../../../config/apiConfig"; // Ensure you have the correct path for ApiConfig

const ProductDetail = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${ApiConfig.seller}/products/${productId}`); // Updated URL
        if (response.status === 200) {
          setProductData(response.data.doc);
        } else {
          setErrorMessage("Failed to fetch product data");
          console.error("Failed to fetch product data");
        }
      } catch (error) {
        setErrorMessage("An error occurred while fetching product data.");
        console.error("An error occurred while fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleStatusChange = async (reviewId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    try {
      await axios.put(
        `${ApiConfig.seller}/products/${productId}/reviews/${reviewId}/status`, // Updated URL
        { status: newStatus }
      );
      setProductData((prevData) => ({
        ...prevData,
        reviews: prevData.reviews.map((review) =>
          review._id === reviewId ? { ...review, status: newStatus } : review
        ),
      }));
      if (newStatus === "Active") {
        toast.success("Review activated!", { autoClose: 3000 });
      } else {
        toast.error("Review deactivated!", { autoClose: 3000 });
      }
    } catch (error) {
      console.error("Error updating review status:", error);
      toast.error("Failed to update review status", { autoClose: 3000 });
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`${ApiConfig.seller}/products/${productId}/reviews/${reviewId}`); // Updated URL
      setProductData((prevData) => ({
        ...prevData,
        reviews: prevData.reviews.filter((review) => review._id !== reviewId),
      }));
      toast.success("Review deleted successfully", { autoClose: 3000 });
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Failed to delete review", { autoClose: 3000 });
    }
  };

  if (errorMessage) {
    return <div className="error-message">{errorMessage}</div>; // Display error message if any
  }

  if (!productData) {
    return <div>Loading...</div>;
  }

  // Ensure default values are set for properties
  const thumbnailUrl = productData.thumbnail
    ? `${ImageApiUrl}/${productData.thumbnail.replace(/\\/g, "/")}`
    : "/default-thumbnail.png";

  const {
    thumbnail = "/default-thumbnail.png",
    images = [],
    name = "No Name",
    description = "No Description",
    reviews = [],
    brand = { name: "No Brand" },
    category = { name: "No Category" },
    totalSold = "N/A",
    totalSoldAmount = "N/A",
    productType = "No Type",
    sku = "No SKU",
    price = "0",
    taxAmount = "0",
    discount = "0",
    videoLink = "",
  } = productData;

  return (
    <>
      <ToastContainer />

      <div className="content container-fluid text-start">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-10 mb-3">
          <div>
            <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
              <img src="/inhouse-product-list.png" alt="Product Details" />
              Product Details
            </h2>
          </div>
        </div>
        <div className="card card-top-bg-element">
          <div className="card-body">
            <div className="media flex-nowrap flex-sm-row gap-8 flex-grow-1 mb-5 align-items-center align-items-md-start">
              <div className="d-flex flex-column align-items-center __min-w-165px">
                <a
                  className="aspect-1 float-left overflow-hidden"
                  href={thumbnailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="avatar avatar-170 rounded-0"
                    style={{ width: "10rem", height: "10rem" }}
                    src={thumbnailUrl}
                    alt="Product"
                  />
                </a>
                <div className="d-flex gap-1 flex-wrap justify-content-center">
                  {/* <a
                  href={thumbnailUrl}
                  className="btn btn-outline--primary mr-1 mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe /> View Live
                </a> */}
                </div>
              </div>
              <div className="d-block flex-grow-1 w-max-md-100">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <ul className="nav nav-tabs w-fit-content mb-2">
                    <li className="nav-item text-capitalize">
                      <a className="nav-link active" href="#">
                        English(EN)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap align-items-center flex-sm-nowrap justify-content-between gap-3 min-h-50">
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    {productData.images.map((imgUrl, index) => {
                      const fullImgUrl = `${ImageApiUrl}/${imgUrl.replace(
                        /\\/g,
                        "/"
                      )}`;
                      return (
                        <div
                          key={index}
                          className="aspect-1 float-left overflow-hidden d-block border rounded-lg position-relative"
                        >
                          <a
                            href={fullImgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              width="50"
                              className="img-fit max-50"
                              alt={`Additional ${index}`}
                              src={fullImgUrl}
                            />
                          </a>
                        </div>
                      );
                    })}
                  </div>

                  {
                    //  console.log("product=============",productData)
                  }
                  <span className="text-dark">
                    {productData.reviews?.length} Reviews
                  </span>
                </div>
                <div className="d-block mt-2">
                  <div className="lang-form" id="en-form">
                    <div className="d-flex">
                      <h2 className="mb-2 pb-1 text-gulf-blue">
                        {productData.name}
                      </h2>
                    </div>
                    <div>
                      <label className="text-gulf-blue font-weight-bold">
                        Description:
                      </label>
                      {/* <div className="rich-editor-html-content">{productData.description}</div> */}
                      <div
                        className="rich-editor-html-content"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex gap-10 flex-wrap mt-6 ">
              <div className="border p-3 mobile-w-100 w-170">
                <div className="d-flex flex-column mb-1">
                  <h6 className="font-weight-normal text-capitalize">
                    Total Sold:
                  </h6>
                  <h3 className="text-primary fs-18">
                    {productData.totalSold || "N/A"}
                  </h3>
                </div>
                <div className="d-flex flex-column">
                  <h6 className="font-weight-normal text-capitalize">
                    Total Sold Amount:
                  </h6>
                  <h3 className="text-primary fs-18">
                    {productData.totalSoldAmount || "N/A"}
                  </h3>
                </div>
              </div>
              <div className="row gy-3 flex-grow-1">
                <div className="col-sm-6 col-xl-4">
                  <h4 className="mb-3 text-capitalize font-bold">
                    General Information
                  </h4>
                  <div className="pair-list">
                    <div>
                      <span className="key text-nowrap">Brand</span>:
                      <span className="value">
                        {brand && brand.name ? brand.name : "No Brand"}
                      </span>
                    </div>
                    <div>
                      <span className="key text-nowrap">Category</span>:
                      <span className="value">
                        {category && category.name
                          ? category.name
                          : "No Category"}
                      </span>
                    </div>
                    <div>
                      <span className="key text-nowrap">Product Type</span>:
                      <span className="value">{productType || "No Type"}</span>
                    </div>
                    <div>
                      <span className="key text-nowrap">SKU</span>:
                      <span className="value">{sku || "No SKU"}</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                  <h4 className="mb-3 text-capitalize font-bold">
                    Price Information
                  </h4>
                  <div className="pair-list">
                    <div>
                      <span className="key text-nowrap text-capitalize">
                        Unit Price
                      </span>
                      : <span className="value">${productData.price}</span>
                    </div>
                    <div>
                      <span className="key text-nowrap">Tax</span>:{" "}
                      <span className="value">{productData.taxAmount}%</span>
                    </div>
                    <div>
                      <span className="key text-nowrap">Discount</span>:{" "}
                      <span className="value">{productData.discount}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-2 mt-3">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header bg--primary--light">
                <h5 className="card-title text-capitalize">
                  Product SEO &amp; Meta Data
                </h5>
              </div>
              <div className="card-body">
                <div>
                  <h6 className="mb-3 text-capitalize">{productData.name}</h6>
                </div>
                {/* <p className="text-capitalize">
              <div
                    className="rich-editor-html-content"
                    dangerouslySetInnerHTML={{ __html: description }}
                />

              </p> */}
                <div className="d-flex flex-wrap gap-2">
                  <a
                    className="text-dark border rounded p-2 d-flex align-items-center justify-content-center gap-1"
                    href={thumbnailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineFile /> SEO Image
                  </a>
                  {productData.videoLink && (
                    <a
                      className="text-dark border rounded p-2 d-flex align-items-center justify-content-center gap-1"
                      href={productData.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineShoppingCart /> SEO Video
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="table-responsive col-md-12">
            <div className="row g-2 mt-3">
              <div className="table-responsive col-md-12">
                <table className="table text-nowrap table-borderless">
                  <thead className="thead-light">
                    <tr>
                      <th className="text-capitalize">Reviewer Name</th>
                      <th className="text-capitalize">Rating</th>
                      <th className="text-capitalize">Review</th>
                      <th className="text-capitalize">Review Date</th>
                      <th className="text-capitalize text-center">Status</th>
                      <th className="text-capitalize">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="p-8">
                    {productData.reviews?.length ? (
                      productData.reviews.map((review, index) => (
                        <tr key={index}>
                          <td>{review.customer?.firstName}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              {Array.from({ length: 5 }).map((_, starIndex) => (
                                <FaStar
                                  key={starIndex}
                                  className={`fs-16 ${
                                    starIndex < review.rating
                                      ? "text-warning"
                                      : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                          </td>
                          <td>{review.reviewText}</td>
                          <td>
                            {new Date(review.createdAt).toLocaleDateString()}
                          </td>
                          <td className="text-center flex items-center">
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input"
                                checked={review.status === "Active"}
                                onChange={() =>
                                  handleStatusChange(review._id, review.status)
                                }
                              />
                              <span className="switcher_control" />
                            </label>
                          </td>
                          <td>
                            <ActionButton
                              onClick={() => handleDeleteReview(review._id)}
                              icon={FaTrash} // Pass dynamic icon
                              className="ml-4"
                              label="Delete"
                            />
                            {/* <button
                              className="btn  btn-sm border-red-400 hover:bg-red-400 hover:text-white "
                              onClick={() => handleDeleteReview(review._id)}
                            >
                              <FiTrash />
                            </button> */}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No reviews available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
