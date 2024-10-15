import React from "react";
import { BsInfoCircle } from "react-icons/bs"; // Example import of React icon
const MapApiSetup = () => {
  return (
    <div className="card-body snipcss-dkxUU">
      <form action="javascript:" method="POST" encType="multipart/form-data">
        <input
          type="hidden"
          name="_token"
          value="NUpqhZtm7pRjhaqQhQPJVPmT5ShZIbb5yd6KyYU7"
          autoComplete="off"
        />
        <div className="d-flex align-items-center gap-2 justify-content-between mb-3">
          <h4 className="text-capitalize mb-0">Google map API setup</h4>
          <div className="d-flex align-items-center gap-4">
            <div>
              <label className="switcher">
                <input
                  className="switcher_input toggle-switch-message"
                  type="checkbox"
                  value="1"
                  id="map-api-status-id"
                  name="status"
                  defaultChecked
                  data-modal-id="toggle-modal"
                  data-toggle-id="map-api-status-id"
                  data-on-image="location.png"
                  data-off-image="location.png"
                  data-on-title="Want to turn ON map?"
                  data-off-title="Want to turn OFF map?"
                  data-on-message="<p>If enabled map will be available in the system</p>"
                  data-off-message="<p>If enabled map will be hidden from the system</p>"
                />
                <span className="switcher_control"></span>
              </label>
            </div>
            <div className="btn-group">
              <div
                className="ripple-animation"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <BsInfoCircle />
              </div>
              <div className="dropdown-menu dropdown-menu-right bg-aliceblue border border-color-primary-light p-4 dropdown-w-lg">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="20"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/note.png"
                    alt=""
                  />
                  <h5 className="text-primary mb-0">Note</h5>
                </div>
                <p className="title-color font-weight-medium mb-0">
                  Without configuring this section map functionality will not
                  work properly Thus the whole system will not work as it
                  planned
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-4 valley-alert">
          <img
            width="16"
            className="mt-1"
            src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg"
            alt=""
          />
          <p className="mb-0">
            <strong>NB:</strong> Client key should have enable map javascript
            api and you can restrict it with http refer Server key should have
            enable place api key and you can restrict it with ip You can use
            same api for both field without any restrictions.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="title-color d-flex">Map api key(Client)</label>
              <input
                type="text"
                placeholder="Map api key(Client)"
                className="form-control"
                name="map_api_key"
                value=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="title-color d-flex">
                Map api key (Server )
              </label>
              <input
                type="text"
                placeholder="Map api key (Server)"
                className="form-control"
                name="map_api_key_server"
                value=""
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end gap-3">
          <button type="reset" className="btn btn-secondary px-5">
            Reset
          </button>
          <button
            type="button"
            className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]call-demo"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MapApiSetup;
