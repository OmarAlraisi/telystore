import "./filter.css";
import classnames from "classnames";

interface FilterProps {
  className?: string;
}

const Filter = ({ className }: FilterProps) => {
  return (
    <div className={classnames("filter--root", className)}>
      <h1>Filter</h1>
    </div>
  );
};
export default Filter;
