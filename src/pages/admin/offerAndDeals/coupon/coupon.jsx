import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import FormSelect from "../../../../components/FormInput/FormSelect";
import FormInput from "../../../../components/FormInput/FormInput";
import ExportButton from "../../../../components/ActionButton/Export";
import { toast } from "react-toastify";
import {
  createCoupon,
  fetchCoupons,
} from "../../../../redux/slices/admin/couponSlice";
import { fetchVendors } from "../../../../redux/slices/seller/vendorSlice";
import { fetchCustomers } from "../../../../redux/slices/user/customerSlice";
import LoadingSpinner from "../../../../components/LoodingSpinner/LoadingSpinner";
const CouponManagement = () => {
  const dispatch = useDispatch();
  const { coupons, loading, error } = useSelector((state) => state.coupons);
  const vendors = useSelector((state) => state.vendor?.vendors || []);
  const customers = useSelector((state) => state.customers?.customers || []);

  const [form, setForm] = useState({
    title: "",
    code: "",
    type: "Discount on Purchase",
    userLimit: { limit: "", used: 0 },
    couponBearer: "vendor",
    discountType: "percentage",
    discountAmount: "",
    minPurchase: "",
    maxDiscount: "",
    startDate: "",
    expiredDate: "",
    status: "active",
    vendors: [],
    customers: [],
  });

  useEffect(() => {
    dispatch(fetchCoupons());
    dispatch(fetchVendors());
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle nested userLimit separately
    if (name === "userLimit") {
      setForm((prevForm) => ({
        ...prevForm,
        userLimit: { ...prevForm.userLimit, limit: value },
      }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createCoupon(form));
    console
      .log("form data coupon to be submit ", form)
      .then(() => {
        Swal.fire("Success", "Coupon Created Successfully", "success");

        // Reset form after success
        setForm({
          title: "",
          code: "",
          type: "Discount on Purchase",
          userLimit: { limit: "", used: 0 },
          couponBearer: "vendor",
          discountType: "percentage",
          discountAmount: "",
          minPurchase: "",
          maxDiscount: "",
          startDate: "",
          expiredDate: "",
          status: "active",
          vendors: [],
          customers: [],
        });
      })
      .catch((error) => {
        // Show error message with toast notification
        toast.error(
          error.message || "Failed to create coupon. Please try again."
        );
        console.error("Error creating coupon:", error);
      });
  };

  return (
    <div className="p-10">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/coupon_setup.png"
            alt=""
          />
          Coupon setup
        </h2>
      </div>

      <div className="row">
        <div className="col-lg-12 mb-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <FormSelect
                      label="Coupon Type"
                      name="type"
                      value={form.type}
                      onChange={handleInputChange}
                      options={[
                        {
                          value: "Discount on Purchase",
                          label: "Discount on Purchase",
                        },
                        { value: "Free Delivery", label: "Free Delivery" },
                        { value: "Buy One Get One", label: "Buy One Get One" },
                        { value: "Others", label: "Others" },
                      ]}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormInput
                      label="Coupon Title"
                      name="title"
                      type="text"
                      placeholder="Title"
                      value={form.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormInput
                      label="Coupon Code"
                      name="code"
                      type="text"
                      placeholder="Coupon Code"
                      value={form.code}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormInput
                      label="User Limit"
                      name="userLimit"
                      type="number"
                      placeholder="Limit"
                      value={form.userLimit.limit}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormSelect
                      label="Discount Bearer"
                      name="couponBearer"
                      value={form.couponBearer}
                      onChange={handleInputChange}
                      options={[
                        { value: "vendor", label: "Vendor" },
                        { value: "admin", label: "Admin" },
                      ]}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormSelect
                      label="Discount Type"
                      name="discountType"
                      value={form.discountType}
                      onChange={handleInputChange}
                      options={[
                        { value: "percentage", label: "Percentage" },
                        { value: "amount", label: "Amount" },
                      ]}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormInput
                      label="Discount Amount"
                      name="discountAmount"
                      type="number"
                      placeholder={
                        form.discountType === "percentage"
                          ? "Enter discount percentage"
                          : "Enter discount amount"
                      }
                      value={form.discountAmount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormInput
                      label="Minimum Purchase"
                      name="minPurchase"
                      type="number"
                      placeholder="Min Purchase"
                      value={form.minPurchase}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormInput
                      label="Maximum Discount"
                      name="maxDiscount"
                      type="number"
                      placeholder="Max Discount"
                      value={form.maxDiscount}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-md-4">
                    <FormInput
                      label="Start Date"
                      name="startDate"
                      type="date"
                      value={form.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <FormInput
                      label="Expiration Date"
                      name="expiredDate"
                      type="date"
                      value={form.expiredDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* <div className="col-md-4">
                    <FormSelect
                      label="Status"
                      name="status"
                      value={form.status}
                      onChange={handleInputChange}
                      options={[
                        { value: "active", label: "Active" },
                        { value: "inactive", label: "Inactive" },
                      ]}
                    />
                  </div> */}

                  <div className="col-md-4">
                    <FormSelect
                      label="Select Vendors"
                      name="vendors"
                      value={form.vendors}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          vendors: [...e.target.selectedOptions].map(
                            (option) => option.value
                          ),
                        })
                      }
                      options={vendors.map((vendor) => ({
                        value: vendor._id,
                        label: vendor.shopName,
                      }))}
                      isMulti
                    />
                  </div>

                  <div className="col-md-4">
                    <FormSelect
                      label="Select Customers"
                      name="customers"
                      value={form.customers}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          customers: [...e.target.selectedOptions].map(
                            (option) => option.value
                          ),
                        })
                      }
                      options={customers.map((customer) => ({
                        value: customer._id,
                        label: `${customer.firstName} ${customer.lastName}`,
                      }))}
                      isMulti
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    type="submit"
                    className="btn bg-primary hover:bg-primary-dark text-white"
                    style={{ color: "white" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="px-3 py-4">
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <h5 className="mb-0 text-capitalize d-flex gap-2 mr-auto">
                    Coupon list
                    <ExportButton title="Export" />
                  </h5>
                  {/* <Link to="/admin/coupon-setup" className="btn btn-outline-primary">Add New Coupon</Link> */}
                </div>
              </div>
              <div className="card-body">
                {loading ? (
                  <div className="text-center">
                    <LoadingSpinner />
                  </div>
                ) : (
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Code</th>
                        <th>Type</th>
                        <th>Discount Amount</th>
                        <th>Start Date</th>
                        <th>Expiration Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coupons.map((coupon, index) => (
                        <tr key={coupon._id}>
                          <td>{index + 1}</td>
                          <td>{coupon.title}</td>
                          <td>{coupon.code}</td>
                          <td>{coupon.type}</td>
                          <td>{coupon.discountAmount}</td>
                          <td>
                            {new Date(coupon.startDate).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(coupon.expiredDate).toLocaleDateString()}
                          </td>
                          <td>{coupon.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {error && <div className="text-danger">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponManagement;
