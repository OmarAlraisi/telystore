import "./infoCard.css";
import Image from "../common/image";
import { Summary } from "../../interfaces";
import { useSelector } from "react-redux";
import { getSummary } from "../../store/queries";

const InfoCard = () => {
  const summary: Summary = useSelector(getSummary);
  return (
    <div className="info-card--root">
      <Image fileName="logo.png" className="info-card--logo" />
      <div className="info-card--details">
        <span className="info-card--text">{`Products: ${summary.products}`}</span>
        <span className="info-card--text">{`In Stock: ${summary.inStock}`}</span>
        <span className="info-card--text">{`Available: ${summary.available} of ${summary.products}`}</span>
        <span className="info-card--text">{`Total Price: $${summary.total.toFixed(
          2,
        )}`}</span>
        <span className="info-card--text">{`Average Price: $${summary.average.toFixed(
          2,
        )}`}</span>
      </div>
    </div>
  );
};

export default InfoCard;
