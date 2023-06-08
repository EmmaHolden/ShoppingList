'use client'

import { useState } from 'react'
import './App.css'
import Form from '@/components/Form'
import ShoppingList from '@/components/ShoppingList'
import TotalChecker from '@/components/TotalChecker'
import SearchBar from '@/components/SearchBar'

const App = () => {
  const [nameInput, setNameInput] = useState('')
  const [priceInput, setPriceInput] = useState('')
  const [items, setItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => { 
    e.preventDefault()
    let newItems = [...items]
    let submittedItem = { name: nameInput, basePrice: priceInput, displayPrice: priceInput, counter: 1, visible: true}
    newItems.push(submittedItem) 
    setItems(newItems) 
    setNameInput('') 
    setPriceInput('')
  }

  const clearSearch = (items, setQuery) => {
    let newItems = [...items]
    {newItems.map((item) => {
          item.visible = true;
  })}
    setItems(newItems)
    setQuery('')
  }

  const deleteItem = (index) => {
    let newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const increaseCounter = (item) => {
    let newItems = [...items]
    item.counter += 1;
    item.displayPrice = item.basePrice * item.counter;
    setItems(newItems)
  }

  const decreaseCounter = (item) => {
    if (item.counter > 1) {
    let newItems = [...items]
    item.counter -= 1;
    item.displayPrice = item.basePrice * item.counter;
    setItems(newItems)
  }}
  

  return (
    <div>
      <div>
        <SearchBar items = {items} query = {query} setQuery = {setQuery} clearSearch = {clearSearch}/>
      </div>
      <div>
        {items.map((item, index) => {
          if (item.visible == true) {
          return (
            <ShoppingList key={index} item={item} itemIndex={index} deleteItem={deleteItem} increaseCounter = {increaseCounter} decreaseCounter = {decreaseCounter} />
          )}})}
      </div>
      <div>
        <Form handleSubmit = {handleSubmit} nameInput = {nameInput} setNameInput = {setNameInput} priceInput = {priceInput} setPriceInput = {setPriceInput}/>
      </div>
      <div>
        <TotalChecker items = {items} totalItems = {totalItems} setTotalItems = {setTotalItems} totalCost = {totalCost} setTotalCost = {setTotalCost}/>
      </div>
    </div>
  )
}
export default App
