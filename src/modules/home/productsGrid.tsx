import "./productsGrid.css";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/queries";

interface ProductsGridProps {
  className?: string;
}

const ProductsGrid = ({ className }: ProductsGridProps) => {
  const products = useSelector(getProducts);

  return (
    <div className={classnames("products-grid--root", className)}>
      {products.map((product) => {
        return (
          <div className="product-card">
            <span className="product-card--text title">{product.name}</span>
            <div className="product-card--details">
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
                <button className="controlls--btn delete">Delete</button>
                <button className="controlls--btn edit">Edit</button>
              </div>
              <span className="product-card--text identification">{`ID: ${product.id
                .toPrecision(8)
                .split(".")
                .reverse()
                .join("")}`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
