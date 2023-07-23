import React from 'react'
import { Button } from '../styles/Button';
import styled from 'styled-components';
import { useFilterContext } from '../Context/filterContext';

export default function FilterSection() {

  const {
     updateFiltersValue,
    filters: { text, category },
    allProducts
  } = useFilterContext();

  function getUniqueElements(products, property){
    let properties = products.map((elem)=>{
      return elem[property];
    })
    properties = ['All', ...new Set(properties)];
    return properties;
  }

  const categories = getUniqueElements(allProducts, 'category') 
  const companyData = getUniqueElements(allProducts, 'company')


  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFiltersValue}
          />
        </form>
      </div>

      {/* <div className="filter-shipping">
            <p>Free Shipping </p>
            <input
              type="checkbox"
              name="shipping"
              className="checkbox"
              onChange={updateFilters}
              checked={shipping}
            />
          </div> */}

      <div className="filter-clear">
        <Button className="btn" >
          Clear Filters
        </Button>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categories.map((elem, i) => {
              return (
                <button
                  key={i}
                  type='button'
                  name='category'
                  className={category === elem ? 'active':''}
                  value={elem}
                  onClick={updateFiltersValue}
                >
                  {elem}
                </button>
              )
            })
          }
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onChange={updateFiltersValue}>
            {companyData.map((elem, index) => {
              return (
                <option key={index} value={elem} name='company'>
                  {elem.charAt(0).toUpperCase() + elem.slice(1)}
                </option>
              );
            })}
          </select>
        </form>
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
      padding: 5rem 0;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    
      h3 {
        padding: 2rem 0;
        font-size: bold;
      }
    
      .filter-search {
        input {
          padding: 0.6rem 1rem;
          width: 80%;
        }
      }
    
      .filter-category {
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.4rem;
    
          button {
            border: none;
            background-color: ${({ theme }) => theme.colors.white};
            text-transform: capitalize;
            cursor: pointer;
    
            &:hover {
              color: ${({ theme }) => theme.colors.btn};
            }
          }
    
          .active {
            border-bottom: 1px solid #000;
            color: ${({ theme }) => theme.colors.btn};
          }
        }
      }
    
      .filter-company--select {
        padding: 0.3rem 1.2rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.text};
        text-transform: capitalize;
      }
    
      .filter-color-style {
        display: flex;
        justify-content: center;
      }
    
      .color-all--style {
        background-color: transparent;
        text-transform: capitalize;
        border: none;
        cursor: pointer;
      }
      .btnStyle {
        width: 2rem;
        height: 2rem;
        background-color: #000;
        border-radius: 50%;
        margin-left: 1rem;
        border: none;
        outline: none;
        opacity: 0.5;
        cursor: pointer;
    
        &:hover {
          opacity: 1;
        }
      }
    
      .active {
        opacity: 1;
      }
    
      .checkStyle {
        font-size: 1rem;
        color: #fff;
      }
    
      .filter_price {
        input {
          margin: 0.5rem 0 1rem 0;
          padding: 0;
          box-shadow: none;
          cursor: pointer;
        }
      }
    
      .filter-shipping {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    
      .filter-clear .btn {
        background-color: #ec7063;
        color: #000;
      }
    `;
