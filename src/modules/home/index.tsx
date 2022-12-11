import "./index.css";
import InfoCard from "./infoCard";
import Filter from "./filter";
import ProductsGrid from "./productsGrid";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions";
import { getProductsService } from "../../services";
import { Product } from "../../interfaces";
import classNames from "classnames";

interface HomeProps {
  className?: string;
}

const Home = ({ className }: HomeProps) => {
  const dispatch = useDispatch();
  getProductsService((products: Product[]) => {
    dispatch(fetchProducts(products));
  });

  return (
    <div className={classNames("home--root", className)}>
      {true ? (
        <div className="home--body">
          <Filter className="section" />
          <InfoCard />
          <ProductsGrid className="section" />
        </div>
      ) : (
        <h1>Popup</h1>
      )}
    </div>
  );
};
export default Home;
