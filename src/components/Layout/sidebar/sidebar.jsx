// // end
import React, { useState } from "react";
import { IoHome, IoPersonOutline } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";

import {
  MdGroups2,
  MdNotificationsActive,
  MdOutlineFolderZip,
  MdShoppingBag,
} from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { FaAngleDown, FaAngleUp, FaKey } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi"; // Importing icons
import { FaStar } from "react-icons/fa";
import { AiFillDatabase, AiFillPicture, AiOutlineHdd } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineSpotify } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import {
  BsCardImage,
  BsFillPersonFill,
  BsReverseLayoutSidebarInsetReverse,
} from "react-icons/bs";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { PiNotification } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import { CiInboxOut } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GoReport } from "react-icons/go";
import {
  IoIosNotifications,
  IoMdPerson,
  IoMdStarOutline,
} from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = ({ setComponent }) => {
  const [showOrderList, setShowOrderList] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [showInHouseProductList, setShowInHouseProductList] = useState(false);
  const [showVenderProductList, setShowVenderProductList] = useState(false);
  const [showRefoundList, setShowRefoundList] = useState(false);
  const [showBrandList, setShowBrandList] = useState(false);
  const [showOfferList, setShowOfferList] = useState(false);
  const [showCustomerList, setShowCustomerList] = useState(false);
  const [showHealthList, setShowHealthList] = useState(false);
  const [showEmployeeList, setShowEmployeethList] = useState(false);
  const [showSystemList, setShowSystemList] = useState(false);
  const [showPageList, setShowPageList] = useState(false);
  const [showBusinessList, setShowBusinessList] = useState(false);
  const [showNotiList, setShowNotiList] = useState(false);

  // for bussness set showing dropdown

  const [showBussnessList, SetShowBussnessList] = useState(false); // write this for each drop down list like for setting order category extra
  // now copy the the above state

  const toggleOrderList = () => {
    setShowOrderList(!showOrderList);
    setShowProductList(false); // Close Product list when Orders list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Orders list is toggled
    setShowRefoundList(false); // Close Refound List when Orders list is toggled
  };

  const toggleProductList = () => {
    setShowProductList(!showProductList);
    setShowOrderList(false); // Close Orders list when Product list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Product list is toggled
    setShowRefoundList(false); // Close Refound List when Product list is toggled
  };

  const toggleInHouseProductList = () => {
    setShowInHouseProductList(!showInHouseProductList);
    setShowOrderList(false); // Close Orders list when In House Product list is toggled
    setShowProductList(false); // Close Product list when In House Product list is toggled
    setShowRefoundList(false); // Close Refound List when In House Product list is toggled
  };

  const toggleVenderProductList = () => {
    setShowVenderProductList(!showVenderProductList);
    setShowInHouseProductList(false);
    setShowOrderList(false); // Close Orders list when In House Product list is toggled
    setShowProductList(false); // Close Product list when In House Product list is toggled
    setShowRefoundList(false); // Close Refound List when In House Product list is toggled
  };

  const toggleRefoundList = () => {
    setShowRefoundList(!showRefoundList);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleBrandList = () => {
    setShowBrandList(!showBrandList);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleOfferList = () => {
    setShowOfferList(!showOfferList);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleCustomerList = () => {
    setShowCustomerList(!showCustomerList);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleHealthList = () => {
    setShowHealthList(!showHealthList);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const toggleEmployeeList = () => {
    setShowEmployeethList(!showEmployeeList);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleSystemList = () => {
    setShowSystemList(!showSystemList);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleBusinessList = () => {
    setShowBusinessList(!showBusinessList);
    setShowPageList(false);
    setShowSystemList(false);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };
  const togglePageList = () => {
    setShowPageList(!showPageList);
    setShowSystemList(false);
    // setShowEmployeeList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false); // Close Orders list when Refound list is toggled
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  const toggleNotiList = () => {
    setShowNotiList(!showNotiList);

    setShowSystemList(false);
    setShowHealthList(false);
    setShowCustomerList(false);
    setShowOfferList(false);
    setShowBrandList(false);
    setShowRefoundList(false);
    setShowOrderList(false);
    setShowProductList(false); // Close Product list when Refound list is toggled
    setShowInHouseProductList(false); // Close In House Product List when Refound list is toggled
  };

  //now copy the togglefunciton
  return (
    // <aside className="bg-[#077422] text-white  min-h-screen p-4 flex flex-col fixed left-0  overflow-y-auto">

    <aside className="bg-primary text-white w-64 min-h-screen top-16  p-4 flex flex-col fixed left-0  h-full overflow-y-scroll">
      <div className="pb-3 lg:pt-4  ">
        <div className="flex items-center">
          <input
            type="text"
            className="ml-2 p-2 bg-primary border text-white border-white rounded-md focus:outline-none w-full placeholder-white"
            placeholder="Search menu..."
          />{" "}
        </div>
      </div>

      {/* Dashboard and POS buttons */}
      <Link
        to="/dashboard"
        className=" w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970]  hover:text-white mb-3 text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="inline-block mr-2" /> Dashboard
      </Link>
      {/* 
<Link
  to="/pos"
  className="block w-full text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
  style={{ color: 'white' }}
>
  <MdShoppingBag className="inline-block mr-2" /> Pos
</Link> */}

      {/* order management */}
      <div className="mt-4">
        <small className="block text-white uppercase font-serif">
          Order Management
        </small>
        <button
          className="w-full text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative "
          onClick={togglePageList}
          style={{ color: "white" }}
        >
          <div className="flex gap-1 justify-between align-items-center">
            <IoCartSharp /> Orders
          </div>
          <span className="float-right">
            {showPageList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showPageList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/allorders"
                className="block w-full text-left flex gap-2 p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                <span className="text-green-700">•</span> ALL
              </Link>
            </li>
            <li>
              <Link
                to="/pendingorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Pending
              </Link>
            </li>
            <li>
              <Link
                to="/confirmedorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Confirmed
              </Link>
            </li>
            <li>
              <Link
                to="/packagingorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Packaging
              </Link>
            </li>
            <li>
              <Link
                to="/outfordelivery"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Out for delivery
              </Link>
            </li>
            <li>
              <Link
                to="/deliveredorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Delivered
              </Link>
            </li>
            <li>
              <Link
                to="/returnedorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Returned
              </Link>
            </li>
            <li>
              <Link
                to="/failedorder"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Failed to Deliver
              </Link>
            </li>
            <li>
              <Link
                to="/cancel"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Canceled
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Refund request */}
      <div className="mt-4">
        {/* <small className="block text-gray-400 uppercase font-serif">
    Order Management
  </small> */}
        <button
          className="w-full text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative text-blue-700"
          onClick={toggleRefoundList}
          style={{ color: "white" }}
        >
          <div className="flex gap-1 justify-between align-items-center">
            <AiFillDatabase /> Refund Requests
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showRefoundList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/pendingrefundrequests"
                className="block w-full text-left flex gap-2 p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                <span className="text-green-700">•</span> Pending
              </Link>
            </li>
            <li>
              <Link
                to="/approverefundrequests"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Approved
              </Link>
            </li>
            <li>
              <Link
                to="/refunded"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Refunded
              </Link>
            </li>
            <li>
              <Link
                to="/rejected"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Rejected
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className="mt-4">
        {/* <small className="block text-gray-400 uppercase font-serif">
    Order Management
  </small> */}
        <button
          className="w-full text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between relative text-blue-700"
          onClick={toggleHealthList}
          style={{ color: "white" }}
        >
          <div className="flex gap-1 justify-between align-items-center">
            <AiFillDatabase /> Vender List
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showHealthList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/venderlist"
                className="block w-full text-left flex gap-2 p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                <span className="text-green-700">•</span> Vender List
              </Link>
            </li>
            <li>
              <Link
                to="/addvenderform"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Add Vender
              </Link>
            </li>
            <li>
              <Link
                to="/addvenderwallet"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Vender Wallet
              </Link>
            </li>
            <li>
              <Link
                to="/addvenderwalletmethod"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Vender Wallet Method
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Category Management Section */}
      <div className="mt-4">
        <small className="block text-white uppercase">product management</small>
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] text-white  flex justify-between hover:text-white mb-2 relative"
          onClick={toggleProductList}
          style={{ color: "white" }}
        >
          <div className="flex gap-1 justify-between align-items-center">
            <TbCategory2 /> Category Setup
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showProductList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/categories"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Category
              </Link>
            </li>
            <li>
              <Link
                to="/subcategories"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Sub Category
              </Link>
            </li>
            <li>
              <Link
                to="/subsubcategories"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • Sub Sub_Category
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* product */}

      {/* Brand Management Section */}
      {/* order management */}
      <div className="mt-4">
        {/* <small className="block text-gray-400 uppercase font-serif ">
          Order Management
        </small> */}
        <button
          className=" w-full text-left  p-2   rounded hover:bg-[#52c970] text-white hover:text-white  flex justify-between  relative"
          onClick={toggleNotiList}
          style={{ color: "white" }}
        >
          <div
            className="flex gap-1 justify-between align-items-center"
            style={{ color: "white" }}
          >
            <IoMdStarOutline /> Brand
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showNotiList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/addnewbrand"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                <span className="text-white">•</span>
                Add New
              </Link>
            </li>
            <li>
              <Link
                to="/brandlist"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500 text-blue-700"
                style={{ color: "white" }}
              >
                • List
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* product attribute setup */}
      <Link
        to="/productattributesetup"
        className="block w-full text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white "
        // onClick={() => setComponent("productattributesetup")}
        style={{ color: "white" }}
      >
        <AiOutlineHdd className="inline-block mr-2" /> Product Attribute Setup
      </Link>

      {/* In-house products */}

      <div className="mt-2">
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between text-white hover:text-[#7EC283]  relative"
          onClick={toggleInHouseProductList}
          style={{ color: "white" }}
        >
          {/* Categories */}
          {/* <span className="float-right"> */}
          {/* <i className={`tio-chevron-${showProductList ? 'up' : 'down'}`}></i> */}
          {/* <FiChevronDown /> */}
          {/* </span> */}

          <div className="flex gap-1 justify-between align-items-center">
            <FaWarehouse /> In-house Products
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showInHouseProductList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/inhouseproductlist"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Product List
              </Link>
            </li>
            <li>
              <Link
                to="/inhouseaddproduct"
                className="block  w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Add New Product
              </Link>
            </li>

            <li>
              <Link
                to="bulkimport"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Bulk import
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* vendor products */}
      <div className="mt-4">
        <button
          className="  w-full text-left  p-2   rounded hover:bg-[#52c970] text-white hover:text-white  flex justify-between mb-2 relative"
          onClick={toggleVenderProductList}
          style={{ color: "white", justifyContent: "space-between" }}
        >
          <div className="flex gap-1 justify-between align-items-center">
            <AiOutlineSpotify /> Vendor products
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showVenderProductList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/vendernew"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • New Products Recquests
              </Link>
            </li>
            <li>
              <Link
                to="/venderpendingproduct"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • New Product request
              </Link>
            </li>
            <li>
              <Link
                to="/venderapprove"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Approved Products
              </Link>
            </li>

            <li>
              <Link
                to="venderdenied"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Denied Produts
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* product gallery */}
      <Link
        to="/productgallery"
        className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
        style={{ color: "white" }}
      >
        <GrGallery className="inline-block mr-2" /> Product Gallery
      </Link>
      {/* promotion setup*/}
      <div className="mt-4">
        <small className="block text-white uppercase">
          promotion management
        </small>
        <Link
          to="/bannersetup"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <AiFillPicture className="inline-block mr-2" /> Banner setup
        </Link>
        <button
          className="block w-full  flex gap-2 items-center text-left p-2  rounded hover:bg-[#52c970]   text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleOfferList}
        >
          <div className="flex gap-1 justify-between align-items-center">
            <BsFillPersonFill />
            Offer & Deals
          </div>
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showOfferList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/coupon"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Coupon
              </Link>
            </li>
            <li>
              <Link
                to="/flashdeals"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Flash Dealls
              </Link>
            </li>
            <li>
              <Link
                to="/dealofday"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Deal Of The Day
              </Link>
            </li>
            <li>
              <Link
                to="/featuredeal"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Featured Deal
              </Link>
            </li>
          </ul>
        )}

        <button
          className="block w-full  flex gap-2 items-center text-left p-2  rounded hover:bg-[#52c970]   text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleNotiList}
        >
          <IoIosNotifications /> Notifications
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showNotiList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="sendnotification"
                className="block w-full text-left p-1 flex gap-2 items-center pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                <IoIosNotifications />
                Send Notifications
              </Link>
            </li>
            <li>
              <Link
                to="pushnotification"
                className="block w-full text-left p-1  text-[.8rem] pl-4 flex gap-2 items-center rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                <MdNotificationsActive /> Push Notifications Setup
              </Link>
            </li>
          </ul>
        )}

        <Link
          to="announcement"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <TfiAnnouncement className="inline-block mr-2" /> Announcement
        </Link>
      </div>

      {/* Help and Support */}
      <div className="mt-4">
        <small className="block text-white uppercase">HELP AND SUPPORT</small>
        <Link
          to="indexmessage"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <CiInboxOut className="inline-block mr-2" /> Inbox
        </Link>

        <Link
          to="/messagesupport"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <FaMessage className="inline-block mr-2" /> Messages
        </Link>

        <Link
          to="ticketsupport"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <FaHeadset className="inline-block mr-2" /> Support ticket
        </Link>
      </div>

      {/* Sales management Section */}

      <div className="mt-4">
        <small className="block text-white uppercase">REPORT & ANALYSIS</small>
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] flex items-ceter gap-2 text-white hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleOrderList}
        >
          <MdOutlineFolderZip />
          Sales& Transaction
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
        {showOrderList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="earningreport"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Earning Report
              </Link>
            </li>
            <li>
              <Link
                to="/inhousesales"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Inhouse Sales
              </Link>
            </li>
            <li>
              <Link
                to="/vendersale"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Vender Sales
              </Link>
            </li>
            <li>
              <Link
                to="/transactionrepo"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Transaction Report
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* Dashboard and POS buttons */}
      <Link
        to="/productreport"
        className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="inline-block mr-2" /> Product Report
      </Link>

      {/* Dashboard and POS buttons */}
      <Link
        to="/orderreport"
        className="block w-full flex align-items-center text-left p-2 rounded hover:bg-[#52c970] text-white hover:text-white mb-3 text-blue-700"
        style={{ color: "white" }}
      >
        <IoHome className="inline-block mr-2" /> Order Report
      </Link>

      {/* ********************** */}
      {/* user management Section */}

      <div className="mt-4">
        <small className="block text-white uppercase">User management</small>
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] flex items-ceter gap-2 text-white hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleCustomerList}
        >
          <MdOutlineFolderZip />
          Customers
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
        {showCustomerList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="customerlist"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Customers List
              </Link>
            </li>
            <li>
              <Link
                to="/customerreviews"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Customers Review
              </Link>
            </li>
            <li>
              <Link
                to="/walletmanagement"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Wallet
              </Link>
            </li>
            <li>
              <Link
                to="/customerbonussetup"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Wallet Bonus Setup
              </Link>
            </li>
            <li>
              <Link
                to="/customerloyaltyreport"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Loyalty Points
              </Link>
            </li>
          </ul>
        )}
        {/*  */}
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] flex gap-2 items-center text-white hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={togglePageList}
        >
          <MdGroups2 />
          Delivery Man
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
        {showPageList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/addnewdelivery"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Add New
              </Link>
            </li>
            <li>
              <Link
                to="/deliverymanlist"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
                onClick={() => setComponent("  <Link to='/addnewdelivery'")}
              >
                • List
              </Link>
            </li>
            <li>
              <Link
                to="/withdrawrequest"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Withdraws
              </Link>
            </li>
            <li>
              <Link
                to="/emergencycontact"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Emergency Contact
              </Link>
            </li>
          </ul>
        )}
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] text-white flex gap-2 items-center hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleCustomerList}
        >
          <IoPersonOutline /> Employees
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
        {showCustomerList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/employeerolesetup"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Employee Role Setup
              </Link>
            </li>
            <li>
              <Link
                to="/employeelist"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Employees
              </Link>
            </li>
          </ul>
        )}
        {/* ------------- */}
        {/* subscribe */}
        <Link
          to="/subscriberlist"
          className="block w-full flex  align-items-center text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white mb-3"
          style={{ color: "white" }}
        >
          <IoMdPerson className="inline-block mr-2" /> Subscribes
        </Link>
      </div>

      {/* ********************** */}

      <div className="mt-4">
        <small className="block text-white uppercase">System settings</small>
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] flex items-ceter gap-2 text-white hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleCustomerList}
        >
          <BsReverseLayoutSidebarInsetReverse />
          Bussiness Setup
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
        {showCustomerList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/appsettings"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Bussiness Settings
              </Link>
            </li>
            <li>
              <Link
                to="/businessinhouse"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Inhouse Shop
              </Link>
            </li>
          </ul>
        )}
        {/*  */}
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] flex gap-2 items-center text-white hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleHealthList}
        >
          <BsReverseLayoutSidebarInsetReverse />
          System Setup
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
        {showHealthList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/systemsetups"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
                onClick={() => setComponent("systemsetup")}
              >
                • System Settings
              </Link>
            </li>
            <li>
              <Link
                to="/loginsetups"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Login Settings
              </Link>
            </li>
            <li>
              <Link
                to="/theemsetup"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Themes & Addoms
              </Link>
            </li>
            {/* <li>
              <button
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
                onClick={() => setComponent("cwalletbonus")}
              >
                • Email Template
              </button>
            </li> */}
          </ul>
        )}
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] text-white flex gap-2 items-center hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleOrderList}
        >
          <FaKey /> 3rd Party
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
        {showOrderList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/thirdparty"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Payment Methods
              </Link>
            </li>
            <li>
              <Link
                to="/otherconfiguration"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Other Configurations
              </Link>
            </li>
          </ul>
        )}

        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] text-white flex gap-2 items-center hover:text-white text-white hover:text-[#7EC283] mb-2 relative"
          style={{ color: "white" }}
          onClick={toggleCustomerList}
        >
          <BsReverseLayoutSidebarInsetReverse /> Pages & Media
          <span className="float-right">
            {/* <i className={`tio-chevron-${showRefoundList ? 'up' : 'down'}`}></i> */}
            <FiChevronDown />
          </span>
        </button>
        {showCustomerList && (
          <ul className="ml-4 mt-2 space-y-1">
            {/* <li>
              <button
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
                onClick={() => setComponent("clist")}
              >
                • Business Pages
              </button>
            </li> */}
            <li>
              <Link
                to="/pagesocialmedia"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Social Media Links
              </Link>
            </li>
            <li>
              <Link
                to="/pagegallery"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/pagemedia"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Vendor Registration
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* In-house products */}

      <div className="mt-2">
        <button
          className="block w-full text-left p-2  rounded hover:bg-[#52c970] text-white hover:text-white flex justify-between text-white hover:text-[#7EC283]  relative"
          onClick={toggleInHouseProductList}
          style={{ color: "white" }}
        >
          {/* Categories */}
          {/* <span className="float-right"> */}
          {/* <i className={`tio-chevron-${showProductList ? 'up' : 'down'}`}></i> */}
          {/* <FiChevronDown /> */}
          {/* </span> */}

          <div className="flex gap-1 justify-between align-items-center">
            <FaWarehouse /> Pages And Media
          </div>
          <span className="float-right">
            {showRefoundList ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </button>
        {showInHouseProductList && (
          <ul className="ml-4 mt-2 space-y-1">
            <li>
              <Link
                to="/inhouseaddproduct"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                onClick={() => setComponent("pregister")}
                style={{ color: "white" }}
              >
                • Social Media
              </Link>
            </li>
            <li>
              <Link
                to="/addnewdelivery"
                className="block  w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                style={{ color: "white" }}
              >
                • Add New Product
              </Link>
            </li>

            <li>
              <Link
                to="/bulkimport"
                className="block w-full text-left p-1 pl-4 rounded hover:bg-gray-500"
                onClick={() => setComponent("bulkimport")}
                style={{ color: "white" }}
              >
                • Bulk import
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* *************** */}
    </aside>
  );
};

export default Sidebar;