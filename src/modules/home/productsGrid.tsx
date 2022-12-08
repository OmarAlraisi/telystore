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
        return <div className="product">{p.name}</div>;
      })}
    </div>
  );
};

export default ProductsGrid;
