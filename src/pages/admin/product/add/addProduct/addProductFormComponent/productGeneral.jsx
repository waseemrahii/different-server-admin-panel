// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import FormSection from "../../../../../../components/FormInput/FormSection";
// import FormSelect from "../../../../../../components/FormInput/FormSelect";
// import FormInput from "../../../../../../components/FormInput/FormInput";
// import { AiOutlineClose, AiOutlineSync } from 'react-icons/ai';
// import {
//   fetchAttributes,
//   fetchBrands,
//   fetchCategories,
//   fetchColors,
// } from "../../../../../../redux/slices/admin/categorybrandSlice";


// // Function to generate a 6-digit random SKU
// const generateSKU = () => {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// };

// const ProductGeneral = ({ formData, handleChange, setFormData }) => {
//   const dispatch = useDispatch();
//   const {
//     categories,
//     subCategories,
//     subSubCategories,
//     brands,
//   } = useSelector((state) => state.category);

//   // State for tags
//   const [tags, setTags] = useState(formData.tags ? formData.tags.split(',') : []);
//   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
//   const [filteredSubSubCategories, setFilteredSubSubCategories] = useState([]);

//   // Fetch categories, brands, colors, and attributes
//   useEffect(() => {
//     dispatch(fetchCategories());
//     dispatch(fetchBrands());
//     dispatch(fetchColors());
//     dispatch(fetchAttributes());
//   }, [dispatch]);

//   // Fetch subcategories based on selected category
//   useEffect(() => {
//     if (formData.category) {
//       dispatch(fetchSubCategories(formData.category));
//     }
//   }, [dispatch, formData.category]);

//   // Fetch sub-subcategories based on selected subcategory
//   useEffect(() => {
//     if (formData.subCategorySlug) {
//       dispatch(fetchSubSubCategories(formData.subCategorySlug));
//     }
//   }, [dispatch, formData.subCategorySlug]);

//   // SKU generation
//   const handleGenerateSKU = () => {
//     const newSKU = generateSKU();
//     setFormData(prevData => ({
//       ...prevData,
//       sku: newSKU,
//     }));
//   };

//   // Adding tags
//   const handleTagInput = (e) => {
//     if (e.key === 'Enter' && e.target.value.trim()) {
//       e.preventDefault(); // Prevent form submission
//       const newTag = e.target.value.trim();
//       if (!tags.includes(newTag)) {
//         setTags([...tags, newTag]);
//         setFormData(prevData => ({
//           ...prevData,
//           tags: [...tags, newTag].join(','),
//         }));
//       }
//       e.target.value = ''; // Clear input after adding tag
//     }
//   };

//   // Removing a tag
//   const removeTag = (indexToRemove) => {
//     const updatedTags = tags.filter((_, index) => index !== indexToRemove);
//     setTags(updatedTags);
//     setFormData(prevData => ({
//       ...prevData,
//       tags: updatedTags.join(','),
//     }));
//   };

//   // Filter subcategories
//   useEffect(() => {
//     const selectedCategory = formData.category;
//     const relevantSubCategories = subCategories.filter(sub => sub.categoryId === selectedCategory);
//     setFilteredSubCategories(relevantSubCategories);

//     // Reset sub-sub-category
//     setFormData(prevData => ({
//       ...prevData,
//       subCategorySlug: '',
//       subSubCategorySlug: '',
//     }));

//     // Clear filtered sub-sub-categories
//     setFilteredSubSubCategories([]);
//   }, [formData.category, subCategories, setFormData]);

//   useEffect(() => {
//     console.log('subSubCategories:', subSubCategories);
//     console.log('Type of subSubCategories:', typeof subSubCategories);
//     const selectedSubCategory = formData.subCategorySlug;
//     const relevantSubSubCategories = Array.isArray(subSubCategories)
//         ? subSubCategories.filter(subSub => subSub.subCategoryId === selectedSubCategory)
//         : [];
//     setFilteredSubSubCategories(relevantSubSubCategories);

//     // Reset sub-sub-category
//     setFormData(prevData => ({
//         ...prevData,
//         subSubCategorySlug: '',
//     }));
// }, [formData.subCategorySlug, subSubCategories, setFormData]);

//   return (
//     <>
//       {/* General Product Information Section */}
//       <FormSection title="General Information">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> {/* Reduced gap size */}

//           {/* Category */}
//           <div className="flex flex-col px-2">
//             <FormSelect
//               label="Category"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               options={categories.length > 0 ? categories.map((category) => ({
//                 value: category._id,
//                 label: category.name,
//               })) : [{ value: '', label: 'Not Category Found' }]}
//               required
//             />
//           </div>

//           {/* Sub-Category */}
//           <div className="flex flex-col px-2">
//             <FormSelect
//               label="Sub-Category"
//               name="subCategorySlug"
//               value={formData.subCategorySlug}
//               onChange={handleChange}
//               options={filteredSubCategories.length > 0 ? filteredSubCategories.map((subCategory) => ({
//                 value: subCategory._id,
//                 label: subCategory.name,
//               })) : [{ value: '', label: 'Not Sub-Category Found' }]}
//             />
//           </div>

//           {/* Sub-Sub-Category */}
//           <div className="flex flex-col px-2">
//             <FormSelect
//               label="Sub-Sub-Category"
//               name="subSubCategorySlug"
//               value={formData.subSubCategorySlug}
//               onChange={handleChange}
//               options={filteredSubSubCategories.length > 0 ? filteredSubSubCategories.map((subSubCategory) => ({
//                 value: subSubCategory.slug,
//                 label: subSubCategory.name,
//               })) : [{ value: '', label: 'Not Sub-Sub-Category Found' }]}
//             />
//           </div>

//           {/* Brand */}
//           <div className="flex flex-col px-2">
//             <FormSelect
//               label="Brand"
//               name="brand"
//               value={formData.brand}
//               onChange={handleChange}
//               options={brands.length > 0 ? brands.map((brand) => ({
//                 value: brand._id,
//                 label: brand.name,
//               })) : [{ value: '', label: 'Not Brand Found' }]}
//               required
//             />
//           </div>

//           {/* Product Type */}
//           <div className="flex flex-col px-2">
//             <FormSelect
//               label="Product Type"
//               name="productType"
//               value={formData.productType}
//               onChange={handleChange}
//               options={[
//                 { value: 'physical', label: 'Physical' },
//                 { value: 'digital', label: 'Digital' },
//               ]}
//               required
//             />
//           </div>
//           {/* Stock  */}

//           <div className="flex flex-col px-2">
//             <FormInput
//               label="Product Stock"
//               name="stock"
//               value={formData.stock}
//               onChange={handleChange}

//               required
//             />
//           </div>

//           {/* Conditionally Render Digital Product Type */}
//           {formData.productType === 'digital' && (
//             <div className="flex flex-col px-2">
//               <FormSelect
//                 label="Digital Product Type"
//                 name="digitalProductType"
//                 value={formData.digitalProductType}
//                 onChange={handleChange}
//                 options={[
//                   { value: 'readyAfterSell', label: 'Ready After Sell' },
//                   { value: 'readyProduct', label: 'Ready Product' },
//                 ]}
//               />
//             </div>
//           )}

//           {/* SKU */}
//           <div className="flex flex-col px-2">
//             <label className="font-semibold">SKU</label>
//             <div className="form-group flex items-center">
//               <input
//                 type="text"
//                 className="form-control form-control-user flex-1"
//                 name="sku"
//                 placeholder="SKU"
//                 value={formData.sku}
//                 readOnly // Keep SKU input read-only if you want to prevent editing
//               />
//               <AiOutlineSync
//                 onClick={handleGenerateSKU}
//                 className="cursor-pointer text-green-500 ml-2"
//                 title="Generate SKU"
//                 size={24} // Set size for the icon
//               />
//             </div>
//           </div>

//           {/* Unit */}
//           <div className="flex flex-col px-2">
//             <FormSelect
//               label="Unit"
//               name="unit"
//               value={formData.unit}
//               onChange={handleChange}
//               options={[
//                 { value: 'piece', label: 'Piece' },
//                 { value: 'kg', label: 'Kilogram' },
//                 { value: 'liter', label: 'Liter' },
//                 { value: 'box', label: 'Box' },
//                 { value: 'packet', label: 'Packet' },
//                 { value: 'dozen', label: 'Dozen' },
//                 { value: 'mL', label: 'Milliliter' },
//                 { value: 'g', label: 'Gram' },
//                 { value: 'ton', label: 'Ton' },
//                 { value: 'bottle', label: 'Bottle' },
//                 { value: 'set', label: 'Set' },
//               ]}
//               required
//             />
//           </div>
//         </div>

//         {/* Tags Section */}
//         <div className="flex flex-col mt-4">
//           <label className="font-semibold">Tags</label>
//           <div className="flex flex-wrap border border-gray-300 p-2 rounded">
//             {tags.map((tag, index) => (
//               <span key={index} className="bg-green-500 text-white rounded-full px-2 py-1 mr-2 flex items-center">
//                 {tag}
//                 <AiOutlineClose
//                   className="cursor-pointer ml-1"
//                   onClick={() => removeTag(index)}
//                 />
//               </span>
//             ))}
//             <input
//               type="text"
//               className="flex-1 border-none focus:outline-none"
//               placeholder="Press Enter to add tags"
//               onKeyDown={handleTagInput}
//             />
//           </div>
//         </div>
//       </FormSection>
//     </>
//   );
// };

// export default ProductGeneral;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineClose, AiOutlineSync } from "react-icons/ai";
// import {
//   fetchCategories,
//   fetchBrands,
//   fetchColors,
//   fetchAttributes,
//   fetchSubCategories,
//   fetchSubSubCategories,
// } from "../../../../redux/admin/categorybrandSlice";
import FormSection from "../../../../../../components/FormInput/FormSection";
import FormSelect from "../../../../../../components/FormInput/FormSelect";
import FormInput from "../../../../../../components/FormInput/FormInput";
import {
  fetchAttributes,
  fetchBrands,
  fetchCategories,
  fetchColors,
} from "../../../../../../redux/slices/admin/categorybrandSlice";

// Function to generate a 6-digit random SKU
const generateSKU = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const ProductGeneral = ({ formData, handleChange, setFormData }) => {
  const dispatch = useDispatch();
  const { categories, subCategories, subSubCategories, brands } = useSelector(
    (state) => state.category
  );

  // State for tags
  //         tagsArray.forEach((tag) => productFormData.append("tags[]", tag));

  const [tags, setTags] = useState(
    formData.tags ? formData.tags.split(",") : []
  );
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);
  const [filteredSubSubCategories, setFilteredSubSubCategories] = useState([]);

  // Fetch categories, brands, colors, and attributes on mount
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchAttributes());
  }, [dispatch]);

  // Fetch subcategories based on selected category
  useEffect(() => {
    if (formData.category) {
      // console.log("SubCategories before filter:", subCategories);
      const relevantSubCategories = subCategories.filter(
        (sub) => sub.mainCategory._id === formData.category
      );
      // console.log("Filtered SubCategories:", relevantSubCategories);
      setFilteredSubCategories(relevantSubCategories);
      setFilteredSubSubCategories([]); // Reset sub-sub-categories
    }
  }, [formData.category, subCategories]);

  useEffect(() => {
    if (formData.subCategorySlug) {
      // console.log("SubSubCategories before filter:", subSubCategories);
      const relevantSubSubCategories =
        subSubCategories.doc?.filter(
          (subSub) => subSub.subCategory._id === formData.subCategorySlug
        ) || [];
      // console.log("Filtered SubSubCategories:", relevantSubSubCategories);
      setFilteredSubSubCategories(relevantSubSubCategories);
    }
  }, [formData.subCategorySlug, subSubCategories]);

  // console.log("sub cateogories", subCategories)
  // console.log("sub sub cateogories", subSubCategories)
  // SKU generation
  const handleGenerateSKU = () => {
    const newSKU = generateSKU();
    setFormData((prevData) => ({
      ...prevData,
      sku: newSKU,
    }));
  };

  // Adding tags
  const handleTagInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault(); // Prevent form submission
      const newTag = e.target.value.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setFormData((prevData) => ({
          ...prevData,
          tags: [...tags, newTag].join(","),
        }));
      }
      e.target.value = ""; // Clear input after adding tag
    }
  };

  // Removing a tag
  const removeTag = (indexToRemove) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
    setFormData((prevData) => ({
      ...prevData,
      tags: updatedTags.join(","),
    }));
  };

  return (
    <>
      {/* General Product Information Section */}
      <FormSection title="General Information">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {" "}
          {/* Reduced gap size */}
          {/* Category */}
          <div className="flex flex-col px-2">
            <FormSelect
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={
                categories.length > 0
                  ? categories.map((category) => ({
                      value: category._id,
                      label: category.name,
                    }))
                  : [{ value: "", label: "Not Category Found" }]
              }
              required
            />
          </div>
          {/* Sub-Category */}
          <div className="flex flex-col px-2">
            {/* <FormSelect
              label="Sub-Category"
              name="subCategorySlug"
              value={formData.subCategorySlug}
              onChange={handleChange}
              options={filteredSubCategories.length > 0 ? filteredSubCategories.map((subCategory) => ({
                value: subCategory._id,
                label: subCategory.name,
              })) : [{ value: '', label: 'Not Sub-Category Found' }]}
            /> */}

            <FormSelect
              label="Sub-Category"
              name="subCategorySlug"
              value={formData.subCategorySlug}
              onChange={(e) =>
                setFormData({ ...formData, subCategorySlug: e.target.value })
              }
              options={
                filteredSubCategories.length > 0
                  ? filteredSubCategories.map((subCategory) => ({
                      value: subCategory._id, // Ensure you're setting the correct _id here
                      label: subCategory.name,
                    }))
                  : [{ value: "", label: "Not Sub-Category Found" }]
              }
            />
          </div>
          {
            // console.log("sub catoegyr ", filteredSubCategories)
          }
          {/* Sub-Sub-Category */}
          <div className="flex flex-col px-2">
            <FormSelect
              label="Sub-Sub-Category"
              name="subSubCategorySlug"
              value={formData.subSubCategorySlug}
              onChange={handleChange}
              options={
                filteredSubSubCategories.length > 0
                  ? filteredSubSubCategories.map((subSubCategory) => ({
                      value: subSubCategory._id, // Ensure correct field here
                      label: subSubCategory.name,
                    }))
                  : [{ value: "", label: "Not Sub-Sub-Category Found" }]
              }
            />
          </div>
          {/* Brand */}
          <div className="flex flex-col px-2">
            <FormSelect
              label="Brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              options={
                brands.length > 0
                  ? brands.map((brand) => ({
                      value: brand._id,
                      label: brand.name,
                    }))
                  : [{ value: "", label: "Not Brand Found" }]
              }
              required
            />
          </div>
          {/* Product Type */}
          <div className="flex flex-col px-2">
            <FormSelect
              label="Product Type"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              options={[
                { value: "physical", label: "Physical" },
                { value: "digital", label: "Digital" },
              ]}
              required
            />
          </div>
          {/* Conditionally Render Digital Product Type */}
          {formData.productType === "digital" && (
            <div className="flex flex-col px-2">
              <FormSelect
                label="Digital Product Type"
                name="digitalProductType"
                value={formData.digitalProductType}
                onChange={handleChange}
                options={[
                  { value: "readyAfterSell", label: "Ready After Sell" },
                  { value: "readyProduct", label: "Ready Product" },
                ]}
              />
            </div>
          )}
          {/* Stock  */}
          <div className="flex flex-col px-2">
            <FormInput
              label="Product Stock"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
          {/* SKU */}
          <div className="flex flex-col px-2">
            <label className="font-semibold">SKU</label>
            <div className="form-group flex items-center">
              <input
                type="text"
                className="form-control form-control-user flex-1"
                name="sku"
                placeholder="SKU"
                value={formData.sku}
                readOnly // Keep SKU input read-only to prevent manual editing
              />
              <AiOutlineSync
                onClick={handleGenerateSKU}
                className="cursor-pointer text-green-500 ml-2"
                title="Generate SKU"
                size={24} // Set size for the icon
              />
            </div>
          </div>
          {/* Unit */}
          <div className="flex flex-col px-2">
            <FormSelect
              label="Unit"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              options={[
                { value: "piece", label: "Piece" },
                { value: "kg", label: "Kilogram" },
                { value: "liter", label: "Liter" },
                { value: "box", label: "Box" },
                { value: "packet", label: "Packet" },
                { value: "dozen", label: "Dozen" },
                { value: "mL", label: "Milliliter" },
                { value: "g", label: "Gram" },
                { value: "ton", label: "Ton" },
                { value: "bottle", label: "Bottle" },
                { value: "set", label: "Set" },
              ]}
              required
            />
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex flex-col mt-4">
          <label className="font-semibold">Tags</label>
          <div className="flex flex-wrap border border-gray-300 p-2 rounded">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 p-1 m-1 rounded inline-flex items-center"
              >
                {tag}
                <AiOutlineClose
                  onClick={() => removeTag(index)}
                  className="cursor-pointer ml-1 text-red-500"
                />
              </span>
            ))}
            <input
              type="text"
              className="flex-1 border-none focus:ring-0 p-1"
              placeholder="Press Enter to add tag"
              onKeyPress={handleTagInput}
            />
          </div>
        </div>
      </FormSection>
    </>
  );
};

export default ProductGeneral;
