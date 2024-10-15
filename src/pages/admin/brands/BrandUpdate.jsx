
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrandById, updateBrand } from 
'../../../redux/slices/admin/brandSlice'; // Adjust import path as necessary
import { toast } from 'react-toastify';
import ImageApiUrl from '../../../ImageApiUrl';

const BrandUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentBrand, loading, error } = useSelector((state) => state.brand);

  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    dispatch(fetchBrandById(id));
  }, [dispatch, id]);

  // useEffect(() => {
  //   if (currentBrand) {
  //     console.log("curbrand", currentBrand)
  //     setBrandName(currentBrand.name);
  //     setBrandImage(`${ImageApiUrl}/${currentBrand.logo}`);
  //   }
  // }, [currentBrand]);

  useEffect(() => {
    if (currentBrand) {
      console.log("Current brand details:", currentBrand);
      setBrandName(currentBrand.name);
      const imageUrl = `${ImageApiUrl}/${currentBrand.logo}`;
      setBrandImage(imageUrl);
      console.log("Constructed image URL:", imageUrl);
    }
  }, [currentBrand]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("image-----------",imageFile)
    const brandData = {
      name: brandName,      
      logo: imageFile
    };

    dispatch(updateBrand({ brandId: id, brandData }))
      .then(() => {
        toast.success('Brand updated successfully!');
        navigate(`/brandlist`); // Redirect to the brands list or another page
      })
      .catch((error) => {
        toast.error(`Failed to update brand: ${error.message}`);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    toast.error(`Error: ${error}`);
  }

  return (
    <div className="content container-fluid snipcss-BVBoO">
      <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
        <h2 className="h1 mb-0 align-items-center d-flex gap-2">
          <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png" alt="" /> Brand Update
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-start">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className='row'>
                  <div className='col-lg-6 p-4'>
                    <div className="form-group">
                      <label className="title-color" htmlFor="name">Brand Name</label>
                      <input
                        type="text"
                        name="name"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="form-control"
                        id="name"
                        placeholder="Ex : LUX"
                        required
                      />
                    </div>
                  </div>
                  <div className='col-lg-6 p-4'>
                    <div className="text-center flex justify-center">
                      {brandImage && (
                        <img className="upload-img-view" src={brandImage} alt="Brand Preview" />
                      )}
                    </div>
                    <div className="form-group">
                      <label className="title-color" htmlFor="brand">Brand Logo</label>
                      <span className="ml-2 text-info"> Ratio 1:1 (500 x 500 px) </span>
                      <div className="custom-file text-left">
                        <input
                          type="file"
                          name="image"
                          id="brand-image"
                          className="custom-file-input"
                          accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                          onChange={(e) => {
                            setImageFile(e.target.files[0]);
                            setBrandImage(URL.createObjectURL(e.target.files[0]));
                          }}
                        />
                        <label className="custom-file-label" htmlFor="brand-image">Choose file</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-3 mt-4">
                  <button type="reset" className="btn btn-secondary px-4">Reset</button>
                  <button type="submit" className="btn btn-secondary px-4">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandUpdate;
