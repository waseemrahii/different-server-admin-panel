import React from "react";

const GenerateSitemap = () => {
  return (
    <div className="col-md-12 snipcss-JoY3b">
      <div className="card">
        <div className="border-bottom px-4 py-3">
          <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2">
            <img
              width="20"
              src="https://6valley.6amtech.com/public/assets/back-end/img/sitemap.png"
              alt="sitemap icon"
            />{" "}
            Generate sitemap
          </h5>
        </div>
        <div className="card-body text-center">
          <a
            href="https://6valley.6amtech.com/admin/business-settings/web-config/mysitemap-download"
            className="btn  py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] text-capitalize px-4"
          >
            Download generate sitemap
          </a>
        </div>
      </div>
    </div>
  );
};

export default GenerateSitemap;
