import { useState } from "react";
import categories from "components/fake_category.json";

type Props = {
  selectCategory: (id: number) => void;
};

const FeatureTab = ({ selectCategory }: Props) => {
  const [activeId, setActiveId] = useState<number>(1);
  const onSelectCategory = (id: number) => {
    setActiveId(id);
    selectCategory(id);
  };

  return (
    <ul className="nav nav-tabs" role="tablist">
      {categories.map((ct) => (
        <li key={ct.id} className="nav-item">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => onSelectCategory(ct.id)}
            className={activeId === ct.id ? "nav-link active" : "nav-link"}
            data-toggle="tab"
          >
            <h3 className="tab-head">
              <span className="tab-text-title">{ct.title}</span>
            </h3>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FeatureTab;