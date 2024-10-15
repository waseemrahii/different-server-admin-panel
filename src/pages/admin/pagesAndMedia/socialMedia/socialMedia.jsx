import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaGoogle,
  FaTrash,
} from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import ActionButton from "../../../../components/ActionButton/Action";
const SocialMedia = () => {
  const [formData, setFormData] = useState({ name: "", link: "", id: null });
  const [socialMediaLinks, setSocialMediaLinks] = useState([
    { id: 1, name: "Facebook", link: "https://facebook.com", status: true },
    {
      id: 2,
      name: "Instagram",
      link: "https://www.instagram.com/",
      status: true,
    },
    { id: 3, name: "Twitter", link: "https://www.twitter.com/", status: true },
    {
      id: 4,
      name: "Linkedin",
      link: "https://www.linkedin.com/",
      status: true,
    },
    {
      id: 5,
      name: "Pinterest",
      link: "https://www.pinterest.com/",
      status: true,
    },
    {
      id: 6,
      name: "Google-plus",
      link: "https://www.google.com/",
      status: true,
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setSocialMediaLinks(
        socialMediaLinks.map((link) =>
          link.id === formData.id ? formData : link
        )
      );
    } else {
      setFormData({ ...formData, id: socialMediaLinks.length + 1 });
      setSocialMediaLinks([
        ...socialMediaLinks,
        { ...formData, id: socialMediaLinks.length + 1, status: true },
      ]);
    }
    setFormData({ name: "", link: "", id: null });
  };

  const handleEdit = (id) => {
    const link = socialMediaLinks.find((link) => link.id === id);
    setFormData(link);
  };

  const handleStatusChange = (id) => {
    setSocialMediaLinks(
      socialMediaLinks.map((link) =>
        link.id === id ? { ...link, status: !link.status } : link
      )
    );
  };

  return (
    <div className="content container-fluid snipcss-65pbj">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <FaFacebook size={20} /> Social media
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0 text-[1rem] font-semibold">
                Social media form
              </h5>
            </div>
            <div className="card-body">
              <form
                onSubmit={handleSubmit}
                id="social-media-links"
                className="style-VOaqc"
              >
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="name" className="title-color">
                        Name
                      </label>
                      <select
                        className="form-control w-100"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">---Select---</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Linkedin">LinkedIn</option>
                        <option value="Pinterest">Pinterest</option>
                        <option value="Google-plus">Google plus</option>
                      </select>
                    </div>
                    <div className="col-md-12 mt-2">
                      <input
                        type="hidden"
                        id="id"
                        name="id"
                        value={formData.id || ""}
                      />
                      <label htmlFor="link" className="title-color">
                        Social media link
                      </label>
                      <input
                        type="url"
                        name="link"
                        className="form-control"
                        id="link"
                        placeholder="Enter Social Media Link"
                        value={formData.link}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-10 justify-content-end flex-wrap">
                  <button
                    type="submit"
                    id="actionBtn"
                    className="btn px-4 py-2 bg-primary text-white hover:bg-primary-dark"
                    style={{ color: "white" }}
                  >
                    Save
                  </button>
                  {formData.id && (
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ name: "", link: "", id: null })
                      }
                      className="btn btn--primary px-4"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <h5 className="mb-0 text-[1rem] font-semibold d-flex">
                Social media table
              </h5>
            </div>
            <div className="pb-3">
              <div className="table-responsive">
                <table
                  className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-5KA3T"
                  id="dataTable"
                >
                  <thead className="thead-light thead-50 text-capitalize">
                    <tr>
                      <th>Sl</th>
                      <th>Name</th>
                      <th>Link</th>
                      <th className="text-center">Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {socialMediaLinks.map((link, index) => (
                      <tr key={link.id}>
                        <td
                          className="column_name"
                          data-column_name="sl"
                          data-id={link.id}
                        >
                          {index + 1}
                        </td>
                        <td
                          className="column_name"
                          data-column_name="name"
                          data-id={link.id}
                        >
                          {link.name}
                        </td>
                        <td
                          className="column_name"
                          data-column_name="slug"
                          data-id={link.id}
                        >
                          {link.link}
                        </td>
                        <td
                          className="column_name"
                          data-column_name="status"
                          data-id={link.id}
                        >
                          <form className="social-media-status-form">
                            <input type="hidden" name="id" value={link.id} />
                            <label className="switcher mx-auto">
                              <input
                                type="checkbox"
                                className="switcher_input toggle-switch-message"
                                id={`social-media-status${link.id}`}
                                name="status"
                                value="1"
                                checked={link.status}
                                onChange={() => handleStatusChange(link.id)}
                              />
                              <span className="switcher_control"></span>
                            </label>
                          </form>
                        </td>
                        <td>
                          {/* <button
                            type="button"
                            className="btn px-4 py-2 bg-primary text-white hover:bg-primary-dark btn-xs edit square-btn"
                            onClick={() => handleEdit(link.id)}
                          >
                            <MdEdit />
                          </button> */}
                          <ActionButton
                            onClick={() => handleEdit(link.id)}
                            icon={FaTrash} // Pass dynamic icon
                            className="ml-4"
                            label="Delete"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
