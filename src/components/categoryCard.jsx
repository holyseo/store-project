import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ imgSrc, title }) => {
  const navigate = useNavigate();
  return (
    <div className="category-card">
      <div className="cat-card-img-cont">
        <img src={imgSrc} alt="category-img" style={{ width: "100%" }} />
      </div>
      <button
        className="bigText"
        onClick={() => navigate(`products/${title.toLowerCase()} clothing`)}
      >
        {title}
      </button>
    </div>
  );
};

export default CategoryCard;
