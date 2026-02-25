import CardsContainer from './component/CardsContainer'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const[items, setItems] = useState([])
  const[loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)

  const itemsUrl = `https://picsum.photos/v2/list?page=${page}&limit=10`

  const getData = async() => {
    setLoading(true)
    const itemsData =  await axios.get(itemsUrl)
    setItems(itemsData.data)
    setLoading(false) 
  }


  useEffect(() => {
    getData()
  }, [page])

  const nextPage = () =>{
    setPage(prev => prev+ 1)
  }

    const prevPage = () =>{
    setPage(prev => Math.max(prev-1, 1))
  }

  return (
    <div className='flex flex-col items-center min-h-screen'>
      {loading ? (
        <p className='text-xl flex items-center min-h-screen'>Loading...</p>
      ): (
        <div>
          <CardsContainer items = {items}/>
        </div>
      )}
      {!loading?(
        <div className='flex items-center'>
          <button onClick= {prevPage} className='bg-amber-400 px-4 py-2 m-4'>Prev</button>
          <p>{page}</p>
          <button onClick={nextPage} className='bg-amber-400 px-4 py-2 m-4'>Next</button>
      </div>
      ) : (<div></div>)}
      
    </div>
  )
}

export default App
