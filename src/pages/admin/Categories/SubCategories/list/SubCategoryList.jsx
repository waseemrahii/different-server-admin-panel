import React, { useMemo } from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import ActionButton from "../../../components/ActionButton/Action";
import TableList from "../../../components/FormInput/TableList";

const SubSubCategoryList = React.memo(
  ({ subCategories, handleDelete, handleEdit }) => {  // Added handleEdit as a prop
    const columns = useMemo(() => [
      { key: "_id", label: "ID", render: (item) => `SS${item._id.substring(0, 6)}` },
      { key: "name", label: "Sub Category Name" },
      { key: "mainCategory", label: "Main Category", render: (item) => item.mainCategory.name },
      { key: "priority", label: "Priority", render: (item) => item.priority || "0" },
      {
        key: "actions",
        label: "Actions",
        render: (item) => (
          <div className="d-flex gap-2 justify-content-center">
            <ActionButton
              onClick={() => handleEdit(item)} // Trigger the handleEdit function
              icon={FaPen} // View icon
              className="ml-4 border-green-500"
            />
            <ActionButton
              onClick={() => handleDelete(item._id)}
              icon={FaTrash} // Delete icon
              className="ml-4"
            />
          </div>
        ),
      },
    ], [handleDelete, handleEdit]); // Include handleEdit in dependencies

    return (
      <TableList
        title="Sub Categories"
        imageSrc="/top-selling-product-icon.png"
        tableTitle="Sub Sub Categories List"
        listData={subCategories}
        columns={columns}
        fetchListData={() => {}} // Provide your fetch function if needed
        searchPlaceholder="Search sub sub categories..."
        itemKey="_id"
        itemsPerPage={10}
      />
    );
  }
);

export default SubSubCategoryList;
