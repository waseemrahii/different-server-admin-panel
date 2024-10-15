import React from "react";
import { FaSearch, FaDownload,  FaPlus, FaEdit, FaEye } from "react-icons/fa";

const EmployeeList = () => {
  const employees = [
    {
      id: 1,
      name: "Employee",
      email: "e**********@gmail.com",
      phone: "0**********",
      role: "Product Manager",
      status: true,
      imageUrl: "https://6valley.6amtech.com/storage/app/public/admin/2022-04-21-6260e15d0ecc5.png",
    },
    {
      id: 2,
      name: "Employee",
      email: "e**********@gmail.com",
      phone: "016666666",
      role: "Product Manager",
      status: true,
      imageUrl: "https://6valley.6amtech.com/storage/app/public/admin/2022-04-20-625fd8d77c07d.png",
    },
    {
      id: 3,
      name: "Demo Employee",
      email: "d**********@gmail.com",
      phone: "0**********",
      role: "Product Manager",
      status: true,
      imageUrl: "https://6valley.6amtech.com/storage/app/public/admin/2022-10-12-634695f03aebb.png",
    },
    {
      id: 4,
      name: "Demo Employee",
      email: "d**********@gmail.com",
      phone: "0**********",
      role: "Product Manager",
      status: true,
      imageUrl: "https://6valley.6amtech.com/storage/app/public/admin/2022-10-12-634695f03aebb.png",
    },
    {
      id: 5,
      name: "Demo Employee",
      email: "d**********@gmail.com",
      phone: "0**********",
      role: "Product Manager",
      status: true,
      imageUrl: "https://6valley.6amtech.com/storage/app/public/admin/2022-10-12-634695f03aebb.png",
    },
  ];

  return (
    <div className="content container-fluid snipcss-YXrS6">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img src="https://6valley.6amtech.com/public/assets/back-end/img/employee.png" width="20" alt="" /> Employee list
        </h2>
      </div>
      <div className="card">
        <div className="card-header flex-wrap gap-10">
          <div className="px-sm-3 py-4 flex-grow-1">
            <div className="d-flex justify-content-between gap-3 flex-wrap align-items-center">
              <div>
                <h5 className="mb-0 text-capitalize gap-2"> Employee table <span className="badge badge-soft-dark radius-50 fz-12">3</span></h5>
              </div>
              <div className="align-items-center d-flex gap-3 justify-content-lg-end flex-wrap flex-lg-nowrap flex-grow-1">
                <div>
                  <form action="" method="GET">
                    <div className="input-group input-group-merge input-group-custom">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FaSearch />
                        </div>
                      </div>
                      <input type="search" name="searchValue" className="form-control" placeholder="Search by name or email or phone" required />
                      <button type="submit" className="btn btn--primary">Search</button>
                    </div>
                  </form>
                </div>
                <div>
                  <form action="" method="GET">
                    <div className="d-flex gap-2 align-items-center text-left">
                      <div>
                        <select className="form-control text-ellipsis min-w-200" name="admin_role_id">
                          <option value="all">All</option>
                          <option value="7"> Product manager </option>
                          <option value="8"> Role </option>
                          <option value="9"> Kumar </option>
                        </select>
                      </div>
                      <div>
                        <button type="submit" className="btn btn--primary px-4 w-100 text-nowrap"> Filter </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <button type="button" className="btn btn-outline--primary text-nowrap flex justify-center align-items-center gap-1" data-toggle="dropdown">
                    <FaDownload /> Export 
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a className="dropdown-item" href="">
                        <img width="14" src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="" /> Excel 
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a href="" className="btn btn--primary text-nowrap flex justify-center align-items-center gap-1">
                    <FaPlus />
                    <span className="text ">Add new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-align-middle card-table w-100 style-CI8zs">
              <thead className="thead-light thead-50 text-capitalize table-nowrap">
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={employee.id}>
                    <td>{index + 1}</td>
                    <td className="text-capitalize">
                      <div className="media align-items-center gap-10">
                        <img className="rounded-circle avatar avatar-lg" alt="" src={employee.imageUrl} />
                        <div className="media-body"> {employee.name} </div>
                      </div>
                    </td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.role}</td>
                    <td>
                      <label className="switcher">
                        <input type="checkbox" className="switcher_input" checked={employee.status} onChange={() => {}} />
                        <span className="switcher_control"></span>
                      </label>
                    </td>
                    <td className="text-center">
                      <div className="d-flex gap-10 justify-content-center">
                        <a href={`/admin/employee/update/${employee.id}`} className="btn btn-outline--primary btn-sm square-btn" title="Edit">
                          <FaEdit />
                        </a>
                        <a className="btn btn-outline-info btn-sm square-btn" title="View" href={`/admin/employee/view/${employee.id}`}>
                          <FaEye />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
