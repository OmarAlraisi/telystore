import "./index.css";
import InfoCard from "./infoCard";
import Filter from "./filter";
import ProductsGrid from "./productsGrid";
import classNames from "classnames";
import EditPopup from "./editPopup";
import { useToggle } from "../../hooks/useToggle.hook";
import { useMemo, useState } from "react";

interface HomeProps {
  className?: string;
}

const Home = ({ className }: HomeProps) => {
  const [popupOpened, togglePopup] = useToggle(true);
  const [editId, setEditId] = useState(-1);

  useMemo(() => {
    togglePopup();
  }, [editId]);

  return (
    <div className={classNames("home--root", className)}>
      <div className="home--body">
        <Filter className="section" />
        <InfoCard />
        <ProductsGrid className="section" setEditId={setEditId} />
      </div>

      {popupOpened && <EditPopup closePopup={togglePopup} />}
    </div>
  );
};
export default Home;
