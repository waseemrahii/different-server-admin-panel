import React from "react";
import { useState } from "react";
const Mail = () => {
  const [smtpConfig, setSmtpConfig] = useState({
    name: "",
    host: "",
    driver: "",
    port: "",
    username: "",
    email: "",
    encryption: "",
    password: "",
  });

  const [sendgridConfig, setSendgridConfig] = useState({
    name: "",
    host: "",
    driver: "",
    port: "",
    username: "",
    email: "",
    encryption: "",
    password: "",
  });

  const handleSmtpConfigChange = (e) => {
    const { name, value } = e.target;
    setSmtpConfig((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSendgridConfigChange = (e) => {
    const { name, value } = e.target;
    setSendgridConfig((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveSmtpConfig = () => {
    // Implement your save logic for SMTP configuration
    console.log("Saving SMTP config:", smtpConfig);
  };

  const handleSaveSendgridConfig = () => {
    // Implement your save logic for Sendgrid configuration
    console.log("Saving Sendgrid config:", sendgridConfig);
  };

  return (
    <div className="content container-fluid snipcss-R5i2w">
      <div className="bg-white rounded-top">
        <div className="card-body pb-0">
          <div className="d-flex flex-wrap justify-content-between gap-3 border-bottom">
            <div className="text-primary d-flex text-green-500 align-items-center gap-3 font-weight-bolder mb-2 text-capitalize">
              How it works
              <div
                className="ripple-animation"
                data-toggle="modal"
                data-target="#getInformationModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="svg replaced-svg"
                >
                  <path
                    d="M9.00033 9.83268C9.23644 9.83268 9.43449 9.75268 9.59449 9.59268C9.75449 9.43268 9.83421 9.2349 9.83366 8.99935V5.64518C9.83366 5.40907 9.75366 5.21463 9.59366 5.06185C9.43366 4.90907 9.23588 4.83268 9.00033 4.83268C8.76421 4.83268 8.56616 4.91268 8.40616 5.07268C8.24616 5.23268 8.16644 5.43046 8.16699 5.66602V9.02018C8.16699 9.25629 8.24699 9.45074 8.40699 9.60352C8.56699 9.75629 8.76477 9.83268 9.00033 9.83268ZM9.00033 13.166C9.23644 13.166 9.43449 13.086 9.59449 12.926C9.75449 12.766 9.83421 12.5682 9.83366 12.3327C9.83366 12.0966 9.75366 11.8985 9.59366 11.7385C9.43366 11.5785 9.23588 11.4988 9.00033 11.4993C8.76421 11.4993 8.56616 11.5793 8.40616 11.7393C8.24616 11.8993 8.16644 12.0971 8.16699 12.3327C8.16699 12.5688 8.24699 12.7668 8.40699 12.9268C8.56699 13.0868 8.76477 13.1666 9.00033 13.166ZM9.00033 17.3327C7.84755 17.3327 6.76421 17.1138 5.75033 16.676C4.73644 16.2382 3.85449 15.6446 3.10449 14.8952C2.35449 14.1452 1.76088 13.2632 1.32366 12.2493C0.886437 11.2355 0.667548 10.1521 0.666992 8.99935C0.666992 7.84657 0.885881 6.76324 1.32366 5.74935C1.76144 4.73546 2.35505 3.85352 3.10449 3.10352C3.85449 2.35352 4.73644 1.7599 5.75033 1.32268C6.76421 0.88546 7.84755 0.666571 9.00033 0.666016C10.1531 0.666016 11.2364 0.884905 12.2503 1.32268C13.2642 1.76046 14.1462 2.35407 14.8962 3.10352C15.6462 3.85352 16.24 4.73546 16.6778 5.74935C17.1156 6.76324 17.3342 7.84657 17.3337 8.99935C17.3337 10.1521 17.1148 11.2355 16.677 12.2493C16.2392 13.2632 15.6456 14.1452 14.8962 14.8952C14.1462 15.6452 13.2642 16.2391 12.2503 16.6768C11.2364 17.1146 10.1531 17.3332 9.00033 17.3327ZM9.00033 15.666C10.8475 15.666 12.4206 15.0168 13.7195 13.7185C15.0184 12.4202 15.6675 10.8471 15.667 8.99935C15.667 7.15213 15.0178 5.57907 13.7195 4.28018C12.4212 2.98129 10.8481 2.33213 9.00033 2.33268C7.1531 2.33268 5.58005 2.98185 4.28116 4.28018C2.98227 5.57852 2.3331 7.15157 2.33366 8.99935C2.33366 10.8466 2.98283 12.4196 4.28116 13.7185C5.57949 15.0174 7.15255 15.6666 9.00033 15.666Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade active show"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="card mt-3">
                <form onSubmit={handleSaveSmtpConfig}>
                  <input
                    type="hidden"
                    name="_token"
                    value="NUpqhZtm7pRjhaqQhQPJVPmT5ShZIbb5yd6KyYU7"
                    autoComplete="off"
                  />
                  <div className="card-header">
                    <h5 className="mb-0 d-flex align-items-center gap-2 text-capitalize">
                      <img
                        width="20"
                        src="https://6valley.6amtech.com/public/assets/back-end/img/smtp.png"
                        alt=""
                      />{" "}
                      Smtp mail config
                    </h5>
                    <label className="switcher">
                      <input
                        type="checkbox"
                        name="status"
                        value="1"
                        id="mail_config"
                        defaultChecked
                        className="switcher_input toggle-switch-message"
                        data-modal-id="toggle-modal"
                        data-toggle-id="mail_config"
                        data-on-image="maintenance_mode-on.png"
                        data-off-image="maintenance_mode-off.png"
                        data-on-title="Want to Turn ON the smtp mail config option?"
                        data-off-title="Want to Turn OFF the smtp mail config option?"
                        data-on-message="<p>Enabling mail configuration services will allow you to manage mail settings for all your projects.</p>"
                        data-off-message="<p>Disabling the mail configuration services will disable the mail configuration services for all your projects.</p>"
                      />
                      <div className="switcher_indicator rounded-lg"></div>
                    </label>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="smtp_name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="smtp_name"
                        name="name"
                        value={smtpConfig.name}
                        onChange={handleSmtpConfigChange}
                        className="form-control"
                        placeholder="Enter your name"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="smtp_host" className="form-label">
                        Host
                      </label>
                      <input
                        type="text"
                        id="smtp_host"
                        name="host"
                        value={smtpConfig.host}
                        onChange={handleSmtpConfigChange}
                        className="form-control"
                        placeholder="Enter your host"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="smtp_driver" className="form-label">
                        Driver
                      </label>
                      <input
                        type="text"
                        id="smtp_driver"
                        name="driver"
                        value={smtpConfig.driver}
                        onChange={handleSmtpConfigChange}
                        className="form-control"
                        placeholder="Enter your driver"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="smtp_port" className="form-label">
                        Port
                      </label>
                      <input
                        type="text"
                        id="smtp_port"
                        name="port"
                        value={smtpConfig.port}
                        onChange={handleSmtpConfigChange}
                        className="form-control"
                        placeholder="Enter your port"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="smtp_username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        id="smtp_username"
                        name="username"
                        value={smtpConfig.username}
                        onChange={handleSmtpConfigChange}
                        className="form-control"
                        placeholder="Enter your username"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="smtp_email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        id="smtp_email"
                        name="email"
                        value={smtpConfig.email}
                        onChange={handleSmtpConfigChange}
                        className="form-control"
                        placeholder="Enter your email"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="smtp_encryption" className="form-label">
                        Encryption
                      </label>
                      <input
                        type="text"
                        id="smtp_encryption"
                        name="encryption"
                        value={smtpConfig.encryption}
                        onChange={handleSmtpConfigChange}
                        className="form-control"
                        placeholder="Enter your encryption"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="smtp_password" className="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        id="smtp_password"
                        name="password"
                        value={smtpConfig.password}
                        onChange={handleSmtpConfigChange}
                        className="form-control"
                        placeholder="Enter your password"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mt-3">
                <form onSubmit={handleSaveSendgridConfig}>
                  <input
                    type="hidden"
                    name="_token"
                    value="NUpqhZtm7pRjhaqQhQPJVPmT5ShZIbb5yd6KyYU7"
                    autoComplete="off"
                  />
                  <div className="card-header">
                    <h5 className="mb-0 d-flex align-items-center gap-2 text-capitalize">
                      <img
                        width="20"
                        src="https://6valley.6amtech.com/public/assets/back-end/img/sendgrid.png"
                        alt=""
                      />{" "}
                      Sendgrid mail config
                    </h5>
                    <label className="switcher">
                      <input
                        type="checkbox"
                        name="status"
                        value="1"
                        id="mail_config"
                        defaultChecked
                        className="switcher_input toggle-switch-message"
                        data-modal-id="toggle-modal"
                        data-toggle-id="mail_config"
                        data-on-image="maintenance_mode-on.png"
                        data-off-image="maintenance_mode-off.png"
                        data-on-title="Want to Turn ON the sendgrid mail config option?"
                        data-off-title="Want to Turn OFF the sendgrid mail config option?"
                        data-on-message="<p>Enabling mail configuration services will allow you to manage mail settings for all your projects.</p>"
                        data-off-message="<p>Disabling the mail configuration services will disable the mail configuration services for all your projects.</p>"
                      />
                      <div className="switcher_indicator rounded-lg"></div>
                    </label>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="sendgrid_name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="sendgrid_name"
                        name="name"
                        value={sendgridConfig.name}
                        onChange={handleSendgridConfigChange}
                        className="form-control"
                        placeholder="Enter your name"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sendgrid_host" className="form-label">
                        Host
                      </label>
                      <input
                        type="text"
                        id="sendgrid_host"
                        name="host"
                        value={sendgridConfig.host}
                        onChange={handleSendgridConfigChange}
                        className="form-control"
                        placeholder="Enter your host"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sendgrid_driver" className="form-label">
                        Driver
                      </label>
                      <input
                        type="text"
                        id="sendgrid_driver"
                        name="driver"
                        value={sendgridConfig.driver}
                        onChange={handleSendgridConfigChange}
                        className="form-control"
                        placeholder="Enter your driver"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sendgrid_port" className="form-label">
                        Port
                      </label>
                      <input
                        type="text"
                        id="sendgrid_port"
                        name="port"
                        value={sendgridConfig.port}
                        onChange={handleSendgridConfigChange}
                        className="form-control"
                        placeholder="Enter your port"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sendgrid_username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        id="sendgrid_username"
                        name="username"
                        value={sendgridConfig.username}
                        onChange={handleSendgridConfigChange}
                        className="form-control"
                        placeholder="Enter your username"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sendgrid_email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        id="sendgrid_email"
                        name="email"
                        value={sendgridConfig.email}
                        onChange={handleSendgridConfigChange}
                        className="form-control"
                        placeholder="Enter your email"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="sendgrid_encryption"
                        className="form-label"
                      >
                        Encryption
                      </label>
                      <input
                        type="text"
                        id="sendgrid_encryption"
                        name="encryption"
                        value={sendgridConfig.encryption}
                        onChange={handleSendgridConfigChange}
                        className="form-control"
                        placeholder="Enter your encryption"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sendgrid_password" className="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        id="sendgrid_password"
                        name="password"
                        value={sendgridConfig.password}
                        onChange={handleSendgridConfigChange}
                        className="form-control"
                        placeholder="Enter your password"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
