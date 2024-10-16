import React from "react";
import BussniesWallet from "./BussniesWallet";

import Adminwallet from "./AdminWallet/Adminwallet";
// import OrderStatic from "./AdminWallet/OrderStatic/OrderStatic";
import OrderStatistic from "./AdminWallet/OrderStatic/OrderStatistic/OrderStatistic";
import TopCustomersSection from "./AdminWallet/adminCard/TopCustomerCard";
import TopProductSection from "./ProductAdmin/ProductAdmin";

const Dashboard = () => {
  return (
    <div className="grid  grid-cols-12  sm:mx-0 md:mx-10  bg-[#F9F9FB]">
      <div className="col-span-12 ">
        <div className="bg-[#F9F9FB] mx-5  md:py-5 mt-5">
          <h1 className="text-[1.3rem] font-bold">Welcome Admin</h1>
          <p className="text-[.9rem] text-gray-400">
            Monitor your business analytics and statistics.
          </p>
        </div>
        <BussniesWallet />
        <Adminwallet />
        <OrderStatistic />
        <TopCustomersSection />
        <TopProductSection />
      </div>
    </div>
  );
};

export default Dashboard;
