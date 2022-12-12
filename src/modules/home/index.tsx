import "./index.css";
import InfoCard from "./infoCard";
import Filter from "./filter";
import ProductsGrid from "./productsGrid";
import classNames from "classnames";
import EditPopup from "./editPopup";
import { useToggle } from "../../hooks/useToggle.hook";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../store/actions";
import { UpdateData } from "../../interfaces";

interface HomeProps {
  className?: string;
}

const Home = ({ className }: HomeProps) => {
  const [popupOpened, togglePopup] = useToggle(true);
  const [editId, setEditId] = useState(-1);

  useMemo(() => {
    togglePopup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  const dispatch = useDispatch();
  const handlePopupSave = (id: number, updatedData: UpdateData) => {
    const { name, price, inStock, isAvailable } = updatedData;
    setEditId(-1);
    dispatch(
      updateProduct(id, {
        name,
        price,
        inStock,
        isAvailable,
      }),
    );
  };

  return (
    <div className={classNames("home--root", className)}>
      <div className="home--body">
        <Filter className="section" />
        <InfoCard />
        <ProductsGrid className="section" setEditId={setEditId} />
      </div>

      {popupOpened ? (
        <EditPopup
          id={editId}
          setEditId={setEditId}
          handleSave={handlePopupSave}
          handleDiscard={togglePopup}
        />
      ) : null}
    </div>
  );
};
export default Home;
