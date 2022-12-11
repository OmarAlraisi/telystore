import "./infoCard.css";
import Image from "../common/image";

const InfoCard = () => {
  return (
    <div className="info-card--root">
      <Image fileName="logo.png" className="info-card--logo" />
      <div className="info-card--details">
        <span className="info-card--text">{`Products: ${10}`}</span>
        <span className="info-card--text">{`In Stock: ${220}`}</span>
        <span className="info-card--text">{`Available: ${6} of ${10}`}</span>
        <span className="info-card--text">{`Total Price: $${(1975).toFixed(
          2,
        )}`}</span>
        <span className="info-card--text">{`Average Price: $${(
          1975 / 220
        ).toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default InfoCard;
