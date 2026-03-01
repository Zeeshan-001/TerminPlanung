import type { JSX } from "react";
import Button from "src/shared/ui/utils/Button";
import { CATEGORIES } from "@features/appointments/modal/categories";

interface CategorySelectorProps {
  selectedID: string;
  onSelect: (id: string) => void;
}

const CategorySelector = ({ onSelect, selectedID }: CategorySelectorProps): JSX.Element => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor="form-label">
        Kategorie
      </label>

      <div className="category-selector">
        {CATEGORIES.map((cat) => (
          <Button key={cat.id} id={cat.id} type="button" klasses={`cat-btn ${selectedID === cat.id ? "selected-other" : ""}`} data-cat={cat.id} onClick={() => onSelect(cat.id)}>
            {cat.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
