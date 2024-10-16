import React, { useState } from "react";
import SocialMedia from "./socialMedia/socialMedia";
import HeaderMedia from "./headerMedia/headerMedia";
import BusinessProcess from "./businessProcess/businessProcess";
import DownloadAppSection from "./dowloadApp/downloadApp";
import FAQ from "./faq/Faq";
import FaqList from "./faq/Faq";

const PageAndMedia = () => {
  const [currentTab, setCurrentTab] = useState("header"); // State to manage active tab

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderContent = () => {
    switch (currentTab) {
      case "header":
        return <HeaderMedia />;
      case "whysellwithus":
        return <HeaderMedia />;
      case "busnessproces":
        return <BusinessProcess />;
      case "downloadapp":
        return <DownloadAppSection />;
      case "FAQ":
        return <FaqList />;
      default:
        return null;
    }
  };

  return (
    <div className="content container-fluid">
      <div className="mb-4 pb-2">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/3rd-party.png"
            alt="Vendor Registration"
          />{" "}
          Vendor Registration
        </h2>
      </div>

      {/* Inline page menu */}
      <div className="inline-page-menu m-4">
        <ul className="flex flex-col md:flex-row font-semibold md:items-center gap-4">
          <li
            className={`relative ${
              currentTab === "header" ? "text-primary" : ""
            }`}
          >
            <button
              className={`text-capitalize ${
                currentTab === "header" ? "text-primary" : "text-gray-600"
              }`}
              onClick={() => handleTabChange("header")}
            >
              Header
            </button>
            {currentTab === "header" && (
              <span className="absolute -bottom-1 left-0 w-10 md:w-full  h-1 rounded bg-primary-dark"></span>
            )}
          </li>

          <li
            className={`relative ${
              currentTab === "whysellwithus" ? "text-primary" : ""
            }`}
          >
            <button
              className={`text-capitalize ${
                currentTab === "whysellwithus"
                  ? "text-primary"
                  : "text-gray-600"
              }`}
              onClick={() => handleTabChange("whysellwithus")}
            >
              Why Sell With Us
            </button>
            {currentTab === "whysellwithus" && (
              <span className="absolute -bottom-1 left-0 w-10 md:w-full  h-1 rounded bg-primary-dark"></span>
            )}
          </li>

          <li
            className={`relative ${
              currentTab === "busnessproces" ? "text-primary" : ""
            }`}
          >
            <button
              className={`text-capitalize ${
                currentTab === "busnessproces"
                  ? "text-primary"
                  : "text-gray-600"
              }`}
              onClick={() => handleTabChange("busnessproces")}
            >
              Business Process
            </button>
            {currentTab === "busnessproces" && (
              <span className="absolute -bottom-1 left-0 w-10 md:w-full  h-1 rounded bg-primary-dark"></span>
            )}
          </li>

          <li
            className={`relative ${
              currentTab === "downloadapp" ? "text-primary" : ""
            }`}
          >
            <button
              className={`text-capitalize ${
                currentTab === "downloadapp" ? "text-primary" : "text-gray-600"
              }`}
              onClick={() => handleTabChange("downloadapp")}
            >
              Download App
            </button>
            {currentTab === "downloadapp" && (
              <span className="absolute -bottom-1 left-0 w-10 md:w-full  h-1 rounded bg-primary-dark"></span>
            )}
          </li>

          <li
            className={`relative ${currentTab === "FAQ" ? "text-primary" : ""}`}
          >
            <button
              className={`text-capitalize ${
                currentTab === "FAQ" ? "text-primary" : "text-gray-600"
              }`}
              onClick={() => handleTabChange("FAQ")}
            >
              FAQ
            </button>
            {currentTab === "FAQ" && (
              <span className="absolute -bottom-1 left-0 w-10 md:w-full  h-1 rounded bg-primary-dark"></span>
            )}
          </li>
        </ul>
      </div>

      {/* Render content based on currentTab */}
      <div className="card overflow-hidden">{renderContent()}</div>
    </div>
  );
};

export default PageAndMedia;
