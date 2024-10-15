
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  fetchCategories,
  fetchBrands,
  fetchColors,
  fetchAttributes,
  fetchSubCategories,
  fetchSubSubCategories,
} from '../../../../../redux/admin/categorybrandSlice';
import './form.css';

const InhouseProductUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get product ID from URL params
//    const id = "66c85fe218cc2ff2c002e421";
  const { categories, subCategories, subSubCategories, brands, colors, attributes } = useSelector((state) => state.category);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    subCategorySlug: '',
    subSubCategorySlug: '',
    brand: '',
    productType: '',
    digitalProductType: '',
    sku: '',
    unit: '',
    tags: '',
    price: '',
    discount: '',
    discountType: '',
    discountAmount: '',
    taxAmount: '',
    taxIncluded: false,
    minimumOrderQty: '',
    shippingCost: '',
    stock: '',
    isFeatured: false,
    videoLink: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [productAttributes, setProductAttributes] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);


 
  
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchAttributes());
  }, [dispatch]);

  useEffect(() => {
    if (formData.category) {
      dispatch(fetchSubCategories(formData.category));
    }
  }, [dispatch, formData.category]);

  useEffect(() => {
    if (formData.subCategorySlug) {
      dispatch(fetchSubSubCategories(formData.subCategorySlug));
    }
  }, [dispatch, formData.subCategorySlug]);

 

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/api/products/${id}`)
        .then((response) => {
          const product = response.data.docs;
  
          // Find the corresponding slugs for category, subcategory, and subsubcategory using their _ids
          const selectedCategory = categories.find(category => category._id === product.category._id);
          const selectedSubCategory = subCategories.find(subCategory => subCategory._id === product.subCategory._id);
          const selectedSubSubCategory = subSubCategories.find(subSubCategory => subSubCategory._id === product.subSubCategory);
  
          setFormData({
            name: product.name || '',
            description: product.description || '',
            category: selectedCategory ? selectedCategory.slug : '', // Set the slug for category
            subCategorySlug: selectedSubCategory ? selectedSubCategory.slug : '',
            subSubCategorySlug: selectedSubSubCategory ? selectedSubSubCategory.slug : '',
            brand: product.brand._id || '', // Assuming brand._id is correct
            productType: product.productType || '',
            digitalProductType: product.digitalProductType || '',
            sku: product.sku || '',
            unit: product.unit || '',
            tags: product.tags || '',
            price: product.price || '',
            discount: product.discount || '',
            discountType: product.discountType || '',
            discountAmount: product.discountAmount || '',
            taxAmount: product.taxAmount || '',
            taxIncluded: product.taxIncluded || false,
            minimumOrderQty: product.minimumOrderQty || '',
            shippingCost: product.shippingCost || '',
            stock: product.stock || '',
            isFeatured: product.isFeatured || false,
            videoLink: product.videoLink || '',
          });
          setSelectedColors(product.colors.map(color => color._id));

          // setSelectedColors(product.colors || []);
          setProductAttributes(product.attributes || []);
  
          // Handle images and thumbnail if needed
          setThumbnail(product.thumbnail);
          setImagePreview(product.thumbnail ? `http://localhost:3000/${product.thumbnail}` : null);
          setImages(product.images || []);
          setImagePreviews(product.images ? product.images.map(img => `http://localhost:3000/${img}`) : []);
        })
        .catch((error) => {
          console.error("There was an error fetching the product data!", error);
        });
    }
  }, [id, categories, subCategories, subSubCategories]);
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDescriptionChange = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...files]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleAttributeChange = (e) => {
    setSelectedAttribute(e.target.value);
  };

  const addAttribute = () => {
    if (selectedAttribute) {
      const selectedAttr = attributes.find((attr) => attr._id === selectedAttribute);
      if (selectedAttr) {
        setProductAttributes((prevAttrs) => [
          ...prevAttrs,
          { _id: selectedAttr._id, name: selectedAttr.name },
        ]);
        setSelectedAttribute('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productFormData = new FormData();

    for (const key in formData) {
      let value = formData[key];

      // if (key === 'tags') {
      //   const tagsArray = value.split(',').map((tag) => tag.trim()).filter((tag) => tag);
      //   tagsArray.forEach((tag) => productFormData.append('tags[]', tag));


    if (key === 'tags') {
      let tagsArray = [];

      // Check if value is a string
      if (typeof value === 'string') {
        tagsArray = value.split(',').map((tag) => tag.trim()).filter((tag) => tag);
      } else if (Array.isArray(value))
         {
        // If value is already an array
        tagsArray = value;
      }

      // Append tags to FormData
      tagsArray.forEach((tag) => productFormData.append('tags[]', tag));
    } 
       else {
        switch (key) {
          case 'price':
          case 'discount':
          case 'discountAmount':
          case 'taxAmount':
          case 'shippingCost':
          case 'minimumOrderQty':
          case 'stock':
            value = parseFloat(value) || 0;
            break;
          case 'taxIncluded':
          case 'isFeatured':
            value = value === 'true';
            break;
          default:
            value = String(value);
            break;
        }
        if (key === 'digitalProductType' && formData.productType !== 'digital') {
          continue;  // Skip adding this field if productType is not 'digital'
        }
        productFormData.append(key, value);
      }
    }

    if (thumbnail) {
      productFormData.append('thumbnail', thumbnail);
    }

    images.forEach((image) => {
      productFormData.append('images', image);
    });

    selectedColors.forEach((color) => {
      productFormData.append('colors[]', color);
    });

    productAttributes.forEach((attribute) => {
      productFormData.append('attributes[]', attribute._id);
    });

           // Log form data to console
           for (let [key, value] of productFormData.entries()) {
            console.log(key, value);
          }

    try {

      await axios.put(`http://localhost:3000/api/products/${id}`, productFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product updated successfully!');
    } catch (error) {
      setErrorMessage(`Error updating product: ${error.message}`);
      console.error(error);
    }
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const removeThumbnail = () => {
    setThumbnail(null);
    setImagePreview('');
  };


  return (
    <div>
      <main id="content" role="main" className="main pointer-event">
        <div className="content container-fluid">
          <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
            <h2 className="h1 mb-0 d-flex gap-2">
              <img src="/inhouse-product-list.png" alt="" />
              Update Product
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg space-y-4 p-10">
       

<div className="col-12 lightshadow p-5  shadow-md  rounded-md">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Product Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="p-2 border rounded" required />
      </div>
   

<div className="flex flex-col gap-2">
                <label className="font-semibold">Product Description</label>
                <ReactQuill
                  name="description"
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  className="quill-editor p-2 border rounded"
                  theme="snow"
                  placeholder="Write the product description here..."
                />
              </div>
      </div>

<div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">
  <div className="flex flex-col w-full lg:w-1/3 gap-1">
    <label className="font-semibold">Category</label>
    {console.log("form ==========", formData.category)}
    <select name="category" value={formData.category} 
    onChange={handleChange} className="p-2 border rounded bg-white" required>
      <option value="">Select Category</option>
      {categories.map(category => (
        <option key={category._id} value={category.slug}>{category.name}</option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1">
    <label className="font-semibold">Sub-Category</label>
    <select name="subCategorySlug" value={formData.subCategorySlug}
     onChange={handleChange} className="p-2 border rounded bg-white">
      <option value="">Select Sub-Category</option>
      {subCategories.map(subCategory => (
        <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1">
    <label className="font-semibold">Sub-Sub-Category</label>
    <select name="subSubCategorySlug" value={formData.subSubCategorySlug}
     onChange={handleChange} className="p-2 border rounded bg-white">
      <option value="">Select Sub-Sub-Category</option>
      {subSubCategories.map(subSubCategory => (
        <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
    <label className="font-semibold">Brand</label>
    <select name="brand" value={formData.brand} onChange={handleChange} className="p-2 bg-white border rounded" required>
      <option value="">Select Brand</option>
      {brands.map(brand => (
        // <option key={brand._id} value={brand._id}>{brand.name}</option>
        <option key={brand._id} value="668e3d6bd14dbdf8f5904f3c">{brand.name}</option>
      ))}
    </select>
  </div>



      {/* Product Type */}
      <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
        <label className="font-semibold">Product Type</label>
        <select
          name="productType"
          value={formData.productType}
          onChange={handleChange}
          className="p-2 border rounded bg-white"
          required
        >
          <option value="" disabled>Select Product Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>

      {/* Conditionally Render Digital Product Type */}
      {formData.productType === 'digital' && (
        <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
          <label className="font-semibold">Digital Product Type</label>
          <select
            name="digitalProductType"
            value={formData.digitalProductType}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="" disabled>Select Digital Product Type</option>
            <option value="readyAfterSell">Ready After Sell</option>
            <option value="readyProduct">Ready Product</option>
          </select>
        </div>
      )}


  <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
    <label className="font-semibold">SKU</label>
    <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" className="p-2 border rounded" required />
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
    <label className="font-semibold">Unit</label>
    <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" className="p-2 border rounded" required />
  </div>

  <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
    <label className="font-semibold">Tags</label>
    <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" className="p-2 border rounded" />
  </div>
</div>

<div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md" 
>

<div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Price</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" required />
      </div>

      <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Discount</label>
        <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" className="p-2 border rounded" />
      </div>

<div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Discount Type</label>
        <select name="discountType" value={formData.discountType} 
        onChange={handleChange} className="p-2 border rounded bg-white">
          <option value="">Select Discount Type</option>
          <option value="percent">Percentage</option>
          <option value="flat">Flat Amount</option>
        </select>
      </div>

      <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Discount Amount</label>
        <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4">
        <label className="font-semibold">Tax Amount</label>
        <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col w-full lg:w-1/4 gap-1 mb-4 ">
        <label className="font-semibold">Tax Included</label>
       <div className="row flex gap-3 justify-center items-center">

        <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} className="mr-2" />
        <span className="text-sm text-gray-600">Include tax in price</span>
       </div>
      </div>
 </div>
 
 <div className="col-12  p-8 flex flex-wrap  shadow-md  rounded-md " 
 >
 <div className="flex flex-col w-full lg:w-1/3 gap-2">
 <label className="font-semibold">Minimum Order Quantity</label>
        <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col w-full lg:w-1/3 gap-2">
      <label className="font-semibold">Shipping Cost</label>
        <input type="number" name="shippingCost" value={formData.shippingCost} onChange={handleChange} placeholder="Shipping Cost" className="p-2 border rounded" />
      </div>

      <div className="flex flex-col w-full lg:w-1/3 gap-2">
      <label className="font-semibold">Stock</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="p-2 border rounded" />
      </div>

      </div>

<div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Video Link</label>
        <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" className="p-2 border rounded" />
      </div>
</div>

<div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">

<div className="flex flex-col w-full lg:w-1/2 gap-2">
<label className="font-semibold">Colors</label>
  <div className="flex flex-wrap gap-2">
    {colors.map((color) => (
      <label key={color._id} className="inline-flex items-center">
        <input
          type="checkbox"
          checked={selectedColors.includes(color._id)}
          onChange={() => handleColorChange(color._id)}
          className="form-checkbox"
        />
        <span className="ml-2">{color.name}</span>
      </label>
    ))}
  </div>
</div>

<div className="flex flex-col w-full lg:w-1/2 gap-2">

  <label className="font-semibold">Attributes</label>
  <div className="flex w-full gap-2">

  <select name="attributes" value={selectedAttribute} 
  onChange={handleAttributeChange} className="px-2 border rounded  w-full bg-white">
    <option value="">Select Attribute</option>
    {attributes.map(attr => (
      <option key={attr._id} value={attr._id}>{attr.name}</option>
    ))}
  </select>
  <button type="button" onClick={addAttribute} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Add</button>
  </div>
  <ul className="mt-2">
    {productAttributes.map(attr => (
      <li key={attr._id} className="flex justify-between items-center p-2 border-b">
        <span>{attr.name}</span>
        <button type="button" onClick={() => setProductAttributes(prevAttrs => prevAttrs.filter(a => a._id !== attr._id))} className="text-red-500">Remove</button>
      </li>
    ))}
  </ul>
</div>
</div>
   

    <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Product Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="p-2 border rounded"
          />
        </div>
        {imagePreview && (
          <div className="flex gap-2 flex-wrap">
            <div className="relative w-24 h-24">
              <img
                src={imagePreview}
                alt="Thumbnail Preview"
                className="object-cover w-full h-full rounded-md"
              />
              <button
                type="button"
                onClick={removeThumbnail}
                className="absolute top-0 right-0 p-1 text-white bg-red-600 rounded-full"
              >
                X
              </button>
            </div>
          </div>
        )}

        {/* Images Input and Previews */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Product Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="p-2 border rounded"
          />
        </div>
        {imagePreviews.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative w-24 h-24">
                <img src={preview} alt={`Preview ${index}`} className="object-cover w-full h-full rounded-md" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 p-1 text-white bg-red-600 rounded-full"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

            {/* Add other fields similar to the above */}
            <button type="submit" className="btn btn-primary">Update Product</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default InhouseProductUpdate;
