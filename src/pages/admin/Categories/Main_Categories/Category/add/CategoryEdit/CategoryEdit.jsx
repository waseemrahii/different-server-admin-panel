import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiUrl from '../../../ApiUrl';
import ImageApiUrl from '../../../ImageApiUrl';

const CategoryUpdate = () => {
  const { id } = useParams(); // Extract category ID from URL params
  const navigate = useNavigate(); // To navigate after successful update
  const [selectedLang, setSelectedLang] = useState('en');
  const [categoryData, setCategoryData] = useState({
    name: '',
    priority: 0,
    logo: null,
  });

  useEffect(() => {
    if (id) {
      fetchCategoryById(id);
    }
  }, [id]);

  const fetchCategoryById = (id) => {
    axios.get(`${ApiUrl}categories/${id}`)
      .then(response => {
        const category = response.data.doc;
        setCategoryData({
          name: category.name || '',
          priority: category.priority || 0,
          logo: category.logo || null,
        });
        // Set the image preview if available
        const viewer = document.getElementById('viewer');
        if (category.logo) {
          viewer.src = `${ImageApiUrl}/uploads/${category.logo}`;
        } else {
          viewer.src = '/image-place-holder.png';
        }
      })
      .catch(error => {
        console.error('Error fetching category:', error);
        toast.error('Error fetching category');
      });
  };

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCategoryData(prevState => ({
      ...prevState,
      logo: file,
    }));
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      document.getElementById('viewer').src = reader.result;
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', categoryData.name);
    formData.append('priority', categoryData.priority);
    if (categoryData.logo) {
      formData.append('logo', categoryData.logo);
    }

    axios.put(`${ApiUrl}categories/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {
        toast.success("Category updated successfully");
        navigate('/categories'); // Navigate back to categories list or another page
      })
      .catch(error => {
        console.error('Error updating category:', error);
        toast.error('Error updating category');
      });
  };

  return (
    <div className="content container-fluid px-10">
      <ToastContainer />
      <div className="mb-3">
        <h2 className="h1 mb-0 d-flex gap-10">
          {id ? 'Edit Category' : 'Add Category'}
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-start">
              <form onSubmit={handleSubmit}>
                <ul className="nav nav-tabs w-fit-content mb-4">
                  {['en', 'sa', 'bd', 'in'].map((lang) => (
                    <li className="nav-item text-capitalize" key={lang}>
                      <span
                        className={`nav-link form-system-language-tab cursor-pointer ${selectedLang === lang ? 'active' : ''}`}
                        onClick={() => handleLangChange(lang)}
                      >
                        {lang === 'en' && 'English(EN)'}
                        {lang === 'sa' && 'Arabic(SA)'}
                        {lang === 'bd' && 'Bangla(BD)'}
                        {lang === 'in' && 'Hindi(IN)'}
                      </span>
                    </li>
                  ))}
                </ul>
                <CategoryForm
                  selectedLang={selectedLang}
                  categoryData={categoryData}
                  onInputChange={handleInputChange}
                  onFileChange={handleFileChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryForm = ({ selectedLang, categoryData, onInputChange, onFileChange }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        {['en', 'sa', 'bd', 'in'].map((lang) => (
          <div className={`form-group ${selectedLang === lang ? '' : 'd-none'} form-system-language-form`} key={lang} id={`${lang}-form`}>
            <label className="title-color">Category Name<span className="text-danger">*</span> ({lang.toUpperCase()})</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="New Category"
              required={lang === 'en'}
              value={categoryData.name}
              onChange={onInputChange}
            />
          </div>
        ))}
        <div className="form-group">
          <label className="title-color" htmlFor="priority">Priority</label>
          <select
            className="form-control"
            name="priority"
            required
            value={categoryData.priority}
            onChange={onInputChange}
          >
            <option disabled>Set Priority</option>
            {[...Array(11).keys()].map(num => (
              <option value={num} key={num}>{num}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="title-color">Category Logo</label>
          <span className="text-info"><span className="text-danger">*</span> Ratio 1:1 (500 x 500 px)</span>
          <div className="custom-file text-left">
            <input
              type="file"
              name="logo"
              id="category-image"
              className="custom-file-input"
              accept="image/*"
              onChange={onFileChange}
            />
            <label className="custom-file-label" htmlFor="category-image">Choose File</label>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0 from_part_2">
        <div className="form-group flex">
          <div className="text-center flex justify-center " style={{width:"50%"}}>
            <img
              className="upload-img-view"
              id="viewer"
              src="/image-place-holder.png"
              alt="Category Logo"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">Update</button>
      </div>
    </div>
  );
};

export default CategoryUpdate;

