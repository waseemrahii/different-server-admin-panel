import React, { useState, useEffect } from 'react';
import { FiSkipBack } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiUrl from '../../../../ApiUrl';
import PreviewImage from '../../../../components/FormInput/PreviewImage';
import FileUpload from '../../../../components/FormInput/FileUpload';

const BannerUpdateForm = () => {
    const { id } = useParams(); // Get the id from the URL
    const [bannerType, setBannerType] = useState('Main Section Banner');
    const [resourceType, setResourceType] = useState('product');
    const [productId, setProductId] = useState('');
    const [category, setCategory] = useState('');
    const [shop, setShop] = useState('');
    const [brand, setBrand] = useState('');
    const [bannerImage, setBannerImage] = useState(null);

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const endpoints = {
                //     product: 'http://localhost:3000/api/products/',
                //     category: 'http://localhost:3000/api/categories/',
                //     shop: 'http://localhost:3000/api/shops/',
                //     brand: 'http://localhost:3000/api/brands/'
                // };

                const endpoints = {
                    product: `${ApiUrl}products/`,
                    category: `${ApiUrl}categories/`,
                    brand: `${ApiUrl}brands/`
                };

                const response = await axios.get(endpoints[resourceType]);
                if (resourceType === 'product') setProducts(response.data.doc);
                else if (resourceType === 'category') setCategories(response.data.doc);
                else if (resourceType === 'shop') setShops(response.data.doc);
                else if (resourceType === 'brand') setBrands(response.data.doc);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [resourceType]);

    useEffect(() => {
        if (id) {
            const fetchBanner = async () => {
                try {
                    const response = await axios.get(`${ApiUrl}banners/${id}`);
                    const banner = response.data;
                    setBannerType(banner.bannerType);
                    setResourceType(banner.resourceType);
                    setProductId(banner.resourceId.product || '');
                    setCategory(banner.resourceId.category || '');
                    setShop(banner.resourceId.shop || '');
                    setBrand(banner.resourceId.brand || '');
                } catch (error) {
                    console.error('Error fetching banner:', error);
                }
            };

            fetchBanner();
        }
    }, [id]);

    const handleBannerTypeChange = (e) => setBannerType(e.target.value);
    const handleResourceTypeChange = (e) => {
        setResourceType(e.target.value);
        setProductId('');
        setCategory('');
        setShop('');
        setBrand('');
    };
    const handleProductChange = (e) => setProductId(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleShopChange = (e) => setShop(e.target.value);
    const handleBrandChange = (e) => setBrand(e.target.value);
    // const handleImageChange = (e) => setBannerImage(e.target.files[0]);

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
            shop,
            brand
        }[resourceType]);
        formData.append('url', e.target.url.value);
        formData.append('publish', false); // Example publish value
        if (bannerImage) formData.append('bannerImage', bannerImage);

        try {
            const response = id
                ? await axios.put(`${ApiUrl}banner/${id}`, formData, {
                      headers: { 'Content-Type': 'multipart/form-data' }
                  })
                : await axios.post(`${ApiUrl}banner/`, formData, {
                      headers: { 'Content-Type': 'multipart/form-data' }
                  });

            if (response.status === 200 || response.status === 201) {
                toast.success('Banner submitted successfully');
                e.target.reset(); // Clear the form after successful submission
                setBannerType('Main Section Banner');
                setResourceType('product');
                setProductId('');
                setCategory('');
                setShop('');
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
                        <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png" alt="Banner Icon" /> Update Banner
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
                                                <option value="brand">Brand</option>
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
                                                    {shops.map(shop => (
                                                        <option key={shop._id} value={shop._id}>{shop.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        {resourceType === 'brand' && (
                                            <div className="form-group">
                                                <label htmlFor="brand_id" className="title-color text-capitalize">Brand</label>
                                                <select className="form-control" name="brand_id" id="brand_id" value={brand} onChange={handleBrandChange}>
                                                    {brands.map(brand => (
                                                        <option key={brand._id} value={brand._id}>{brand.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        {/* <div className="form-group">
                                            <label htmlFor="banner_image" className="title-color text-capitalize">Banner Image</label>
                                            <input type="file" name="banner_image" className="form-control" id="banner_image" onChange={handleImageChange} />
                                        </div> */}



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
                                </div>
                                <div className="form-group mt-3 col-12 justify-end">
                                    <button type="submit" className="btn bg-green-400 text-white" style={{color:"white"}}>Save Banner</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerUpdateForm;
