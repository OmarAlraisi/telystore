import "./infoCard.css";
import classnames from "classnames";

interface InfoCardProps {
  className?: string;
}

const InfoCard = ({ className }: InfoCardProps) => {
  return (
    <div className={classnames("info-card--root", className)}>
      <h1>General Information</h1>
    </div>
  );
};

export default InfoCard;
