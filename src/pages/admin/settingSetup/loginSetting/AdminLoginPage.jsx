import React from "react";
import { FaInfoCircle } from "react-icons/fa";
// import './AdminLoginPage.css'; // Ensure you have your CSS file

const AdminLoginPage = () => {
  return (
    <div className="col-md-12 snipcss-FTALo">
      <form
        action="https://6valley.6amtech.com/admin/business-settings/web-config/login-url-setup"
        method="post"
      >
        <input
          type="hidden"
          name="_token"
          value="SXCvNFDWFKXZV15a7JHIE5kfiR2iPzrxGf9Jdemb"
          autoComplete="off"
        />
        <div className="card h-100">
          <div className="card-header">
            <h5 className="text-capitalize mb-0"> Admin Login Page </h5>
          </div>
          <div className="card-body style-a35LI" id="style-a35LI">
            <div className="mb-3">
              <label className="form-label">
                Admin login url
                <span
                  className="input-label-secondary text--title"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Add dynamic url to secure admin login access."
                >
                  <FaInfoCircle />
                </span>
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text radius-0 border-right-0">
                  https://6valley.6amtech.com/login/
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="url"
                  defaultValue="admin"
                />
                <input
                  type="hidden"
                  className="form-control"
                  name="type"
                  defaultValue="admin_login_url"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                id="submit"
                className="btn py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <form
        action="https://6valley.6amtech.com/admin/business-settings/web-config/login-url-setup"
        method="post"
      >
        <input
          type="hidden"
          name="_token"
          value="SXCvNFDWFKXZV15a7JHIE5kfiR2iPzrxGf9Jdemb"
          autoComplete="off"
        />
        <div className="card h-100">
          <div className="card-header">
            <h5 className="text-capitalize mb-0"> Employee Login Page </h5>
          </div>
          <div className="card-body style-a35LI" id="style-a35LI">
            <div className="mb-3">
              <label className="form-label">
                Employee login url
                <span
                  className="input-label-secondary text--title"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Add dynamic url to secure admin login access."
                >
                  <FaInfoCircle />
                </span>
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text radius-0 border-right-0">
                  https://6valley.6amtech.com/login/
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="url"
                  defaultValue="admin"
                />
                <input
                  type="hidden"
                  className="form-control"
                  name="type"
                  defaultValue="admin_login_url"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                id="submit"
                className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;
