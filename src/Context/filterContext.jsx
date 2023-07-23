import { createContext, useContext, useEffect, useReducer } from "react";
import filterReducer from "../Reducer/filterReducer";
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "lowest",
    filters: {
        text: '',
        category: 'All',
        company: 'All'
    }
}

export default function FilterContextProvider({ children }) {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(filterReducer, initialState);


    function sorting(e) {
        console.log('sort')
        let val = e.target.value;
        dispatch({ type: 'GET_SORT_VALUE', payload: val })
    }

    function toggleView() {
        if (state.gridView) {
            dispatch({ type: 'SET_LIST_VIEW' })
        } else {
            dispatch({ type: 'SET_GRID_VIEW' })
        }
    }

    function updateFiltersValue(e) {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name,value);
        dispatch({ type: 'UPDATE_FILTERS_VALUE', payload: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: 'SORTING_PRODUCTS', payload: products })
    }, [products, state.sortingValue, state.filters])
    
    useEffect(()=>{
        dispatch({type: 'FILTER_PRODUCTS'})
    },[state.filters])
    
    
    // useEffect(()=>{
    //     dispatch({ type: 'ALL_PRODUCTS', payload: products });
    // },[products])


    return <FilterContext.Provider value={{
        ...state,
        sorting,
        toggleView,
        updateFiltersValue
    }}>
        {children}
    </FilterContext.Provider>
}


export const useFilterContext = () => {
    return useContext(FilterContext);
};