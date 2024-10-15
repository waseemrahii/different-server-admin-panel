import React, { useState, useEffect } from 'react';
import { FiSkipBack } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiUrl from '../../../../ApiUrl';
import PreviewImage from '../../../../components/FormInput/PreviewImage';
import FileUpload from '../../../../components/FormInput/FileUpload';

const AddBannerForm = () => {
    const [bannerType, setBannerType] = useState('Main Section Banner');
    const [resourceType, setResourceType] = useState('product');
    const [productId, setProductId] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [bannerImage, setBannerImage] = useState(null);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [token, setToken] = useState(''); 
    useEffect(() => {
        // Retrieve token from local storage
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);

        const fetchData = async () => {
            try {
                const endpoints = {
                    product: `${ApiUrl}products/`,
                    category: `${ApiUrl}categories/`,
                    brand: `${ApiUrl}brands/`
                };

                const response = await axios.get(endpoints[resourceType]);
                if (resourceType === 'product') setProducts(response.data.doc);
                else if (resourceType === 'category') setCategories(response.data.doc);
                else if (resourceType === 'brand') setBrands(response.data.doc);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [resourceType]);

    const handleBannerTypeChange = (e) => setBannerType(e.target.value);
    const handleResourceTypeChange = (e) => {
        setResourceType(e.target.value);
        setProductId('');
        setCategory('');
        setBrand('');
    };
    const handleProductChange = (e) => setProductId(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleBrandChange = (e) => setBrand(e.target.value);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setBannerImage(reader.result);
            };
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('bannerType', bannerType);
        formData.append('resourceType', resourceType);
        formData.append('resourceId', {
            product: productId,
            category,
            brand
        }[resourceType]);
        formData.append('url', e.target.url.value);
        formData.append('publish', false); // Example publish value
        if (bannerImage) formData.append('bannerImage', bannerImage);
    
        try {
            const response = await axios.post(`${ApiUrl}banners`, formData, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Add token in headers
                }
            });
    
            if (response.status === 200 || response.status === 201) {
                toast.success('Banner submitted successfully');
                e.target.reset(); // Clear the form after successful submission
                setBannerType('Main Section Banner');
                setResourceType('product');
                setProductId('');
                setCategory('');
                setBrand('');
                setBannerImage(null);
            } else {
                toast.error('Failed to submit banner');
                console.log('Failed to submit banner:', response.statusText);
            }
        } catch (error) {
            toast.error('Error submitting banner');
            console.error('Error submitting banner:', error.response ? error.response.data : error.message);
        }
    };
    
    return (
        <div className="content container-fluid snipcss-j33vn">
            <ToastContainer />
            <div className="d-flex justify-content-between mb-3">
                <div>
                    <h2 className="h1 mb-1 text-capitalize d-flex align-items-center gap-2">
                        <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png" alt="Banner Icon" /> Add Banner
                    </h2>
                </div>
                <div>
                    <Link to='/bannersetup' className="btn flex align-items-center gap-2 text-white" style={{ background: "lightgreen" }}>
                        <FiSkipBack /> Back
                    </Link>
                </div>
            </div>
            <div className="row text-start">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} encType="multipart/form-data" className="banner_form">
                                <input type="hidden" name="_token" value="PwtXfCOB4jJW4r7EFP7tbQ85VIeh6Q28sCgcjoVB" autoComplete="off" />
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="banner_type" className="title-color text-capitalize">Banner Type</label>
                                            <select className="form-control" name="banner_type" id="banner_type" value={bannerType} onChange={handleBannerTypeChange}>
                                                <option value="Main Banner">Main Banner</option>
                                                <option value="Popup Banner">Popup Banner</option>
                                                <option value="Footer Banner">Footer Banner</option>
                                                <option value="Main Section Banner">Main Section Banner</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="url" className="title-color text-capitalize">Banner URL</label>
                                            <input type="url" name="url" className="form-control" id="url" required placeholder="Enter URL" defaultValue="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="resource_type" className="title-color text-capitalize">Resource Type</label>
                                            <select className="form-control" name="resource_type" id="resource_type" value={resourceType} onChange={handleResourceTypeChange}>
                                                <option value="product">Product</option>
                                                <option value="category">Category</option>
                                                {/* <option value="shop">Shop</option> */}
                                                {/* <option value="brand">Brand</option> */}
                                            </select>
                                        </div>
                                        {resourceType === 'product' && (
                                            <div className="form-group">
                                                <label htmlFor="product_id" className="title-color text-capitalize">Product</label>
                                                <select className="form-control" name="product_id" id="product_id" value={productId} onChange={handleProductChange}>
                                                    {products.map(product => (
                                                        <option key={product._id} value={product._id}>{product.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'category' && (
                                            <div className="form-group">
                                                <label htmlFor="category_id" className="title-color text-capitalize">Category</label>
                                                <select className="form-control" name="category_id" id="category_id" value={category} onChange={handleCategoryChange}>
                                                    {categories.map(cat => (
                                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'shop' && (
                                            <div className="form-group">
                                                <label htmlFor="shop_id" className="title-color text-capitalize">Shop</label>
                                                <select className="form-control" name="shop_id" id="shop_id" value={shop} onChange={handleShopChange}>
                                                    {shops.map(shopItem => (
                                                        <option key={shopItem._id} value={shopItem._id}>{shopItem.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'brand' && (
                                            <div className="form-group">
                                                <label htmlFor="brand_id" className="title-color text-capitalize">Brand</label>
                                                <select className="form-control" name="brand_id" id="brand_id" value={brand} onChange={handleBrandChange}>
                                                    {brands.map(brandItem => (
                                                        <option key={brandItem._id} value={brandItem._id}>{brandItem.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                      
                                    </div>
                                    
                                 
                                    <div className="col-lg-6 ">
                    <PreviewImage
                    image={bannerImage}
                      altText="Banner image"
                      style={{ width: "200px" }}
                    />
                    <FileUpload
                      name="image"
                      label="Banner Image (Ratio 1:1)"
                      accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                      onChange={handleImageChange}
                    />
                  </div>

                                    <div className="col-md-12 mt-3 text-end">
                                        <button type="submit" className="btn bg-green-400 text-white hover:bg-green-600 " style={{color:'white'}}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBannerForm;

