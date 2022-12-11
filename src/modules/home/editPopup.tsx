import "./editPopup.css";

interface EditPopupProps {
  name: string;
  price: number;
  inStock: number;
  available: boolean;
}
// const EditPopup = ({ name, price, inStock, available }: EditPopupProps) => {
const EditPopup = () => {
  return (
    <div className="edit-popup--root">
      <form className="edit-popup--body">
        <div className="edit--field">
          <label className="edit--input-label">Product Name</label>
          <input
            type="text"
            name="name"
            className="edit--input-field"
            placeholder="example product"
          />
        </div>
        <div className="edit--field">
          <label className="edit--input-label">Price</label>
          <input
            type="text"
            name="price"
            className="edit--input-field"
            placeholder="3.14"
          />
        </div>
        <div className="edit--field">
          <label className="edit--input-label">In Stock</label>
          <input
            type="text"
            name="inStock"
            className="edit--input-field"
            placeholder="6"
          />
        </div>
        <div className="edit--field--row">
          <input
            type="checkbox"
            name="availability"
            id="check"
            className="availability-checkbox"
          />
          <label className="edit--input-label" htmlFor="check">
            Unavailable
          </label>
        </div>
        <div className="edit--controls">
          <button className="edit--form-submit discard">Discard</button>
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
