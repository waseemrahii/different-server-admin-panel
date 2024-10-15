import React, { useState } from "react";
import { FaGlobe, FaCommentDots, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useAuth } from '../context/AuthContext.jsx';
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/admin/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMessageTooltipVisible, setIsMessageTooltipVisible] = useState(false);
  const [isGlobeTooltipVisible, setIsGlobeTooltipVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("English");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const showMessageTooltip = () => {
    setIsMessageTooltipVisible(true);
  };

  const hideMessageTooltip = () => {
    setIsMessageTooltipVisible(false);
  };

  const showGlobeTooltip = () => {
    setIsGlobeTooltipVisible(true);
  };

  const hideGlobeTooltip = () => {
    setIsGlobeTooltipVisible(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from the context
    toast.success("Logged out successfully!");
    console.log("Logging out...");
  };
  return (
    <>
      <ToastContainer />
      <div>
        {/* Header Component */}
        <div className="header flex items-center justify-between py-2 px-6 shadow fixed top-0 left-0 right-0 bg-white z-50">
          {/* Left Section: Logo */}
          <div className="left px-7">
            <img
              src="/vistalogo.png"
              alt="Logo"
              width="40"
              style={{ height: "4rem" }}
            />
          </div>

          {/* Right Section: Menu and Icons */}
          <div className="right flex items-center justify-around">
            {/* Language Dropdown */}
            {/* <div className="relative flex items-center mr-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="US Flag"
                className="w-5 h-3 mr-1"
              />
              <span className="text-sm cursor-pointer" onClick={toggleDropdown}>
                {selectedCountry}
              </span>
              <svg
                className="w-4 h-4 ml-1 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleDropdown}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
              {isDropdownOpen && (
                <ul className="absolute top-10 right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCountrySelect("English")}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                      alt="US Flag"
                      className="w-5 h-3 mr-2 inline-block"
                    />
                    English
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCountrySelect("Français")}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                      alt="France Flag"
                      className="w-5 h-3 mr-2 inline-block"
                    />
                    Français
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCountrySelect("Español")}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
                      alt="Spain Flag"
                      className="w-5 h-3 mr-2 inline-block"
                    />
                    Español
                  </li>
                </ul>
              )}
            </div>

        
            <div
              className="relative flex items-center mr-6 cursor-pointer"
              onMouseEnter={showGlobeTooltip}
              onMouseLeave={hideGlobeTooltip}
            >
              <FaGlobe size={20} />
              {isGlobeTooltipVisible && (
                <span className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-2 p-1 text-xs bg-gray-500 text-white rounded z-10">
                  Globe Tooltip
                </span>
              )}
            </div>

       
            <div
              className="relative flex items-center mr-6 cursor-pointer"
              onMouseEnter={showMessageTooltip}
              onMouseLeave={hideMessageTooltip}
            >
              <FaCommentDots size={20} />
              {isMessageTooltipVisible && (
                <span className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-2 p-1 text-xs bg-gray-500 text-white rounded z-10">
                  Message Tooltip
                </span>
              )}
            </div>

           
            <div className="relative flex items-center mr-6 cursor-pointer">
              <FaShoppingCart size={20} />
           
            </div> */}

            {/* User Icon */}
            <div className="flex items-center cursor-pointer">
              <img src="man.jpg" alt="User" className="w-8 h-8 rounded-full" />

              <NavDropdown title="Admin Master" id="basic-nav-dropdown ">
                <NavDropdown.Item>
                  <div className="flex gap-2">
                    <img
                      src="https://cdn.vectorstock.com/i/1000x1000/23/85/courier-checks-parcels-list-boxes-for-sending-vector-13222385.webp"
                      className="w-10 h-10"
                      alt=""
                    />
                    <div>
                      <h1>Admin</h1>
                      <h2>a...@admin@gmail.com</h2>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/profileinformation"}>Setting</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                {/* <NavDropdown.Item  onClick={handleLogout}>Logout</NavDropdown.Item> */}
                <NavDropdown.Item onClick={() => dispatch(logout())}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </div>

        {/* Spacer for Header */}
        <div className="header-spacer"></div>
      </div>
    </>
  );
};

export default Header;
