import React, { useState } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import { AiOutlineFileImage } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../../components/FormInput/FileUpload";
import PreviewImage from "../../../components/FormInput/PreviewImage";
import { createBrand } from "../../../redux/slices/admin/brandSlice"; 
import "react-toastify/dist/ReactToastify.css";
import { fetchBrands } from "../../../redux/slices/admin/brandSlice";

const AddNewBrand = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [imagePreview, setImagePreview] = useState(null);
  const [brandName, setBrandName] = useState("");
  const [status, setStatus] = useState("inactive");
  const [imageAltText, setImageAltText] = useState("");
  const [imageBase64, setImageBase64] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve loading and error states from the brand slice
  const { loading, error } = useSelector((state) => state.brand);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageBase64(reader.result);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: brandName,
      logo: imageBase64,
      imageAltText,
    };
  
    console.log("dataaa", data)
    // Dispatch the createBrand action
    dispatch(createBrand(data))
      .unwrap() // unwrap to handle async response
      .then(() => {
        toast.success("Brand added successfully!");
    
        dispatch(fetchBrands());
        setTimeout(() => {
          navigate("/brandlist");
        }, 3000);
      })
      .catch((err) => {
        toast.error(`Error adding brand: ${err.message}`);
      });
  };

  const handleReset = () => {
    setSelectedLanguage("en");
    setImagePreview(null);
    setBrandName("");
    setImageAltText("");
    setImageBase64(null);
  };

  return (
    <div className="content container-fluid snipcss-AwJk2">
      <ToastContainer /> {/* Toast notifications container */}
      <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
        <h2 className="h1 mb-0 d-flex align-items-center gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
            alt="Brand"
          />{" "}
          Brand Setup
        </h2>
      </div>
      <div className="row g-3">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-body text-start">
              <form className="brand-setup-form" onSubmit={handleSubmit}>
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item">
                    <span
                      className={`nav-link form-system-language-tab cursor-pointer ${
                        selectedLanguage === "en" ? "active" : ""
                      }`}
                      onClick={() => handleLanguageChange("en")}
                    >
                      {" "}
                      English(EN){" "}
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className={`nav-link form-system-language-tab cursor-pointer ${
                        selectedLanguage === "sa" ? "" : ""
                      }`}
                      onClick={() => handleLanguageChange("sa")}
                    >
                      {" "}
                      Arabic(SA){" "}
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className={`nav-link form-system-language-tab cursor-pointer ${
                        selectedLanguage === "bd" ? "" : ""
                      }`}
                      onClick={() => handleLanguageChange("bd")}
                    >
                      {" "}
                      Bangla(BD){" "}
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className={`nav-link form-system-language-tab cursor-pointer ${
                        selectedLanguage === "in" ? "" : ""
                      }`}
                      onClick={() => handleLanguageChange("in")}
                    >
                      {" "}
                      Hindi(IN){" "}
                    </span>
                  </li>
                </ul>
                <div className="row flex">
                  <div className="col-md-6">
                    <div className="col-md-12">
                      <div
                        className={`form-group form-system-language-form ${
                          selectedLanguage === "en" ? "" : "d-none"
                        }`}
                        id="en-form"
                      >
                        <label htmlFor="name-en" className="title-color">
                          {" "}
                          Brand Name <span className="text-danger">
                            *
                          </span> (EN){" "}
                        </label>
                        <input
                          type="text"
                          name="name-en"
                          className="form-control"
                          id="name-en"
                          placeholder="Ex : LUX"
                          required
                          value={brandName}
                          onChange={(e) => setBrandName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div
                        className={`form-group form-system-language-form ${
                          selectedLanguage === "en" ? "" : "d-none"
                        }`}
                        id="en-alt-form"
                      >
                        <label htmlFor="alt-text-en" className="title-color">
                          {" "}
                          Image Alt Text <span className="text-danger">
                            *
                          </span>{" "}
                          (EN){" "}
                        </label>
                        <input
                          type="text"
                          name="alt-text-en"
                          className="form-control"
                          id="alt-text-en"
                          placeholder="Ex : Brand Logo"
                          required
                          value={imageAltText}
                          onChange={(e) => setImageAltText(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                   <div className="col-md-6">
                     {imagePreview ? (
                      <PreviewImage image={imagePreview} altText={imageAltText} />
                    ) : (
                      <PreviewImage image={null} altText={imageAltText} />
                    )}
                    <FileUpload
                      name="image"
                      label="Logo"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div> 
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    type="reset"
                    className="btn border border-secondary bg-secondary mx-2"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary hover:bg-primary-dark text-white"
                    style={{ color: "white" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBrand;
