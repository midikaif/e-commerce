const filterReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_value);
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];

      function sortingProducts(a, b) {
        switch (state.sortingValue) {
          case 'lowest':
            return a.price - b.price;
          case 'highest':
            return b.price - a.price;
          case 'a-z':
            return a.name.localeCompare(b.name);
          case 'z-a':
            return b.name.localeCompare(a.name);
        }
      }

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        allProducts: action.payload,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case "FILTER_PRODUCTS":
      let { filterProducts } = state;
      let tempFilterProduct = [...filterProducts];

      const { text, category,company } = state.filters;

      console.log(text,state);

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.name.toLowerCase().includes(text)
        );
      }

      
      if (company !== 'All') {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.company === company
        );
      }

      // if (category !== 'All') {
      //   tempFilterProduct = tempFilterProduct.filter((curElem) =>
      //     curElem.category === category
      //   );
      // }

      return {
        ...state,
        filterProducts: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;