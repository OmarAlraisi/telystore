import "./filter.css";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  editAvailabilityFilter,
  editMaxPriceFilter,
  editMinPriceFilter,
  editNameFilter,
} from "../../store/actions";
import { getFilters } from "../../store/queries";

interface FilterProps {
  className?: string;
}

const Filter = ({ className }: FilterProps) => {
  const { byName, byPrice, byAvailability } = useSelector(getFilters);
  const { min, max } = byPrice;

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const { name, value, validity } = event.target;
    switch (name) {
      case "name":
        dispatch(editNameFilter(value));
        break;
      case "min":
        if (Number(value) === 0)
          dispatch(editMinPriceFilter(Number.MIN_SAFE_INTEGER));
        else validity.valid && dispatch(editMinPriceFilter(Number(value)));
        break;
      case "max":
        if (Number(value) === 0)
          dispatch(editMaxPriceFilter(Number.MAX_SAFE_INTEGER));
        else validity.valid && dispatch(editMaxPriceFilter(Number(value)));
        break;
      case "available":
        dispatch(editAvailabilityFilter(!byAvailability));
        break;
      default:
        break;
    }
  };

  return (
    <div className={classnames("filter--root", className)}>
      <span className="filter--title">Filter Products</span>

      <div className="filter--controls">
        <div className="filter--item by-name">
          <span className="filter--text">By Name</span>
          <input
            type="text"
            name="name"
            className="filter--text-input text-input"
            placeholder="product name"
            onChange={handleChange}
            value={byName}
          />
        </div>
        <div className="filter--item">
          <span className="filter--text">By Price</span>
          <div className="price-range">
            <input
              type="text"
              name="min"
              className="price-range--input text-input"
              placeholder="min"
              pattern="[0-9]*"
              onChange={handleChange}
              value={min === Number.MIN_SAFE_INTEGER ? "" : min}
            />
            -
            <input
              type="text"
              name="max"
              className="price-range--input text-input"
              placeholder="max"
              pattern="[0-9]*"
              onChange={handleChange}
              value={max === Number.MAX_SAFE_INTEGER ? "" : max}
            />
          </div>
        </div>
        <div className="filter--item">
          <input
            type="checkbox"
            name="available"
            className="filter--available"
            onChange={handleChange}
            checked={byAvailability}
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
