import CardsContainer from './component/CardsContainer'
import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {

  const[items, setItems] = useState([])

  const getData = async() => {
    const itemsData =  await axios.get("https://fakestoreapi.com/products")
    console.log(itemsData.data)
    setItems(itemsData.data)


    
  }

  return (
    <div>
      <CardsContainer getData = {getData} items = {items}/>
    </div>
  )
}

export default App
