import "./index.css";
import InfoCard from "./infoCard";
import Filter from "./filter";
import ProductsGrid from "./productsGrid";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/products.action";
import getProductsService from "../../services/getProducts.service";
import Product from "../../interfaces/product.interface";

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
