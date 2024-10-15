import React from "react";
const AppSettings = () => {
  return (
    <div className="content container-fluid gap-7 flex flex-col">
      <div className="d-flex gap-2 mb-3">
        <img
          width="16"
          src="https://6valley.6amtech.com/public/assets/back-end/img/settings.png"
          alt=""
        />
        <h5 className="mb-0">User app version control</h5>
      </div>
      <div className="card">
        <div className="card-body">
          <form
            action="https://6valley.6amtech.com/admin/business-settings/web-config/app-settings"
            method="post"
          >
            <input
              type="hidden"
              name="_token"
              value="Twvhv0EJYa0GUycFmHJFzLVQRODPOpx9nQxb0DbE"
              autoComplete="off"
            />
            <div className="row g-2">
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/android.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">
                    android minimum version
                  </h5>
                </div>
                <input
                  type="text"
                  name="min_version"
                  id="min_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/ios.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">ios minimum version</h5>
                </div>
                <input
                  type="text"
                  name="ios_version"
                  id="ios_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/android.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">
                    android minimum version
                  </h5>
                </div>
                <input
                  type="text"
                  name="min_version"
                  id="min_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/ios.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">ios minimum version</h5>
                </div>
                <input
                  type="text"
                  name="ios_version"
                  id="ios_version"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] ripple-surface"
            >
              save changes
            </button>
          </form>
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <img
          width="16"
          src="https://6valley.6amtech.com/public/assets/back-end/img/settings.png"
          alt=""
        />
        <h5 className="mb-0">Vendor app version control</h5>
      </div>
      <div className="card">
        <div className="card-body">
          <form
            action="https://6valley.6amtech.com/admin/business-settings/web-config/app-settings"
            method="post"
          >
            <input
              type="hidden"
              name="_token"
              value="Twvhv0EJYa0GUycFmHJFzLVQRODPOpx9nQxb0DbE"
              autoComplete="off"
            />
            <div className="row g-2">
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/android.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">
                    android minimum version
                  </h5>
                </div>
                <input
                  type="text"
                  name="min_version"
                  id="min_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/ios.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">ios minimum version</h5>
                </div>
                <input
                  type="text"
                  name="ios_version"
                  id="ios_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/android.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">
                    android minimum version
                  </h5>
                </div>
                <input
                  type="text"
                  name="min_version"
                  id="min_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/ios.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">ios minimum version</h5>
                </div>
                <input
                  type="text"
                  name="ios_version"
                  id="ios_version"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]ripple-surface"
            >
              save changes
            </button>
          </form>
        </div>
      </div>

      <div className="d-flex gap-2 mb-1">
        <img
          width="16"
          src="https://6valley.6amtech.com/public/assets/back-end/img/settings.png"
          alt=""
        />
        <h5 className="mb-0">Delivery man app version control</h5>
      </div>
      <div className="card">
        <div className="card-body">
          <form
            action="https://6valley.6amtech.com/admin/business-settings/web-config/app-settings"
            method="post"
          >
            <input
              type="hidden"
              name="_token"
              value="Twvhv0EJYa0GUycFmHJFzLVQRODPOpx9nQxb0DbE"
              autoComplete="off"
            />
            <div className="row g-2">
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/android.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">
                    android minimum version
                  </h5>
                </div>
                <input
                  type="text"
                  name="min_version"
                  id="min_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/ios.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">ios minimum version</h5>
                </div>
                <input
                  type="text"
                  name="ios_version"
                  id="ios_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/android.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">
                    android minimum version
                  </h5>
                </div>
                <input
                  type="text"
                  name="min_version"
                  id="min_version"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <img
                    width="22"
                    src="https://6valley.6amtech.com/public/assets/back-end/img/ios.png"
                    alt=""
                  />
                  <h5 className="mb-0 text-capitalize">ios minimum version</h5>
                </div>
                <input
                  type="text"
                  name="ios_version"
                  id="ios_version"
                  className="form-control"
                  value=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] ripple-surface"
            >
              save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;
