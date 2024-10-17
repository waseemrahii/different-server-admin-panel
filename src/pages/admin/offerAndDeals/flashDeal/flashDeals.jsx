// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaSearch, FaEye, FaDownload } from "react-icons/fa";
// import { MdFlashOn } from "react-icons/md";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import FileUpload from "../../../../components/FormInput/FileUpload";
// import PreviewImage from "../../../../components/FormInput/PreviewImage";
// import ExportButton from "../../../../components/ActionButton/Export";
// import ActionButton from "../../../../components/ActionButton/Action";

// const FlashDeals = () => {
//   const [activeLang, setActiveLang] = useState("en");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [formData, setFormData] = useState({
//     title: "",
//     startDate: "",
//     endDate: "",
//     image: "",
//   });
//   const [flashDeals, setFlashDeals] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchFlashDeals();
//   }, []);

//   const fetchFlashDeals = async () => {
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.get(`${ApiUrl}flash-deals/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setFlashDeals(response.data.doc);
//     } catch (error) {
//       console.error("Error fetching flash deals:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Fetch Error",
//         text: "Could not fetch flash deals!",
//       });
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         setFormData((prevData) => ({
//           ...prevData,
//           image: reader.result,
//         }));
//       };
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (new Date(formData.startDate) > new Date(formData.endDate)) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Date Range",
//         text: "End Date must be after Start Date!",
//       });
//       return;
//     }

//     if (!formData.image) {
//       Swal.fire({
//         icon: "error",
//         title: "Image Required",
//         text: "Please upload an image!",
//       });
//       return;
//     }

//     const formDataToSubmit = {
//       startDate: formData.startDate,
//       endDate: formData.endDate,
//       image: formData.image,
//       title: formData.title,
//     };

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         `${ApiUrl}flash-deals`,
//         formDataToSubmit,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.data.status === "success") {
//         fetchFlashDeals();
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: response.data.message,
//         });
//         setFormData({
//           title: "",
//           startDate: "",
//           endDate: "",
//           image: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         const token = localStorage.getItem("token");
//         await axios.delete(`${ApiUrl}flash-deals/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         fetchFlashDeals();
//         Swal.fire("Deleted!", "Your file has been deleted.", "success");
//       } catch (error) {
//         console.error("Error deleting flash deal:", error);
//         Swal.fire("Error!", "Could not delete the flash deal.", "error");
//       }
//     }
//   };

//   const filteredDeals = flashDeals.filter((deal) =>
//     deal.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateString).toLocaleDateString(activeLang, options);
//   };
//   return (
//     <div className="content container-fluid snipcss-SrYZc">
//       <div className="d-flex justify-content-between gap-2 mb-3">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <MdFlashOn size={24} /> Flash deals
//         </h2>
//       </div>

//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body">
//               <form
//                 onSubmit={handleFormSubmit}
//                 className="text-start"
//                 encType="multipart/form-data"
//               >
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <div className="form-group">
//                       <label
//                         htmlFor="title"
//                         className="title-color font-weight-medium text-capitalize"
//                       >
//                         Title
//                       </label>
//                       <input
//                         type="text"
//                         name="title"
//                         className="form-control"
//                         placeholder="Enter title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label
//                         htmlFor="start-date"
//                         className="title-color font-weight-medium text-capitalize"
//                       >
//                         Start Date
//                       </label>
//                       <input
//                         type="date"
//                         name="startDate"
//                         className="form-control"
//                         value={formData.startDate}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label
//                         htmlFor="end-date"
//                         className="title-color font-weight-medium text-capitalize"
//                       >
//                         End Date
//                       </label>
//                       <input
//                         type="date"
//                         name="endDate"
//                         className="form-control"
//                         value={formData.endDate}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-6 ">
//                     <PreviewImage
//                       image={formData.image}
//                       altText="flash image"
//                       style={{ width: "200px" }}
//                     />
//                     <FileUpload
//                       name="image"
//                       label="Flash Deal Image (Ratio 1:1)"
//                       accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
//                       onChange={handleImageChange}
//                     />
//                   </div>
//                 </div>

//                 {errorMessage && (
//                   <div className="error-message">{errorMessage}</div>
//                 )}

//                 <div className="d-flex justify-content-end">
//                   <button
//                     type="submit"
//                     className="btn bg-primary text-white hover:bg-primary-dark"
//                     style={{ color: "white" }}
//                   >
//                     Add Flash Deal
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-12 my-5">
//           <div className="card">
//             <div className="card-header flex flex-col md:flex-row gap-4 justify-between items-start">
//               <h4 className=" text-[1rem] font-semibold">Flash Deals List</h4>
//               <div className="flex flex-col md:flex-row items-end gap-4">
              
//                 <div className="search-bar mb-4">
//                   <input
//                     type="text"
//                     placeholder="Search Flash Deals"
//                     className="form-control"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   {/* <FaSearch /> */}
//                 </div>
               
//                             <label className="switcher mx-auto">
//                               <input
//                                 type="checkbox"
//                                 className="switcher_input"
//                                 checked={deal?.publish}
//                                 // checked={deal.publish === "true"}

//                                 onChange={() => handleSwitcherChange(deal._id)}
//                               />
//                               <span className="switcher_control" />
//                             </label>
//                           </td>
//                           <td>
//                             <div className="d-flex justify-content-center gap-2">
//                               <Link
//                                 to={`/add-flashproduct/${deal._id}`}
//                                 className="h-30 d-flex gap-2 align-items-center btn btn-soft-info btn-sm border-green-500"
//                               >
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="9"
//                                   height="9"
//                                   viewBox="0 0 9 9"
//                                   fill="none"
//                                   className="svg replaced-svg border-green-500"
//                                 >
//                                   <path
//                                     d="M9 3.9375H5.0625V0H3.9375V3.9375H0V5.0625H3.9375V9H5.0625V5.0625H9V3.9375Z"
//                                     fill="#00A3AD"
//                                   />
//                                 </svg>{" "}
//                                 Add product
//                               </Link>
                            

//                               <ActionButton
//                                 onClick={() => handleDelete(deal._id)}
//                                 icon={FaTrash} // Pass dynamic icon
//                                 className="ml-4"
//                                 label="Delete"
//                               />
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="6" className="text-center">
//                           No Flash Deals found
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlashDeals;






import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchFlashDeals, createFlashDeal, deleteFlashDeal } from "../../../../redux/slices/admin/flashDealSlice";

import FileUpload from "../../../../components/FormInput/FileUpload";
import PreviewImage from "../../../../components/FormInput/PreviewImage";
import ExportButton from "../../../../components/ActionButton/Export";
import ActionButton from "../../../../components/ActionButton/Action";

const FlashDeals = () => {
  const dispatch = useDispatch();
  const { flashDeals, loading, error } = useSelector((state) => state.flashDeals);
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    image: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchFlashDeals());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(createFlashDeal(formData)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        setFormData({
          title: "",
          startDate: "",
          endDate: "",
          image: "",
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteFlashDeal(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const filteredDeals = flashDeals.filter((deal) => 
    deal.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(activeLang, options);
  };

  return (
    <div className="content container-fluid snipcss-SrYZc">
      <div className="d-flex justify-content-between gap-2 mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <MdFlashOn size={24} /> Flash deals
        </h2>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form
                onSubmit={handleFormSubmit}
                className="text-start"
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        htmlFor="title"
                        className="title-color font-weight-medium text-capitalize"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="start-date"
                        className="title-color font-weight-medium text-capitalize"
                      >
                        Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        className="form-control"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="end-date"
                        className="title-color font-weight-medium text-capitalize"
                      >
                        End Date
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        className="form-control"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                   
                  </div>
                  <div className="col-lg-6">
                    <PreviewImage image={formData.image} />
                  <FileUpload
                      label="Image"
                      name="image"
                      onChange={handleImageChange}
                    />
                  </div>
                    <button type="submit" className="btn btn-primary">
                      Add Flash Deal
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-3 d-flex justify-content-between">
                <div className="search-form mb-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by title..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="input-group-text">
                      <FaSearch />
                    </span>
                  </div>
                </div>
                <ExportButton />
              </div>

              {status === 'loading' ? (
                <p>Loading...</p>
              ) : status === 'failed' ? (
                <p>{error}</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover text-nowrap">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Image</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDeals.map((deal) => (
                        <tr key={deal._id}>
                          <td>{deal.title}</td>
                          <td>{new Date(deal.startDate).toLocaleDateString()}</td>
                          <td>{new Date(deal.endDate).toLocaleDateString()}</td>
                          <td>
                            <img src={deal.image} alt={deal.title} width="50" />
                          </td>
                          <td>
                            <Link to={`/flash-deals/edit/${deal._id}`}>
                              <ActionButton icon={<FaEdit />} />
                            </Link>
                            <ActionButton
                              icon={<FaTrash />}
                              onClick={() => handleDelete(deal._id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
