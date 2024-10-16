import React, {
  useState,
  useEffect,
  useCallback,
  lazy,
  Suspense,
  memo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
// import {
//   fetchSubCategories,
//   createSubCategory,
//   deleteSubCategory,
//   updateSubCategory,
// } from "../../../redux/admin/subCategorySlice";
// import { fetchCategories } from "../../../redux/admin/categorySlice";
import ConfirmationModal from "../../../components/FormInput/ConfirmationModal";
import { fetchCategories } from "../../../../redux/slices/admin/categorySlice";

// Lazy load components
const SubCategoryForm = lazy(() => import("./SubCategoryForm"));
const SubCategoryList = lazy(() => import("./SubCategoryList"));

const SubCategoriess = () => {
  const dispatch = useDispatch();
  const { subCategories, loading, error } = useSelector(
    (state) => state.productSubcategory
  );
  const { categories } = useSelector((state) => state.productCategory);

  const [formData, setFormData] = useState({
    name: "",
    mainCategory: "",
    priority: "",
  });

  const [editMode, setEditMode] = useState(false);
  const formRef = React.useRef(); // Create a ref for the form section

  useEffect(() => {
    loadData();
  }, []);

  const loadData = useCallback(async () => {
    try {
      await Promise.all([
        dispatch(fetchSubCategories()).unwrap(),
        dispatch(fetchCategories()).unwrap(),
      ]);
    } catch (error) {
      Swal.fire("Error!", "Failed to load data", "error");
    }
  }, [dispatch]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const { id, ...dataToSubmit } = formData; // Remove id if present
        await dispatch(
          editMode
            ? updateSubCategory(dataToSubmit)
            : createSubCategory(dataToSubmit)
        ).unwrap();
        Swal.fire(
          "Success!",
          `Sub-category ${editMode ? "updated" : "created"} successfully.`,
          "success"
        );
        resetForm();
        await loadData();
      } catch (error) {
        console.error("Submit Error:", error);
        Swal.fire(
          "Error!",
          error.message || "Failed to process the request.",
          "error"
        );
      }
    },
    [editMode, formData, dispatch, loadData]
  );

  const resetForm = useCallback(() => {
    setFormData({ name: "", mainCategory: "", priority: "" });
    setEditMode(false);
  }, []);

  const handleDelete = useCallback(
    async (id) => {
      const confirmed = await ConfirmationModal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this sub-category!",
        icon: "warning",
        dangerMode: true,
      });

      if (confirmed) {
        try {
          await dispatch(deleteSubCategory(id)).unwrap();
          Swal.fire("Deleted!", "Sub-category has been deleted.", "success");
          await loadData();
        } catch (error) {
          Swal.fire("Error!", "Failed to delete the sub-category.", "error");
        }
      }
    },
    [dispatch]
  );

  const handleEdit = useCallback((subCategory) => {
    setFormData(subCategory);
    setEditMode(true);
    formRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the form
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="content container-fluid">
      <div className="font-bold pb-4 text-xl flex gap-2 items-start">
        <h2 className="h1 mb-2 text-capitalize d-flex align-items-center gap-2">
          <img
            src="/add-new-seller.png"
            alt="Table Heading Icon"
            className="w-8 h-8"
          />
          <span className="form-label text-[1.5rem] font-semibold text-green-600">
            Sub Categories
          </span>
        </h2>
      </div>
      <div className="card">
        <div className="card-body" ref={formRef}>
          {" "}
          {/* Add ref to the card body */}
          <Suspense fallback={<div>Loading Form...</div>}>
            <MemoizedSubCategoryForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              categories={categories}
            />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div>Loading List...</div>}>
        <MemoizedSubCategoryList
          subCategories={subCategories}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </Suspense>
    </div>
  );
};

// Memoize the form and list to prevent unnecessary re-renders
const MemoizedSubCategoryForm = memo(SubCategoryForm);
const MemoizedSubCategoryList = memo(SubCategoryList);

export default SubCategoriess;
