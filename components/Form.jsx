import { useState } from 'react';

const Form = ({ nameInput, setNameInput, priceInput, setPriceInput, handleSubmit }) => {
  return (
    <div className = "form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)} />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={priceInput}
            onChange={(event) => setPriceInput(event.target.value)} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Form;