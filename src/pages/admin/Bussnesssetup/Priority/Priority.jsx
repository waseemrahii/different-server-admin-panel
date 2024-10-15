import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs"; // Icon for info
import "./Priority.css";
const Priority = () => {
  const [showCustomSorting, setShowCustomSorting] = useState(false);

  const handleToggle = (e) => {
    setShowCustomSorting(e.target.checked);
  };

  return (
    <div className="card-body snipcss0-0-0-1 snipcss-ME33Y">
      <div className="row snipcss0-1-1-2 bg-white p-5 border-r-5 mb-3">
        <div className="col-lg-6 snipcss0-2-2-3">
          <div className="snipcss0-3-3-4">
            <h3 className="mb-3 text-capitalize snipcss0-4-4-5">Brand</h3>
            <p className="max-w-400 snipcss0-4-4-6">
              Brands are lists of the specific products, organized by putting
              the newest ones at the top and arranging everything
              alphabetically.
            </p>
          </div>
        </div>
        <div className="col-lg-6 snipcss0-2-2-7">
          <form
            action="https://6valley.6amtech.com/admin/business-settings/priority-setup?type=brand"
            method="post"
            className="snipcss0-3-7-8"
          >
            <input
              type="hidden"
              name="_token"
              value="VskzJfjPNzjzx00GEqv2qOd7ajBHZAcX6mVmKcfE"
              autoComplete="off"
              className="snipcss0-4-8-9"
            />
            <div className="border rounded p-3 d-flex gap-4 flex-column snipcss0-4-8-10">
              <div className="d-flex gap-2 justify-content-between pb-3 border-bottom snipcss0-5-10-11">
                <div className="d-flex flex-column snipcss0-6-11-12">
                  <h5 className="text-capitalize snipcss0-7-12-13">
                    Use default sorting list
                  </h5>
                  <div className="d-flex gap-2 align-items-center snipcss0-7-12-14">
                    <BsInfoCircle size={14} />
                    <span className="text-dark fz-12 snipcss0-8-14-16">
                      Currently sorting this section based on latest add
                    </span>
                  </div>
                </div>
                <label className="switcher snipcss0-6-11-17">
                  <input
                    type="checkbox"
                    className="switcher_input switcher-input-js snipcss0-7-17-18"
                    data-parent-class="brand"
                    data-from="default-sorting"
                    checked={!showCustomSorting}
                    onChange={handleToggle}
                  />
                  <span className="switcher_control snipcss0-7-17-19"></span>
                </label>
              </div>
              <div className="snipcss0-5-10-20">
                <div className="d-flex gap-2 justify-content-between snipcss0-6-20-21">
                  <div className="d-flex flex-column snipcss0-7-21-22">
                    <h5 className="text-capitalize snipcss0-8-22-23">
                      Use custom sorting list
                    </h5>
                    <div className="d-flex gap-2 align-items-center snipcss0-8-22-24">
                      <BsInfoCircle size={14} />
                      <span className="text-dark fz-12 snipcss0-9-24-26">
                        You can sort this section by other ways
                      </span>
                    </div>
                  </div>
                  <label className="switcher snipcss0-7-21-27">
                    <input
                      type="checkbox"
                      className="switcher_input switcher-input-js snipcss0-8-27-28"
                      name="custom_sorting_status"
                      value="1"
                      data-parent-class="brand"
                      data-from="custom-sorting"
                      checked={showCustomSorting}
                      onChange={handleToggle}
                    />
                    <span className="switcher_control snipcss0-8-27-29"></span>
                  </label>
                </div>
                {showCustomSorting && (
                  <div
                    className="custom-sorting-radio-list snipcss0-6-20-30 style-ZO8AU"
                    id="style-ZO8AU"
                  >
                    <div className="border rounded p-3 d-flex flex-column gap-2 mt-4 snipcss0-7-30-31">
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-32">
                        <input
                          type="radio"
                          className="show snipcss0-9-32-33"
                          name="sort_by"
                          value="latest_created"
                          id="brand-sort-by-latest-created"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-32-34"
                          htmlFor="brand-sort-by-latest-created"
                        >
                          {" "}
                          Sort by latest created{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-35">
                        <input
                          type="radio"
                          className="show snipcss0-9-35-36"
                          name="sort_by"
                          value="first_created"
                          id="brand-sort-by-first-created"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-35-37"
                          htmlFor="brand-sort-by-first-created"
                        >
                          {" "}
                          Sort by first created{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-38">
                        <input
                          type="radio"
                          className="show snipcss0-9-38-39"
                          name="sort_by"
                          value="most_order"
                          id="brand-sort-by-most-order"
                          defaultChecked
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-38-40"
                          htmlFor="brand-sort-by-most-order"
                        >
                          {" "}
                          Sort by most order{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-41">
                        <input
                          type="radio"
                          className="show snipcss0-9-41-42"
                          name="sort_by"
                          value="a_to_z"
                          id="brand-alphabetic-order"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-41-43"
                          htmlFor="brand-alphabetic-order"
                        >
                          {" "}
                          Sort by Alphabetical (A To Z){" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-44">
                        <input
                          type="radio"
                          className="show snipcss0-9-44-45"
                          name="sort_by"
                          value="z_to_a"
                          id="brand-alphabetic-order-reverse"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-44-46"
                          htmlFor="brand-alphabetic-order-reverse"
                        >
                          {" "}
                          Sort by Alphabetical (Z To A){" "}
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4 snipcss0-4-8-47">
              <button
                type="submit"
                className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-3 py-2 snipcss0-5-47-48"
              >
                {" "}
                Save{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row snipcss0-1-1-2  bg-white p-5 border-r-5 mb-3">
        <div className="col-lg-6 snipcss0-2-2-3">
          <div className="snipcss0-3-3-4">
            <h3 className="mb-3 text-capitalize snipcss0-4-4-5">Brand</h3>
            <p className="max-w-400 snipcss0-4-4-6">
              Brands are lists of the specific products, organized by putting
              the newest ones at the top and arranging everything
              alphabetically.
            </p>
          </div>
        </div>
        <div className="col-lg-6 snipcss0-2-2-7">
          <form
            action="https://6valley.6amtech.com/admin/business-settings/priority-setup?type=brand"
            method="post"
            className="snipcss0-3-7-8"
          >
            <input
              type="hidden"
              name="_token"
              value="VskzJfjPNzjzx00GEqv2qOd7ajBHZAcX6mVmKcfE"
              autoComplete="off"
              className="snipcss0-4-8-9"
            />
            <div className="border rounded p-3 d-flex gap-4 flex-column snipcss0-4-8-10">
              <div className="d-flex gap-2 justify-content-between pb-3 border-bottom snipcss0-5-10-11">
                <div className="d-flex flex-column snipcss0-6-11-12">
                  <h5 className="text-capitalize snipcss0-7-12-13">
                    Use default sorting list
                  </h5>
                  <div className="d-flex gap-2 align-items-center snipcss0-7-12-14">
                    <BsInfoCircle size={14} />
                    <span className="text-dark fz-12 snipcss0-8-14-16">
                      Currently sorting this section based on latest add
                    </span>
                  </div>
                </div>
                <label className="switcher snipcss0-6-11-17">
                  <input
                    type="checkbox"
                    className="switcher_input switcher-input-js snipcss0-7-17-18"
                    data-parent-class="brand"
                    data-from="default-sorting"
                    checked={!showCustomSorting}
                    onChange={handleToggle}
                  />
                  <span className="switcher_control snipcss0-7-17-19"></span>
                </label>
              </div>
              <div className="snipcss0-5-10-20  bg-white p-5 border-r-5 mb-3 ">
                <div className="d-flex gap-2 justify-content-between snipcss0-6-20-21">
                  <div className="d-flex flex-column snipcss0-7-21-22">
                    <h5 className="text-capitalize snipcss0-8-22-23">
                      Use custom sorting list
                    </h5>
                    <div className="d-flex gap-2 align-items-center snipcss0-8-22-24">
                      <BsInfoCircle size={14} />
                      <span className="text-dark fz-12 snipcss0-9-24-26">
                        You can sort this section by other ways
                      </span>
                    </div>
                  </div>
                  <label className="switcher snipcss0-7-21-27">
                    <input
                      type="checkbox"
                      className="switcher_input switcher-input-js snipcss0-8-27-28"
                      name="custom_sorting_status"
                      value="1"
                      data-parent-class="brand"
                      data-from="custom-sorting"
                      checked={showCustomSorting}
                      onChange={handleToggle}
                    />
                    <span className="switcher_control snipcss0-8-27-29"></span>
                  </label>
                </div>
                {showCustomSorting && (
                  <div
                    className="custom-sorting-radio-list snipcss0-6-20-30 style-ZO8AU"
                    id="style-ZO8AU"
                  >
                    <div className="border rounded p-3 d-flex flex-column gap-2 mt-4 snipcss0-7-30-31">
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-32">
                        <input
                          type="radio"
                          className="show snipcss0-9-32-33"
                          name="sort_by"
                          value="latest_created"
                          id="brand-sort-by-latest-created"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-32-34"
                          htmlFor="brand-sort-by-latest-created"
                        >
                          {" "}
                          Sort by latest created{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-35">
                        <input
                          type="radio"
                          className="show snipcss0-9-35-36"
                          name="sort_by"
                          value="first_created"
                          id="brand-sort-by-first-created"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-35-37"
                          htmlFor="brand-sort-by-first-created"
                        >
                          {" "}
                          Sort by first created{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-38">
                        <input
                          type="radio"
                          className="show snipcss0-9-38-39"
                          name="sort_by"
                          value="most_order"
                          id="brand-sort-by-most-order"
                          defaultChecked
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-38-40"
                          htmlFor="brand-sort-by-most-order"
                        >
                          {" "}
                          Sort by most order{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-41">
                        <input
                          type="radio"
                          className="show snipcss0-9-41-42"
                          name="sort_by"
                          value="a_to_z"
                          id="brand-alphabetic-order"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-41-43"
                          htmlFor="brand-alphabetic-order"
                        >
                          {" "}
                          Sort by Alphabetical (A To Z){" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-44">
                        <input
                          type="radio"
                          className="show snipcss0-9-44-45"
                          name="sort_by"
                          value="z_to_a"
                          id="brand-alphabetic-order-reverse"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-44-46"
                          htmlFor="brand-alphabetic-order-reverse"
                        >
                          {" "}
                          Sort by Alphabetical (Z To A){" "}
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4 snipcss0-4-8-47">
              <button
                type="submit"
                className="btn btn-primary px-5 snipcss0-5-47-48"
              >
                {" "}
                Save{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row snipcss0-1-1-2  bg-white p-5 border-r-5 mb-3">
        <div className="col-lg-6 snipcss0-2-2-3">
          <div className="snipcss0-3-3-4">
            <h3 className="mb-3 text-capitalize snipcss0-4-4-5">Brand</h3>
            <p className="max-w-400 snipcss0-4-4-6">
              Brands are lists of the specific products, organized by putting
              the newest ones at the top and arranging everything
              alphabetically.
            </p>
          </div>
        </div>
        <div className="col-lg-6 snipcss0-2-2-7">
          <form
            action="https://6valley.6amtech.com/admin/business-settings/priority-setup?type=brand"
            method="post"
            className="snipcss0-3-7-8"
          >
            <input
              type="hidden"
              name="_token"
              value="VskzJfjPNzjzx00GEqv2qOd7ajBHZAcX6mVmKcfE"
              autoComplete="off"
              className="snipcss0-4-8-9"
            />
            <div className="border rounded p-3 d-flex gap-4 flex-column snipcss0-4-8-10">
              <div className="d-flex gap-2 justify-content-between pb-3 border-bottom snipcss0-5-10-11">
                <div className="d-flex flex-column snipcss0-6-11-12">
                  <h5 className="text-capitalize snipcss0-7-12-13">
                    Use default sorting list
                  </h5>
                  <div className="d-flex gap-2 align-items-center snipcss0-7-12-14">
                    <BsInfoCircle size={14} />
                    <span className="text-dark fz-12 snipcss0-8-14-16">
                      Currently sorting this section based on latest add
                    </span>
                  </div>
                </div>
                <label className="switcher snipcss0-6-11-17">
                  <input
                    type="checkbox"
                    className="switcher_input switcher-input-js snipcss0-7-17-18"
                    data-parent-class="brand"
                    data-from="default-sorting"
                    checked={!showCustomSorting}
                    onChange={handleToggle}
                  />
                  <span className="switcher_control snipcss0-7-17-19"></span>
                </label>
              </div>
              <div className="snipcss0-5-10-20">
                <div className="d-flex gap-2 justify-content-between snipcss0-6-20-21">
                  <div className="d-flex flex-column snipcss0-7-21-22">
                    <h5 className="text-capitalize snipcss0-8-22-23">
                      Use custom sorting list
                    </h5>
                    <div className="d-flex gap-2 align-items-center snipcss0-8-22-24">
                      <BsInfoCircle size={14} />
                      <span className="text-dark fz-12 snipcss0-9-24-26">
                        You can sort this section by other ways
                      </span>
                    </div>
                  </div>
                  <label className="switcher snipcss0-7-21-27">
                    <input
                      type="checkbox"
                      className="switcher_input switcher-input-js snipcss0-8-27-28"
                      name="custom_sorting_status"
                      value="1"
                      data-parent-class="brand"
                      data-from="custom-sorting"
                      checked={showCustomSorting}
                      onChange={handleToggle}
                    />
                    <span className="switcher_control snipcss0-8-27-29"></span>
                  </label>
                </div>
                {showCustomSorting && (
                  <div
                    className="custom-sorting-radio-list snipcss0-6-20-30 style-ZO8AU"
                    id="style-ZO8AU"
                  >
                    <div className="border rounded p-3 d-flex flex-column gap-2 mt-4 snipcss0-7-30-31">
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-32">
                        <input
                          type="radio"
                          className="show snipcss0-9-32-33"
                          name="sort_by"
                          value="latest_created"
                          id="brand-sort-by-latest-created"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-32-34"
                          htmlFor="brand-sort-by-latest-created"
                        >
                          {" "}
                          Sort by latest created{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-35">
                        <input
                          type="radio"
                          className="show snipcss0-9-35-36"
                          name="sort_by"
                          value="first_created"
                          id="brand-sort-by-first-created"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-35-37"
                          htmlFor="brand-sort-by-first-created"
                        >
                          {" "}
                          Sort by first created{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-38">
                        <input
                          type="radio"
                          className="show snipcss0-9-38-39"
                          name="sort_by"
                          value="most_order"
                          id="brand-sort-by-most-order"
                          defaultChecked
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-38-40"
                          htmlFor="brand-sort-by-most-order"
                        >
                          {" "}
                          Sort by most order{" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-41">
                        <input
                          type="radio"
                          className="show snipcss0-9-41-42"
                          name="sort_by"
                          value="a_to_z"
                          id="brand-alphabetic-order"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-41-43"
                          htmlFor="brand-alphabetic-order"
                        >
                          {" "}
                          Sort by Alphabetical (A To Z){" "}
                        </label>
                      </div>
                      <div className="d-flex gap-2 align-items-center snipcss0-8-31-44">
                        <input
                          type="radio"
                          className="show snipcss0-9-44-45"
                          name="sort_by"
                          value="z_to_a"
                          id="brand-alphabetic-order-reverse"
                        />
                        <label
                          className="mb-0 cursor-pointer snipcss0-9-44-46"
                          htmlFor="brand-alphabetic-order-reverse"
                        >
                          {" "}
                          Sort by Alphabetical (Z To A){" "}
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4 snipcss0-4-8-47">
              <button
                type="submit"
                className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-3 py-2"
              >
                {" "}
                Save{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Priority;
