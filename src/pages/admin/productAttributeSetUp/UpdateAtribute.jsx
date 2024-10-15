import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const UpdateAttribute = () => {
    return (
        <div className="content container-fluid p-10 snipcss-K8yog">
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                <h2 className="h1 mb-0 flex">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/attribute.png" className="mb-1 mr-1" alt="" /> Update attribute
                </h2>
            </div>
            <div className="row">
                <div className="col-md-12 mb-10">
                    <div className="card">
                        <div className="card-body text-start">
                            <form action="https://6valley.6amtech.com/admin/attribute/update/1" method="post">
                                <input type="hidden" name="_token" value="PwtXfCOB4jJW4r7EFP7tbQ85VIeh6Q28sCgcjoVB" autoComplete="off" />
                                <ul className="nav nav-tabs w-fit-content mb-4">
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer active" id="en-link"> english (EN) </span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer " id="sa-link"> Arabic (SA) </span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer " id="bd-link"> Bangla (BD) </span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer " id="in-link"> Hindi (IN) </span>
                                    </li>
                                </ul>
                                <div className="form-group form-system-language-form" id="en-form">
                                    <input type="hidden" id="id" />
                                    <label className="title-color" htmlFor="name">Attribute Name (EN)</label>
                                    <input type="text" name="name[]" defaultValue="size" className="form-control" id="name" placeholder="Enter Attribute Name" required />
                                </div>
                                <input type="hidden" name="lang[]" value="en" id="lang" />
                                <div className="form-group d-none form-system-language-form" id="sa-form">
                                    <input type="hidden" id="id" />
                                    <label className="title-color" htmlFor="name">Attribute Name (SA)</label>
                                    <input type="text" name="name[]" defaultValue="" className="form-control" id="name" placeholder="Enter Attribute Name" />
                                </div>
                                <input type="hidden" name="lang[]" value="sa" id="lang" />
                                <div className="form-group d-none form-system-language-form" id="bd-form">
                                    <input type="hidden" id="id" />
                                    <label className="title-color" htmlFor="name">Attribute Name (BD)</label>
                                    <input type="text" name="name[]" defaultValue="" className="form-control" id="name" placeholder="Enter Attribute Name" />
                                </div>
                                <input type="hidden" name="lang[]" value="bd" id="lang" />
                                <div className="form-group d-none form-system-language-form" id="in-form">
                                    <input type="hidden" id="id" />
                                    <label className="title-color" htmlFor="name">Attribute Name (IN)</label>
                                    <input type="text" name="name[]" defaultValue="" className="form-control" id="name" placeholder="Enter Attribute Name" />
                                </div>
                                <input type="hidden" name="lang[]" value="in" id="lang" />
                                <div className="d-flex justify-content-end gap-3">
                                    <button type="reset" className="btn px-4 btn-secondary">Reset</button>
                                    <button type="submit" className="btn px-4 btn-secondary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAttribute;
