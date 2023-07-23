import React from "react";
import { useFilterContext } from "../Context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filterProducts, gridView } = useFilterContext();

  if (gridView === true) {
    return <GridView products={filterProducts} />;
  }

  if (gridView === false) {
    return <ListView products={filterProducts} />;
  }
};

export default ProductList;