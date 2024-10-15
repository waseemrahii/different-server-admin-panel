import React from "react";
import { FiInfo } from "react-icons/fi"; // Example: Import icons from React Icons library

const SmsGatewayCard = ({ gatewayName, onSubmit }) => {
  return (
    <div className="col-md-6">
      <div className="card h-100">
        <form
          action={`https://6valley.6amtech.com/admin/business-settings/addon-sms-set`}
          method="POST"
          id={`${gatewayName}-form`}
          encType="multipart/form-data"
        >
          <input
            type="hidden"
            name="_token"
            value="NUpqhZtm7pRjhaqQhQPJVPmT5ShZIbb5yd6KyYU7"
            autoComplete="off"
          />
          <input type="hidden" name="_method" value="PUT" />
          <div className="card-header d-flex flex-wrap align-content-around">
            <h5>
              <span className="text-uppercase">{gatewayName}</span>
            </h5>
            <label className="switcher show-status-text">
              <input
                className="switcher_input toggle-switch-message"
                type="checkbox"
                name="status"
                value="1"
                id={gatewayName}
                data-modal-id="toggle-status-modal"
                data-toggle-id={gatewayName}
                data-on-image={`sms/${gatewayName}.png`}
                data-off-image={`sms/${gatewayName}.png`}
                data-on-title={`Want to Turn ON ${gatewayName} as the SMS Gateway?`}
                data-off-title={`Want to Turn OFF ${gatewayName} as the SMS Gateway?`}
                data-on-message="<p>If enabled system can use this SMS Gateway</p>"
                data-off-message="<p>If disabled system cannot use this SMS Gateway</p>"
              />
              <span
                className="switcher_control"
                data-ontitle="On"
                data-offtitle="Off"
              ></span>
            </label>
          </div>
          <div className="card-body">
            <input name="gateway" value={gatewayName} className="d-none" />
            <input name="mode" value="live" className="d-none" />
            {gatewayName === "alphanet_sms" && (
              <div className="form-group mb-10px mt-20px">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Otp Template <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="otp_template"
                  placeholder="Otp Template"
                  value=""
                />
              </div>
            )}
            <div className="form-group mb-10px mt-20px">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Api Key <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="api_key"
                placeholder="Api Key"
                value=""
              />
            </div>
            {gatewayName !== "2factor" && (
              <div className="form-group mb-10px mt-20px">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Auth Key <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="auth_key"
                  placeholder="Auth Key"
                  value=""
                />
              </div>
            )}
            <div className="text-right mt-20px">
              <button
                type="submit"
                className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SmsGatewayCard;
