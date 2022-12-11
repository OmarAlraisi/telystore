import "./index.css";
import InfoCard from "./infoCard";
import Filter from "./filter";
import ProductsGrid from "./productsGrid";
import classNames from "classnames";
import EditPopup from "./editPopup";

interface HomeProps {
  className?: string;
}

const Home = ({ className }: HomeProps) => {
  return (
    <div className={classNames("home--root", className)}>
      <div className="home--body">
        <Filter className="section" />
        <InfoCard />
        <ProductsGrid className="section" />
      </div>

      {true && <EditPopup />}
    </div>
  );
};
export default Home;
