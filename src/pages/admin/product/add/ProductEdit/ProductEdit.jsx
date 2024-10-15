import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for react-quill
import './ProductEdit.css'; // Import your custom styles

const ProductEdit = () => {
  // Initial state for the product form
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [error, setError] = useState('');

  // Handle changes for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productName') {
      setProductName(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!productName) {
      setError('Please fill in all required fields.');
      return;
    }

    // Process form data here (e.g., send to API)
    console.log({
      productName,
      productDescription,
    });

    // Clear form after submission
    setProductName('');
    setProductDescription('');
    setError('');
  };

  return (
    <div className="product-edit-container">
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <ReactQuill
            value={productDescription}
            onChange={setProductDescription}
            className="quill-editor"
            theme="snow"
            placeholder="Write the product description here..."
          />
        </div>
       
      </form>
    </div>
  );
};

export default ProductEdit;
