import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormSection from "../../../../../../components/FormInput/FormSection";
import FormInput from "../../../../../../components/FormInput/FormInput";
import FormSelect from "../../../../../../components/FormInput/FormSelect";

const ProductAdditional = ({ formData = {}, handleChange }) => {
  // Check for discount validation
  useEffect(() => {
    if (formData.discountType === "percent" && formData.discountAmount > 100) {
      toast.error("Discount amount cannot exceed 100%.");
    } else if (
      formData.discountType === "flat" &&
      formData.discountAmount > formData.price
    ) {
      toast.error("Discount amount cannot exceed the price.");
    }
  }, [formData.discountType, formData.discountAmount, formData.price]);

  return (
    <FormSection title="Pricing Information">
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Price */}
        <div className="flex flex-col px-2">
          <label className="font-semibold">Price</label>
          <FormInput
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
        </div>

        {/* Minimum Order Quantity */}
        <div className="flex flex-col px-2">
          <label className="font-semibold">Minimum Order Quantity</label>
          <FormInput
            type="number"
            name="minOrderQuantity"
            value={formData.minOrderQuantity}
            onChange={handleChange}
            placeholder="Minimum Order Quantity"
            required
          />
        </div>

        {/* Discount Type */}
        <div className="flex flex-col px-2">
          <FormSelect
            label="Discount Type"
            name="discountType"
            value={formData.discountType}
            onChange={handleChange}
            options={[
              { value: "percent", label: "Percentage" },
              { value: "flat", label: "Flat Amount" },
            ]}
          />
        </div>

        {/* Discount Amount */}
        <div className="flex flex-col px-2 " style={{ marginTop: "-.5rem" }}>
          <label className="font-semibold">
            Discount Amount {formData.discountType === "percent" ? "%" : "$"}
          </label>
          <div className="relative">
            <FormInput
              type="number"
              name="discountAmount"
              value={formData.discountAmount}
              onChange={handleChange}
              placeholder={`Discount Amount`}
              required
            />
          </div>
        </div>

        {/* Shipping cost link  */}
        <div className="flex flex-col px-2">
          <label className="font-semibold">Shipping Cost</label>
          <FormInput
            type="text"
            name="shippingCost"
            value={formData.shippingCost}
            onChange={handleChange}
            placeholder="Shipping Cost"
          />
        </div>

        {/* Tax Amount */}
        <div className="flex flex-col px-2">
          <label className="font-semibold">Tax Amount</label>
          <FormInput
            type="number"
            name="taxAmount"
            value={formData.taxAmount}
            onChange={handleChange}
            placeholder="Tax Amount"
          />
        </div>

        {/* Tax Included Checkbox */}
        <div className="flex flex-col px-2 mt-3">
          <label className="font-semibold">Tax Included</label>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              name="taxIncluded"
              checked={formData.taxIncluded}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span className="font-medium">Include tax in price</span>
          </div>
        </div>

        {/* video link  */}
        <div className="flex flex-col px-2">
          <label className="font-semibold">Video Link</label>
          <FormInput
            type="text"
            name="videoLink"
            value={formData.videoLink}
            onChange={handleChange}
            placeholder="Video Link"
          />
        </div>
      </div>
    </FormSection>
  );
};

export default ProductAdditional;
