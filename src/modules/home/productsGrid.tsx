import "./productsGrid.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/queries";
import Image from "../common/image";
import { deleteProduct } from "../../store/actions";

interface ProductsGridProps {
  className?: string;
}

const ProductsGrid = ({ className }: ProductsGridProps) => {
  const products = useSelector(getProducts);

  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };
  const handleEdit = (id: number) => {};

  return (
    <div className={classnames("products-grid--root", className)}>
      <div className="products-grid--body">
        {products.map((product) => {
          return (
            <div className="product-card">
              {!product.isAvailable && (
                <Image
                  fileName="unavailable.png"
                  className="unavailable--image"
                />
              )}
              <span
                className={classnames("product-card--text title", {
                  unavailable: !product.isAvailable,
                })}
              >
                {product.name}
              </span>
              <div
                className={classnames("product-card--details", {
                  unavailable: !product.isAvailable,
                })}
              >
                <span className="product-card--text">{`In Stock: ${product.noInStock}`}</span>
                <span className="product-card--text">{`Cost/Piece: $${product.price.toFixed(
                  2,
                )}`}</span>
                <span className="product-card--text">{`Total Cost: $${(
                  product.price * product.noInStock
                ).toFixed(2)}`}</span>
              </div>
              <div className="product-card--id-and-controlls">
                <div className="product-card--controlls">
                  <button
                    className="controlls--btn delete"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="controlls--btn edit"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                </div>
                <span
                  className={classnames("product-card--text identification", {
                    unavailable: !product.isAvailable,
                  })}
                >{`ID: ${product.id
                  .toPrecision(8)
                  .split(".")
                  .reverse()
                  .join("")}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;
