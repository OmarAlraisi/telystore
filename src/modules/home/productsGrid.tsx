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
      {products.map((p) => {
        return (
          <div className="product-card">
            <span className="product-card--text title">{p.name}</span>
            <div className="product-card--details">
              <span className="product-card--text">{`In Stock: ${p.noInStock}`}</span>
              <span className="product-card--text">{`Price/Unit: $${p.price.toFixed(
                2,
              )}`}</span>
              <span className="product-card--text">{`Total Price: $${(
                p.price * p.noInStock
              ).toFixed(2)}`}</span>
            </div>
            <div className="product-card--id-and-controlls">
              <span className="product-card--text identification">{p.id}</span>
              <div className="product-card--controlls">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
