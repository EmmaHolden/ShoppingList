import { useState } from 'react';

const TotalChecker = ({ items, totalItems, totalCost, setTotalItems, setTotalCost }) => {
    let runningTotalItems = 0
    let runningTotalCost = 0
    {items.map((item, index) => {
        runningTotalItems += item.counter,
        runningTotalCost += Number(item.displayPrice)})} 
      setTotalItems(runningTotalItems)   
      setTotalCost(runningTotalCost)  
    return (
      <div className = "total">
        <p>Total: {totalItems} items costing £{totalCost}</p>
      </div>
    );
  };
  
  export default TotalChecker;