import { useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/queries";
import { getProductById } from "../../utils/products.utils";
import "./editPopup.css";

interface EditPopupProps {
  id: number;
  closePopup: () => void;
}
// const EditPopup = ({ name, price, inStock, available }: EditPopupProps) => {
const EditPopup = ({ id, closePopup }: EditPopupProps) => {
  const products = useSelector(getProducts);
  const product = getProductById(products, id);

  const [name, setName] = useState(product!.name);
  const [price, setPrice] = useState(product!.price);
  const [stock, setStock] = useState(product!.noInStock);
  const [available, setAvailable] = useState(product!.isAvailable);

  const handleChange = (event: any) => {
    const { name, value, validity } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(value.replace(/([^0-9.]+)/, "").replace(/^(0|\.)/, ""));
        break;
      case "inStock":
        const newValue = validity.valid ? value : stock;
        setStock(newValue);
        break;
      case "availability":
        setAvailable(!available);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // TODO
  };
  const handleDiscard = () => {
    closePopup();
  };
  return (
    <div className="edit-popup--root">
      <form className="edit-popup--body" onSubmit={handleSubmit}>
        <div className="edit--field">
          <label className="edit--input-label">Product Name</label>
          <input
            type="text"
            name="name"
            className="edit--input-field"
            placeholder="example product"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="edit--field">
          <label className="edit--input-label">Price</label>
          <input
            type="text"
            name="price"
            className="edit--input-field"
            placeholder="3.14"
            onChange={handleChange}
            value={price}
          />
        </div>
        <div className="edit--field">
          <label className="edit--input-label">In Stock</label>
          <input
            type="text"
            name="inStock"
            className="edit--input-field"
            placeholder="6"
            pattern="[0-9]*"
            onChange={handleChange}
            value={stock}
          />
        </div>
        <div className="edit--field--row">
          <input
            type="checkbox"
            name="availability"
            id="check"
            className="availability-checkbox"
            onChange={handleChange}
            checked={!available}
          />
          <label className="edit--input-label" htmlFor="check">
            Mark Unavailable
          </label>
        </div>
        <div className="edit--controls">
          <button className="edit--form-submit discard" onClick={handleDiscard}>
            Discard
          </button>
          <input
            type="submit"
            value="Save"
            className="edit--form-submit save"
          />
        </div>
      </form>
    </div>
  );
};

export default EditPopup;