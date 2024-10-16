import React from "react";
import { useState } from "react";
// import { TioDelete } from 'react-icons/tio';

const HeaderMedia = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://6valley.6amtech.com/public/assets/back-end/img/placeholder/placeholder-4-1.png"
  );

  const handleImageClick = () => {
    document.getElementById("file-input").click(); // Trigger the file input when the image box is clicked
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Update the state with the new image URL
    }
  };
  return (
    <div className="card snipcss-fnvUF">
      <div className="card-header">
        <h5 className="mb-0 text-capitalize">Header section</h5>
      </div>
      <div className="card-body">
        <div className="card border shadow-none mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <label className="title-color">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    defaultValue="Vendor Registration"
                    placeholder="Enter title"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="form-group">
                  <label className="title-color text-capitalize">
                    Sub title
                  </label>
                  <input
                    type="text"
                    name="sub_title"
                    className="form-control"
                    defaultValue="Create your own store. Already have a store?"
                    placeholder="Enter sub title"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border shadow-none">
          <div className="card-body">
            <div className="mx-auto max-w-[400px]">
              {" "}
              {/* Adjusted max width */}
              <div className="mb-3 text-center">
                <label
                  htmlFor="name"
                  className="title-color text-capitalize font-weight-bold mb-0"
                >
                  Image
                </label>
                <span className="badge badge-soft-info">
                  (Size: 310px x 240px)
                </span>
              </div>
              <div className="custom_upload_input">
                <div className="img_area_with_preview relative flex items-center justify-center">
                  <div
                    className="border-dashed border-2 border-gray-400 p-2 w-full h-40 cursor-pointer" // Increased height here (h-40 = 10rem) and adjusted width
                    onClick={handleImageClick} // Call the handler on click
                  >
                    {selectedImage ? ( // Show selected image or placeholder
                      <img
                        id="view-header-logo"
                        src={selectedImage}
                        className="bg-white w-full h-full object-cover" // Use h-full to fill the container and object-cover to maintain aspect ratio
                        alt="Selected"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <img
                          alt=""
                          className="w-75 mb-2"
                          src="https://6valley.6amtech.com/public/assets/back-end/img/icons/product-upload-icon.svg"
                        />
                        <h3 className="text-muted text-capitalize">
                          Upload image
                        </h3>
                      </div>
                    )}
                  </div>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    className="hidden" // Hide the file input
                    onChange={handleFileChange} // Call this function when the file is selected
                  />
                </div>
                <p className="text-muted text-center mt-2">
                  Image format: Jpg, png, jpeg, webp, <br /> Image size: Max 2
                  MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end gap-3 mt-3 mx-1">
          <button type="reset" className="btn btn-secondary px-5">
            Reset
          </button>
          <button
            type="submit"
            className="btn px-4 py-2 bg-primary text-white hover:bg-primary-dark"
            style={{ color: "white" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMedia;
