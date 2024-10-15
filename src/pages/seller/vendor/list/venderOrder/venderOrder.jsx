import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faChevronDown, faPlaneDeparture, faCheckCircle, faTable, faEye } from '@fortawesome/free-solid-svg-icons';

const VenderOrder = () => {

    
    return (
        <div className="col-md-12 snipcss-MWMHL">
            <div className="card w-100">
                <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 w-100">
                        <h5 className="mb-0">Order info</h5>
                        <div className="dropdown text-nowrap">
                            <button type="button" className="btn btn-outline--primary" data-toggle="dropdown">
                                <FontAwesomeIcon icon={faDownload} /> Export <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                    <a className="dropdown-item d-flex align-items-center gap-2" href="">
                                        <img width="14" src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="" /> Excel
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="order-stats order-stats_pending">
                                <div className="order-stats__content style-4L3ZB" id="style-4L3ZB">
                                    <FontAwesomeIcon icon={faPlaneDeparture} />
                                    <h6 className="order-stats__subtitle">Pending</h6>
                                </div>
                                <div className="order-stats__title"> 19 </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="order-stats order-stats_delivered">
                                <div className="order-stats__content style-DBk5X" id="style-DBk5X">
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                    <h6 className="order-stats__subtitle">Delivered</h6>
                                </div>
                                <div className="order-stats__title"> 16 </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="order-stats order-stats_all">
                                <div className="order-stats__content style-Oydvc" id="style-Oydvc">
                                    <FontAwesomeIcon icon={faTable} />
                                    <h6 className="order-stats__subtitle">All</h6>
                                </div>
                                <div className="order-stats__title"> 57 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive datatable-custom">
                    <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-AtoOH">
                        <thead className="thead-light thead-50 text-capitalize">
                            <tr>
                                <th>SL</th>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>Payment status</th>
                                <th>Total</th>
                                <th>Order status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody id="set-rows">
                            <tr className="status class-all">
                                <td> 1 </td>
                                <td>
                                    <Link to="" className="title-color hover-c1">100182</Link>
                                </td>
                                <td>10 Jan 2023</td>
                                <td>
                                    <Link to="" className="text-body text-capitalize"> Demo user </Link>
                                </td>
                                <td>
                                    <span className="badge badge-soft-danger fz-12">Unpaid </span>
                                </td>
                                <td>$575.00</td>
                                <td className="text-capitalize">
                                    <span className="badge badge-soft-info fz-12">Pending</span>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <Link title="View" className="btn btn-outline-info btn-sm square-btn" to="https://6valley.6amtech.com/admin/vendors/order-details/100182/1"><FontAwesomeIcon icon={faEye} /></Link>
                                    </div>
                                </td>
                            </tr>
                            <tr className="status class-all">
                                <td> 2 </td>
                                <td>
                                    <Link to="" className="title-color hover-c1">100169</Link>
                                </td>
                                <td>10 Jan 2023</td>
                                <td>
                                    <Link to="" className="text-body text-capitalize"> fatema subarna </Link>
                                </td>
                                <td>
                                    <span className="badge badge-soft-danger fz-12">Unpaid </span>
                                </td>
                                <td>$1,050.00</td>
                                <td className="text-capitalize">
                                    <span className="badge badge-soft-warning fz-12">Processing</span>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <Link title="View" className="btn btn-outline-info btn-sm square-btn" to="https://6valley.6amtech.com/admin/vendors/order-details/100169/1"><FontAwesomeIcon icon={faEye} /></Link>
                                    </div>
                                </td>
                            </tr>
                            {/* Additional rows go here */}
                        </tbody>
                    </table>
                </div>
                <div className="table-responsive mt-4">
                    <div className="px-4 d-flex justify-content-lg-end">
                        <nav>
                            <ul className="pagination">
                                <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                    <span className="page-link" aria-hidden="true">‹</span>
                                </li>
                                <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                <li className="page-item"><Link className="page-link" to="https://6valley.6amtech.com/admin/vendors/view/1/order?seller_id=1&amp;seller_is=seller&amp;order_type=default_type&amp;page=2">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="https://6valley.6amtech.com/admin/vendors/view/1/order?seller_id=1&amp;seller_is=seller&amp;order_type=default_type&amp;page=3">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="" rel="next" aria-label="Next »">›</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenderOrder;
