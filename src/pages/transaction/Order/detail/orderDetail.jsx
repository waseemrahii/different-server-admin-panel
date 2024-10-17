import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosPrint } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus, fetchOrderById } from "../../../../redux/slices/transaction/orderSlice";
import LoadingSpinner from "../../../../components/LoodingSpinner/LoadingSpinner";
import ImageApiUrl from "../../../../ImageApiUrl";

const OrderDetails = () => {
  const { id } = useParams(); // Get the order ID from URL parameters
  const dispatch = useDispatch();

  const { orders, status, error } = useSelector((state) => state.vendorOrder);
 
    console.log("order in component ------", orders)
  const [showModal, setShowModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(true);
  const fallbackImage = "/image-place-holder.png"; // Replace with the path to your fallback image
  
  useEffect(() => {
    dispatch(fetchOrderById(id)); // Fetch order details via Redux
  }, [dispatch, id]);

  useEffect(() => {
    console.log('Order details:', orders); // Check if order data is populated
  }, [orders]);
  const printInvoice = () => {
    window.print();
  };



  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleUpdateStatus = async (orderId, status) => {
    try {
      await dispatch(updateOrderStatus({ orderId, status })).unwrap();
      toast.success("Order status updated successfully!");
    } catch (error) {
      toast.error("Failed to update order status.");
    }
  };

  const togglePaymentStatus = () => {
    setPaymentStatus(!paymentStatus);
  };
  const order = orders.find((order) => order._id === id);


  // Check the loading state
  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  // Check for errors
  if (status === 'failed') {
    return <div>Error fetching orders details: {error}</div>;
  }
 // Find the specific order based on the ID
 // Find the specific order based on the ID
 const Orders = orders.find((order) => order._id === id);
 console.log("orderdtail====", Orders)
 // Check if orders exists
  if (!orders) {
    return <div>No orders details found.</div>;
  }

  const {
    customer,
    vendors,
    products,
    orderStatus,
    totalAmount,
    paymentMethod,
    shippingAddress,
    billingAddress,
  } = Orders;
  console.log("order status ====", Orders.orderStatus)
  return (
    <>
      <div className="bg-[#F9F9FB] w-full px-4 py-8">
        <div className="flex items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
            alt=""
            className="w-5 h-5"
          />
          <h1 className="text-xl font-bold">Order Details</h1>
        </div>
        <br />

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <div className="col-span-1 lg:col-span-4 bg-white rounded h-full border-gray-400 hover:shadow-md p-2">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[1rem] font-bold pb-5">
                  Order ID #{Orders._id}
                </h2>
                <p>{new Date(Orders.createdAt).toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Button variant="primary" onClick={handleShow}>
                    Show Product
                  </Button>
                </div>
                <button
                  className="borders rounded px-3 py-2  bg-primary flex items-center gap-2 text-white hover:bg-primary-dark"
                  onClick={printInvoice}
                  style={{ color: "white" }}
                >
                  <IoIosPrint className="text-white" /> Print Invoice
                </button>
              </div>
            </div>
            <div className="text-end pt-2">
              <h1>
                Status :
                <span
                  className={`bg-green-100 font-bold p-1 rounded border text-primary`}
                >
                  {console.log("orderStatus====", orderStatus)}
                  {orderStatus}
                </span>
              </h1>
              <h1 className="pt-3 text-md">
                Payment Method :
                <span className="font-bold text-md">{paymentMethod}</span>
              </h1>
              <h1 className="pt-3 text-md">
                Payment Status :
                <span className={`font-bold text-primary ms-3`}>
                  {paymentStatus ? "Paid" : "Unpaid"}
                </span>
              </h1>
              <h1 className="pt-3 text-md">
                orders verification code :
                <span className="font-bold ms-3">
                  {" "}
                  {Orders.orderId}
                </span>
              </h1>
            </div>
            <div className="container p-4">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-[#F7FAFF] text-gray-700">
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        SL
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        Item Details
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        Item Price
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        Tax
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-lg whitespace-nowrap">
                        Item Discount
                      </th>
                      <th className="px-4 py-2 text-center font-bold text-lg whitespace-nowrap">
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {(products && products.length > 0) ? (
  products.map((product, index) => (
    <tr className="hover:bg-gray-100" key={product._id}>
      <td className="px-4 py-2 text-center">{index + 1}</td>
      <td className="px-4 py-2 w-full">
        <div className="flex items-center whitespace-nowrap">
          <img
            src={
              product.thumbnail
                ? `${ImageApiUrl}/${product.thumbnail}`
                : fallbackImage
            }
            alt={product.name}
            className="w-10 h-10 object-cover rounded mr-3"
            onError={(e) => (e.target.src = fallbackImage)} // Fallback image if load fails
          />
          <div>
            <div>{product.name}</div>
            <div>Qty: {product.qty}</div>
            <div>
              Unit price: ${product?.price} (Tax:{" "}
              {product.taxAmount}%)
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-2 text-center">
        ${product?.price}
      </td>
      <td className="px-4 py-2 text-center">
        ${product.taxAmount}
      </td>
      <td className="px-4 py-2 text-center">
        ${product.discountAmount}
      </td>
      <td className="px-4 py-2 text-center">
        ${(product.price + product.taxAmount)}
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6" className="text-center py-4">
      No products available
    </td>
  </tr>
)}

                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <div className="flex justify-between border-t pt-2">
                  <span>Item price</span>
                  <span>${totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Item Discount</span>
                  <span>- $0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>${totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Coupon discount</span>
                  <span>- $0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT/TAX</span>
                  {/* <span>${order.vatTax.toFixed(2)}</span> */}
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  {/* <span>${order.deliveryFee.toFixed(2)}</span> */}
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total</span>
                  <span>${totalAmount}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-center">
                  Order & Shipping Info
                </h2>
                <div>
                  <label className="block">
                    <span className="text-gray-700 font-semibold">
                      Change Order Status
                    </span>
                    <select
                      className="form-select mt-1 bg-white borders border-gray-400 px-3 py-2 rounded block w-full"
                      value={Orders.orderStatus}
                      onChange={(e) =>
                        handleUpdateStatus(Orders._id, e.target.value)
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="delivered">Delivered</option>
                      <option value="canceled">Cancelled</option>
                      <option value="packaging">Packaging</option>
                      <option value="out_for_delivery">Out_for_delivery</option>
                      <option value="failed_to_deliver">
                        Failed_to_deliver
                      </option>
                      <option value="returned">Returned</option>
                    </select>
                  </label>
                  <label className="mt-3 flex justify-between items-center bg-white border border-gray-400 px-3 py-2 rounded">
                    <span className="text-gray-700">Payment Status</span>
                    <div className="flex items-center mt-1">
                      <span className="mr-2 text-primary">Paid</span>
                      <button
                        onClick={togglePaymentStatus}
                        className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none ${
                          paymentStatus ? "bg-blue-600" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`${
                            paymentStatus ? "translate-x-6" : "translate-x-1"
                          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
                        />
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
              <div className="space-y-2">
                <h2 className="text-md flex items-center gap-2 font-semibold">
                  <IoPersonSharp /> Customer information
                </h2>
                <div className="flex items-center space-x-4">
                  <div>
                    <img
                      src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
                      alt="Avatar"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-md font-medium">{customer?.firstName}</p>
                    <p className="text-gray-500">17 Orders</p>
                    <p className="text-gray-500">{customer?.phoneNumber}</p>
                    <p className="text-gray-500">{customer?.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-semibold flex gap-2">
                    <IoPersonSharp /> Shipping Address
                  </h2>
                  <MdEdit className="text-[2rem] p-1 border hover:bg-primary-dark hover:text-white rounded border-primary bg-primary text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-md font-medium">{customer?.firstName}</p>
                  <p className="text-gray-500">
                    Contact: {customer?.phoneNumber}
                  </p>
                  <p className="text-gray-500">
                    Country: {shippingAddress?.country}
                  </p>
                  <p className="text-gray-500">City: {shippingAddress?.city}</p>
                  <p className="text-gray-500">
                    Zip Code: {shippingAddress?.zipCode}
                  </p>
                  <p className="text-gray-500">
                    address: {shippingAddress?.address}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-md font-semibold flex gap-2">
                    <IoPersonSharp /> Billing Address
                  </h2>
                  <MdEdit className="text-[2rem] p-1 border hover:bg-primary-dark hover:text-white rounded border-primary text-white bg-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500">
                    Country: {billingAddress?.country}
                  </p>
                  <p className="text-gray-500">City: {billingAddress?.city} </p>
                  <p className="text-gray-500">
                    Zip Code: {billingAddress?.zipCode}
                  </p>
                  <p className="text-gray-500">
                    Address: {billingAddress?.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Vendor Information</h2>
              {vendors && vendors.length > 0 ? (
  vendors.map((vendor, index) => (
    <div key={index} className="mb-4 p-4 bg-white rounded shadow-md">
      <h3 className="text-lg font-semibold">
        Name: {vendor?.firstName || "N/A"}
      </h3>
      <img
        src={vendor?.vendorImage ? `${ImageApiUrl}/${vendor.vendorImage}` : fallbackImage}
        alt={vendor?.name || "N/A"}
        className="w-16 h-16 object-cover rounded mb-2"
      />
      <div>
        <p className="text-lg font-bold">Shop: {vendor?.shopName || "N/A"}</p>
        <p className="text-gray-500 pt-3">Vendor Orders: 9 Orders Served</p>
        <p className="text-gray-500">Vendor No: {vendor?.phoneNumber || "N/A"}</p>
        <p className="text-gray-500 flex justify-center gap-2">
          <FaMapMarkerAlt className="text-xl" />
          {vendor?.address || "N/A"}
        </p>
      </div>
    </div>
  ))
) : (
  <p>No vendors available</p>
)}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
