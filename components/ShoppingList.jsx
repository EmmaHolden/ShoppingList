import { useState } from 'react';

const ShoppingList = ({ item, itemIndex, toggleCompleteItem, deleteItem, increaseCounter, decreaseCounter }) => {
   return (
     <div className = "mainBox">
        <div className = "container">
            <button onClick = {() => deleteItem(itemIndex)}>X</button>
        </div>
        <div className = "container">
            <p key={itemIndex}>{item.name}</p>
        </div>
        <div>
            <p key={itemIndex}>£{item.displayPrice}</p>
        </div>
        <div className = "container">
            <button onClick = {() => decreaseCounter(item)}>-</button>            
            <p key={itemIndex}>{item.counter}</p>
            <button onClick = {() => increaseCounter(item)}>+</button>
        </div>
     </div>
   );
 };
 
 export default ShoppingList;