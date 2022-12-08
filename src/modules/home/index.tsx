import "./index.css";
import InfoCard from "./infoCard";
import Filter from "./filter";
import ProductsGrid from "./productsGrid";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions";
import { getProductsService } from "../../services";
import { Product } from "../../interfaces";

const Home = () => {
  const dispatch = useDispatch();
  getProductsService((products: Product[]) => {
    dispatch(fetchProducts(products));
  });

  return (
    <div className="home--root">
      {true ? (
        <div className="home--body">
          <Filter className="section" />
          <div className="home--products-container">
            <InfoCard className="section" />
            <ProductsGrid className="section" />
          </div>
        </div>
      ) : (
        <h1>Popup</h1>
      )}
    </div>
  );
};
export default Home;
