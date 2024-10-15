import React from "react";
import { BsInfoCircle } from "react-icons/bs"; // Example import of React icon

const RecaptchaSettings = () => {
  return (
    <div className="card-body snipcss-afQV6">
      <div className="d-flex justify-content-between gap-2 align-items-center mb-3">
        <div>Status</div>
        <div className="text-primary d-flex align-items-center gap-3 font-weight-bolder mb-2 text-capitalize">
          How it works
          <div
            className="ripple-animation"
            data-toggle="modal"
            data-target="#getInformationModal"
          >
            <BsInfoCircle />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-bottom overflow-hidden mb-4">
        <div className="border rounded border-color-c1 px-4 py-3 d-flex justify-content-between">
          <h5 className="mb-0 d-flex gap-1 c1">Turn OFF</h5>
          <div className="position-relative">
            <label className="switcher">
              <input
                className="switcher_input toggle-switch-message"
                type="checkbox"
                name="status"
                id="recaptcha-id"
                checked
                value="1"
                data-modal-id="toggle-modal"
                data-toggle-id="recaptcha-id"
                data-on-image="recaptcha-off.png"
                data-off-image="recaptcha-off.png"
                data-on-title="Important!"
                data-off-title="Warning!"
                data-on-message="<p>ReCAPTCHA is now enabled for added security.Users may be prompted to complete a reCAPTCHA challenge to verify their human identity and protect against spam and malicious activity</p>"
                data-off-message="<p>Disabling reCAPTCHA may leave your website vulnerable to spam and malicious activity and suspects that a user may be a bot It is highly recommended to keep reCAPTCHA enabled to ensure the security and integrity of your website</p>"
              />
              <span className="switcher_control"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label className="title-color font-weight-bold d-flex">
              Site Key
            </label>
            <input
              type="text"
              className="form-control"
              name="site_key"
              value=""
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label className="title-color font-weight-bold d-flex">
              Secret Key
            </label>
            <input
              type="text"
              className="form-control"
              name="secret_key"
              value=""
            />
          </div>
        </div>
      </div>
      <h5 className="mt-4 mb-3 d-flex">Instructions</h5>
      <ol className="pl-4 instructions-list">
        <li>
          To get site key and secret key Go to the Credentials page (
          <a
            href="https://www.google.com/recaptcha/admin/create"
            target="_blank"
          >
            Click here
          </a>
          )
        </li>
        <li>Add a label (Ex: abc company)</li>
        <li>Select reCAPTCHA v2 as ReCAPTCHA Type</li>
        <li>Select sub type:Im not a robot checkbox</li>
        <li>Add Domain (For ex: demo.6amtech.com)</li>
        <li>messages.check_in_Accept_the_reCAPTCHA_Terms_of_Service</li>
        <li>Press Submit</li>
        <li>
          Copy Site Key and Secret Key Paste in the input filed below and Save.
        </li>
      </ol>
      <div className="d-flex justify-content-end gap-3">
        <button type="reset" className="btn btn-secondary px-5">
          Reset
        </button>
        <button
          type="button"
          className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] call-demo"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RecaptchaSettings;
