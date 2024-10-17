import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import "./form.css";
import {
  fetchAttributes,
  fetchBrands,
  fetchCategories,
  fetchColors,
  fetchSubCategories,
  fetchSubSubCategories,
} from "../../../../../redux/slices/admin/categorybrandSlice";
import { createProduct } from "../../../../../redux/slices/admin/productSlice";
import ProductForm from "./addProductFormComponent/productForm";
import ProductGeneral from "./addProductFormComponent/productGeneral";
import ProductAdditional from "./addProductFormComponent/productAdditional";
import ProductVideo from "./addProductFormComponent/productVideo";
import ProductAttributes from "./addProductFormComponent/productAttributes";
import ProductImageWrapper from "./addProductFormComponent/productImageUpload";
import SeoSection from "./addProductFormComponent/SeoSection";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  // const userId = user._id;

  const {
    categories,
    subCategories,
    subSubCategories,
    brands,
    // colors,
    attributes,
  } = useSelector((state) => state.category);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    subCategorySlug: "",
    subSubCategorySlug: "",
    brand: "",
    productType: "",
    digitalProductType: "physical",
    sku: "",
    unit: "",
    tags: "",
    price: "",
    discountType: "percent",
    discountAmount: "",
    taxAmount: "",
    taxIncluded: false,
    minimumOrderQty: "",
    shippingCost: "",
    stock: "",
    isFeatured: false,
    videoLink: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [productAttributes, setProductAttributes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const handleImageChange = (e, isThumbnail = false) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isThumbnail) {
          setThumbnail(reader.result);
        } else {
          setImages((prevImages) => [...prevImages, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    }
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
      const selectedAttr = attributes.find(
        (attr) => attr._id === selectedAttribute
      );
      if (selectedAttr) {
        setProductAttributes((prevAttrs) => [
          ...prevAttrs,
          { _id: selectedAttr._id, name: selectedAttr.name },
        ]);
        setSelectedAttribute("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather all the form data into a plain object
    const productData = {
      ...formData,
      thumbnail,
      images,
      colors: selectedColors.map((color) => color._id),
      attributes: productAttributes.map((attr) => attr._id),
    };

    // Log product data to console to verify
    console.log("Submitted Product Data:", productData);

    // Dispatch action to create the product
    try {
      await dispatch(createProduct(productData));
      // Handle successful creation (e.g., redirect or show success message)
    } catch (error) {
      setErrorMessage("Failed to create product. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form p-6">
      <div className="flex gap-2 items-center py-2">
        <img
          src="/inhouse-product-list.png"
          alt=""
        />
        <h1 className="text-[1rem] font-semibold">Add New Product</h1>
      </div>
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleDescriptionChange={handleDescriptionChange}
        errorMessage={errorMessage}
      />
      <ProductGeneral
        formData={formData}
        handleChange={handleChange}
        setFormData={setFormData}
        categories={categories}
        subCategories={subCategories}
        subSubCategories={subSubCategories}
        brands={brands}
      />
      <ProductAdditional formData={formData} handleChange={handleChange} />

      <ProductAttributes
        attributes={attributes}
        selectedColors={selectedColors}
        handleColorChange={handleColorChange}
        selectedAttribute={selectedAttribute}
        handleAttributeChange={handleAttributeChange}
        addAttribute={addAttribute}
        productAttributes={productAttributes}
      />
      {/* ProductImageWrapper */}
      <ProductImageWrapper
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        images={images}
        handleImageChange={handleImageChange}
      />
      <ProductVideo formData={formData} handleChange={handleChange} />
      {/* <ProductImageUpload
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        images={images}
        handleImageChange={handleImageChange}
      /> */}

      <SeoSection />
      <div className="flex justify-end items-center mt-2">
        <button
          type="submit"
          className="btn  bg-primary  hover:bg-primary-dark"
          style={{ color: "white" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddNewProduct;
