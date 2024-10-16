import React, { useState, useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import FilterForm from "./FilterForm";
import {
  deleteProduct,
  fetchProducts,
  toggleFeatured,
  updateProductStatus,
} from "../../../../../redux/slices/admin/productSlice";
import {
  fetchBrands,
  fetchCategories,
} from "../../../../../redux/slices/admin/categorybrandSlice";
import LoadingSpinner from "../../../../../components/LoodingSpinner/LoadingSpinner";

// Lazy load the ProductTable component
const ProductTable = lazy(() => import("./productTable"));

const InHouseProductList = ({
  initialTitle = "In House Product List",
  initialFilters = {},
}) => {
  const dispatch = useDispatch();

  const { loading, error, status, cached, results, products } = useSelector(
    (state) => state.product
  );

  const { categories, brands } = useSelector((state) => state.category);
  const [filters, setFilters] = useState({
    brand: initialFilters.brand || "",
    category: initialFilters.category || "",
    searchValue: initialFilters.searchValue || "",
    userType: initialFilters.userType || "", // Default userType to 'vendor'
    status: initialFilters.status || "", // Default status
    vendorNew4Days: initialFilters.vendorNew4Days || false,
    minPrice: initialFilters.minPrice || "",
    maxPrice: initialFilters.maxPrice || "",
  });

  useEffect(() => {
    const cleanFilters = {
      ...filters,
      brand: filters.brand || undefined,
      category: filters.category || undefined,
      searchValue: filters.searchValue || undefined,
      userType: filters.userType || undefined,
      status: filters.status || undefined,
      vendorNew4Days: filters.vendorNew4Days || undefined,
      minPrice: filters.minPrice || undefined,
      maxPrice: filters.maxPrice || undefined,
    };
    console.log("Fetching products with cleaned filters:", cleanFilters);
    dispatch(fetchProducts(cleanFilters));
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [filters, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleToggleFeatured = async (product) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to ${
        product.isFeatured ? "remove" : "add"
      } this product as featured?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });
    if (result.isConfirmed) {
      try {
        await dispatch(
          toggleFeatured({
            productId: product._id,
            isFeatured: !product.isFeatured,
          })
        ).unwrap();
        Swal.fire("Success", "Product status updated successfully!", "success");
      } catch (error) {
        Swal.fire("Error", error.message, "error");
      }
    }
  };

  const handleUpdateStatus = async (product) => {
    const result = await Swal.fire({
      title: "Update Product Status",
      input: "select",
      inputOptions: {
        pending: "Pending",
        approved: "Approved",
        rejected: "Rejected",
      },
      inputPlaceholder: "Select status",
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      const selectedStatus = result.value; // 'pending', 'approved', or 'rejected'

      try {
        await dispatch(
          updateProductStatus({
            productId: product._id,
            status: selectedStatus,
          })
        ).unwrap();
        Swal.fire(
          "Success",
          `Product status updated to ${selectedStatus}!`,
          "success"
        );
      } catch (error) {
        Swal.fire("Error", error.message, "error");
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No",
    });

    if (result.isConfirmed) {
      try {
        await dispatch(deleteProduct(productId)).unwrap();
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error", error.message, "error");
      }
    }
  };

  const handleResetFilters = () => {
    setFilters({
      brand: "",
      category: "",
      searchValue: "",
      userType: "",
      status: "",
      vendorNew4Days: false,
      minPrice: "",
      maxPrice: "",
    });
  };

  const handlePageChange = (page) => {
    console.log("Changing page to:", page);
    dispatch(fetchProducts({ ...filters, page }));
  };

  return (
    <>
      <div className="content container-fluid">
        <div className="mb-3">
          <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
            <img src="/inhouse-product-list.png" alt="In House Product List" />
            {initialTitle}
            <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
              {results}
            </span>
          </h2>
        </div>

        {categories.length > 0 && brands.length > 0 && (
          <FilterForm
            filters={filters}
            onInputChange={handleInputChange}
            onReset={handleResetFilters}
            categories={categories}
            brands={brands}
          />
        )}

        {loading && <LoadingSpinner />}

        {/* Lazy load ProductTable component */}
        <div className="product-table-container">
          {error ? (
            <div>
              {typeof error === "object" && error !== null
                ? JSON.stringify(error)
                : error}
            </div>
          ) : (
            <Suspense fallback={<LoadingSpinner />}>
              {console.log("product data==========", products)}
              <ProductTable
                products={products}
                onToggleFeatured={handleToggleFeatured}
                onUpdateStatus={handleUpdateStatus}
                onDeleteProduct={handleDeleteProduct}
                results={results}
                onPageChange={handlePageChange}
              />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default InHouseProductList;
