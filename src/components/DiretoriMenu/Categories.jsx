import React from "react";
import "./categories.styles.scss";
import CategoryItem from '../Categories/CategoryItem'

const Categories = (categories) => {
  const {category} = categories;
  return (
    <>
      <div className="categories-container">
        {category.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </div>
    </>
  );
};

export default Categories;
