import "./filter.css";
import classnames from "classnames";

interface FilterProps {
  className?: string;
}

const Filter = ({ className }: FilterProps) => {
  return (
    <div className={classnames("filter--root", className)}>
      <span className="filter--title">Filter Products</span>

      <div className="filter--controls">
        <div className="filter--item by-name">
          <span className="filter--text">By Name</span>
          <input
            type="text"
            name="byName"
            id="byName"
            className="filter--text-input text-input"
            placeholder="product name..."
          />
        </div>
        <div className="filter--item">
          <span className="filter--text">By Price</span>
          <div className="price-range">
            <input
              type="text"
              name="min"
              id="min"
              className="price-range--input text-input"
              placeholder="min.."
            />
            <input
              type="text"
              name="max"
              id="max"
              className="price-range--input text-input"
              placeholder="max.."
            />
          </div>
        </div>
        <div className="filter--item">
          <input
            type="checkbox"
            name="byAvailability"
            id="byAvailability"
            className="filter--available"
          />
          <span className="filter--text checkbox-label">
            Show only available products
          </span>
        </div>
      </div>
    </div>
  );
};
export default Filter;
