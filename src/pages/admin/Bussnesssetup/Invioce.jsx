import React, { useState } from "react";
const InvoiceSettings = () => {
  const [formData, setFormData] = useState({
    terms_and_condition: "",
    business_identity: "",
    business_identity_value: "",
    image: null,
  });

  // Handle form inputs change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="card snipcss-Of6G1">
      <div className="border-bottom px-4 py-3">
        <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/header-logo.png"
            alt="Invoice Logo"
          />{" "}
          Invoice settings
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} id="update-invoice-settings">
          <input
            type="hidden"
            name="_token"
            value="1I376oev7rTjCrynaBneLy7MPY6CaQg4Qg2KcjWg"
            autoComplete="off"
          />
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="title-color text-capitalize">
                  Terms &amp; Condition
                </label>
                <input
                  type="text"
                  name="terms_and_condition"
                  value={formData.terms_and_condition}
                  onChange={handleChange}
                  className="form-control"
                  id="terms_and_condition"
                  placeholder="Terms &amp; Condition"
                />
              </div>
              <div className="form-group mb-3">
                <div className="d-flex flex-wrap gap-3">
                  <label className="title-color text-capitalize">
                    Business identity
                  </label>
                  <div className="d-flex gap-3 flex-wrap ml-auto">
                    <label className="form--check">
                      <input
                        type="radio"
                        name="business_identity"
                        className="business-identity form--check-input"
                        value="Tax ID"
                        onChange={handleChange}
                      />
                      <span className="form--check-label">Tax Id</span>
                    </label>
                    <label className="form--check">
                      <input
                        type="radio"
                        name="business_identity"
                        className="business-identity form--check-input"
                        value="Bin Number"
                        onChange={handleChange}
                      />
                      <span className="form--check-label">Bin Number</span>
                    </label>
                    <label className="form--check">
                      <input
                        type="radio"
                        name="business_identity"
                        className="business-identity form--check-input"
                        value="Musak"
                        onChange={handleChange}
                      />
                      <span className="form--check-label">Musak</span>
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  name="business_identity_value"
                  value={formData.business_identity_value}
                  onChange={handleChange}
                  className="form-control"
                  id="business-identity-value"
                  placeholder="Enter"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div>
                <label className="title-color text-capitalize">
                  Invoice logo{" "}
                  <span className="text-info">(1000 x 308 px)</span>
                </label>
                <div className="mx-auto text-center">
                  <div className="uploadDnD">
                    <div
                      className="form-group inputDnD input_image input_image_edit bg-img style-Fsg9s"
                      data-title=""
                      id="style-Fsg9s"
                    >
                      <input
                        type="file"
                        name="image"
                        className="form-control-file text--primary font-weight-bold"
                        id="invoice-image"
                        accept=".jpg, .png, .jpeg, .gif, .bmp, .webp |image/*"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-end gap-3">
              <button
                type="submit"
                className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-4 py-2 form-submit"
                data-form-id="update-invoice-settings"
                data-message="Want update this invoice settings?"
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

export default InvoiceSettings;
