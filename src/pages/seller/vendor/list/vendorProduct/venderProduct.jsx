
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const VenderProduct = () => {
    const [products, setProducts] = useState([
        {
            id: 15,
            productName: 'Latest Cool headphones...',
            sellingPrice: '$500.00',
            featured: true,
            activeStatus: true,
        },
        {
            id: 3,
            productName: 'Girls Beautiful White...',
            sellingPrice: '$500.00',
            featured: true,
            activeStatus: true,
        },
        {
            id: 4,
            productName: 'Girls Beautiful White...',
            sellingPrice: '$500.00',
            featured: true,
            activeStatus: true,
        },
        {
            id: 10,
            productName: 'Girls Beautiful White...',
            sellingPrice: '$500.00',
            featured: true,
            activeStatus: true,
        },
    ]);

    const [showActiveModal, setShowActiveModal] = useState(false);
    const [showFeaturedModal, setShowFeaturedModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleEditProduct = (productId) => {
        console.log(`Editing product with ID ${productId}`);
    };

    const handleDeleteProduct = (productId) => {
        Swal.fire({
            title: 'Are you sure to delete this?',
            text: "You will not be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedProducts = products.filter(p => p.id !== productId);
                setProducts(updatedProducts);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            }
        });
    };
    const handleToggleActive = (product) => {
        setSelectedProduct(product);
        setShowActiveModal(true);
    };

    const handleToggleFeatured = (product) => {
        setSelectedProduct(product);
        setShowFeaturedModal(true);
    };

    const handleModalOk = () => {
        if (showActiveModal) {
            const updatedProducts = products.map((p) =>
                p.id === selectedProduct.id ? { ...p, activeStatus: !p.activeStatus } : p
            );
            setProducts(updatedProducts);
            setShowActiveModal(false);
        }

        if (showFeaturedModal) {
            const updatedProducts = products.map((p) =>
                p.id === selectedProduct.id ? { ...p, featured: !p.featured } : p
            );
            setProducts(updatedProducts);
            setShowFeaturedModal(false);
        }

        setSelectedProduct(null);
    };

    const handleModalCancel = () => {
        setShowActiveModal(false);
        setShowFeaturedModal(false);
        setSelectedProduct(null);
    };

    return (
        <div className="row pt-2 snipcss-W7Odc">
            <div className="col-md-12">
                <div className="card h-100">
                    <div className="px-3 py-4">
                        <h5 className="mb-0 d-flex align-items-center gap-2">
                            Products{' '}
                            <span className="badge badge-soft-dark radius-50 fz-12">
                                {products.length}
                            </span>
                        </h5>
                    </div>
                    <div className="table-responsive datatable-custom">
                        <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-rXVHW">
                            <thead className="thead-light thead-50 text-capitalize">
                                <tr>
                                    <th>SL</th>
                                    <th>Product Name</th>
                                    <th>Selling price</th>
                                    <th className="text-center">Featured</th>
                                    <th className="text-center">Active status</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody id="set-rows">
                                {products.map((product, index) => (
                                    <tr key={product.id}>
                                        <td>{index + 1}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.sellingPrice}</td>
                                        <td className="text-center">
                                            <label className="switcher mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="switcher_input toggle-switch-message"
                                                    checked={product.featured}
                                                    onChange={() => handleToggleFeatured(product)}
                                                />
                                                <span className="switcher_control"></span>
                                            </label>
                                        </td>
                                        <td className="text-center">
                                            <label className="switcher mx-auto">
                                                <input
                                                    type="checkbox"
                                                    className="switcher_input toggle-switch-message"
                                                    checked={product.activeStatus}
                                                    onChange={() => handleToggleActive(product)}
                                                />
                                                <span className="switcher_control"></span>
                                            </label>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center gap-10">
                                                <button
                                                    className="btn btn-outline--primary btn-sm square-btn"
                                                    onClick={() => handleEditProduct(product.id)}
                                                >
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                                <button
                                                    className="btn btn-outline-danger btn-sm square-btn delete-data"
                                                    onClick={() => handleDeleteProduct(product.id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="table-responsive mt-4">
                        <div className="px-4 d-flex justify-content-lg-end"></div>
                    </div>
                </div>
            </div>

            {/* Active Status Modal */}
            {showActiveModal && selectedProduct && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content shadow-lg snipcss-kHjrh" style={{ backgroundColor: '#ffffff' }}>
                            <div className="modal-header border-0 pb-0 d-flex justify-content-end">
                                <button type="button" className="btn-close border-0" onClick={handleModalCancel}>
                                    <i className="tio-clear"></i>
                                </button>
                            </div>
                            <div className="modal-body px-4 px-sm-5 pt-0">
                                <div className="d-flex flex-column align-items-center text-center gap-2 mb-2">
                                    <div className="toggle-modal-img-box d-flex flex-column justify-content-center align-items-center mb-3 position-relative">
                                        <img
                                            src={`https://6valley.6amtech.com/admin/vendors/view/${selectedProduct.id}/product`}
                                            className="status-icon"
                                            alt=""
                                            width="30"
                                        />
                                        <img
                                            src="https://6valley.6amtech.com/public/assets/back-end/img/modal/product-status-off.png"
                                            id="toggle-status-modal-image"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="modal-title" id="toggle-status-modal-title">
                                        {selectedProduct.activeStatus
                                            ? `Want to Turn OFF ${selectedProduct.productName} Status?`
                                            : `Want to Turn ON ${selectedProduct.productName} Status?`}
                                    </h5>
                                    <div className="text-center" id="toggle-status-modal-message">
                                        <p>
                                            {selectedProduct.activeStatus
                                                ? 'If disabled this product will be hidden from the website and customer app'
                                                : 'If enabled this product will be available on the website and customer app'}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-3">
                                    <button
                                        type="button"
                                        className="btn btn--success min-w-120"
                                        id="toggle-status-modal-ok-button"
                                        onClick={handleModalOk}
                                    >
                                        Ok
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger-light min-w-120"
                                        onClick={handleModalCancel}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Featured Modal */}
            {showFeaturedModal && selectedProduct && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content shadow-lg snipcss-kHjrh" style={{ backgroundColor: '#ffffff' }}>
                            <div className="modal-header border-0 pb-0 d-flex justify-content-end">
                                <button type="button" className="btn-close border-0" onClick={handleModalCancel}>
                                    <i className="tio-clear"></i>
                                </button>
                            </div>
                            <div className="modal-body px-4 px-sm-5 pt-0">
                                <div className="d-flex flex-column align-items-center text-center gap-2 mb-2">
                                    <div className="toggle-modal-img-box d-flex flex-column justify-content-center align-items-center mb-3 position-relative">
                                        <img
                                            src={`https://6valley.6amtech.com/admin/vendors/view/${selectedProduct.id}/product`}
                                            className="status-icon"
                                            alt=""
                                            width="30"
                                        />
                                        <img
                                            src="https://6valley.6amtech.com/public/assets/back-end/img/modal/product-status-off.png"
                                            id="toggle-status-modal-image"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="modal-title" id="toggle-status-modal-title">
                                        {selectedProduct.featured
                                            ? `Want to Remove ${selectedProduct.productName} from Featured?`
                                            : `Want to Add ${selectedProduct.productName} to Featured?`}
                                    </h5>
                                    <div className="text-center" id="toggle-status-modal-message">
                                        <p>
                                            {selectedProduct.featured
                                                ? 'If removed, this product will no longer be featured on the website'
                                                : 'If added, this product will be featured on the website'}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-3">
                                    <button
                                        type="button"
                                        className="btn btn--success min-w-120"
                                        id="toggle-status-modal-ok-button"
                                        onClick={handleModalOk}
                                    >
                                        Ok
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn--danger-light min-w-120"
                                        onClick={handleModalCancel}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VenderProduct;


// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Swal from 'sweetalert2';

// const VenderProduct = () => {
//     const [products, setProducts] = useState([
//         {
//             id: 15,
//             productName: 'Latest Cool headphones...',
//             sellingPrice: '$500.00',
//             featured: true,
//             activeStatus: true,
//         },
//         {
//             id: 8,
//             productName: 'Girls Beautiful White...',
//             sellingPrice: '$500.00',
//             featured: true,
//             activeStatus: true,
//         },
//     ]);

//     const handleEditProduct = (productId) => {
//         console.log(`Editing product with ID ${productId}`);
//     };

//     const handleDeleteProduct = (productId) => {
//         Swal.fire({
//             title: 'Are you sure to delete this?',
//             text: "You will not be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 const updatedProducts = products.filter(p => p.id !== productId);
//                 setProducts(updatedProducts);
//                 Swal.fire(
//                     'Deleted!',
//                     'Your file has been deleted.',
//                     'success'
//                 );
//             }
//         });
//     };

//     return (
//         <div className="row pt-2 snipcss-W7Odc">
//             <div className="col-md-12">
//                 <div className="card h-100">
//                     <div className="px-3 py-4">
//                         <h5 className="mb-0 d-flex align-items-center gap-2">
//                             Products{' '}
//                             <span className="badge badge-soft-dark radius-50 fz-12">
//                                 {products.length}
//                             </span>
//                         </h5>
//                     </div>
//                     <div className="table-responsive datatable-custom">
//                         <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-rXVHW">
//                             <thead className="thead-light thead-50 text-capitalize">
//                                 <tr>
//                                     <th>SL</th>
//                                     <th>Product Name</th>
//                                     <th>Selling price</th>
//                                     <th className="text-center">Featured</th>
//                                     <th className="text-center">Active status</th>
//                                     <th className="text-center">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody id="set-rows">
//                                 {products.map((product, index) => (
//                                     <tr key={product.id}>
//                                         <td>{index + 1}</td>
//                                         <td>{product.productName}</td>
//                                         <td>{product.sellingPrice}</td>
//                                         <td className="text-center">
//                                             <label className="switcher mx-auto">
//                                                 <input
//                                                     type="checkbox"
//                                                     className="switcher_input toggle-switch-message"
//                                                     checked={product.featured}
//                                                     onChange={() => handleToggleFeatured(product)}
//                                                 />
//                                                 <span className="switcher_control"></span>
//                                             </label>
//                                         </td>
//                                         <td className="text-center">
//                                             <label className="switcher mx-auto">
//                                                 <input
//                                                     type="checkbox"
//                                                     className="switcher_input toggle-switch-message"
//                                                     checked={product.activeStatus}
//                                                     onChange={() => handleToggleActive(product)}
//                                                 />
//                                                 <span className="switcher_control"></span>
//                                             </label>
//                                         </td>
//                                         <td className="text-center">
//                                             <div className="d-flex justify-content-center gap-10">
//                                                 <button
//                                                     className="btn btn-outline--primary btn-sm square-btn"
//                                                     onClick={() => handleEditProduct(product.id)}
//                                                 >
//                                                     <FontAwesomeIcon icon={faEdit} />
//                                                 </button>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm square-btn delete-data"
//                                                     onClick={() => handleDeleteProduct(product.id)}
//                                                 >
//                                                     <FontAwesomeIcon icon={faTrash} />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <div className="table-responsive mt-4">
//                         <div className="px-4 d-flex justify-content-lg-end"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VenderProduct;
