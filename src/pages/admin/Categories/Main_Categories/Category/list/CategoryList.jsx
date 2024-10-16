import React, { useMemo } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import TableList from "../../../../../../components/FormInput/TableList";
import ActionButton from "../../../../../../components/ActionButton/Action";

const CategoryList = React.memo(
  ({ categories, handleDelete, handleSearch, searchQuery }) => {
    // Define the columns for the table
    const columns = useMemo(
      () => [
        {
          key: "_id",
          label: "ID",
          render: (item) => `C${item._id.substring(0, 6)}`,
        },
        {
          key: "logo",
          label: "Logo",
          render: (item) => (
            <img
              src={item.logo}
              className="avatar"
              alt={item.name}
              aria-label="Category Logo"
            />
          ),
        },
        { key: "name", label: "Category Name" },
        {
          key: "priority",
          label: "Priority",
          render: (item) => item.priority || "0",
        },
        {
          key: "actions",
          label: "Actions",
          render: (item) => (
            <div className="d-flex gap-2 justify-content-center">
              <ActionButton
                to={`/categoryedit/${item._id}`}
                icon={FaEye} // View icon
                className="ml-4"
                // label="View"
              />
              <ActionButton
                onClick={() => handleDelete(item._id)}
                icon={FaTrash} // Delete icon
                className="ml-4"
                // label="Delete"
              />
            </div>
          ),
        },
      ],
      [handleDelete]
    );

    return (
      <TableList
        title="Categories"
        imageSrc="/top-selling-product-icon.png"
        tableTitle="Categories List"
        listData={categories}
        columns={columns}
        fetchListData={() => {}} // Provide your fetch function if needed
        searchPlaceholder="Search categories..."
        itemKey="_id"
        itemsPerPage={10} // You can change the number of items per page as needed
      />
    );
  }
);

export default CategoryList;
