import { useState } from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <Slider/>

      <ProductionHouse/>

      <GenreMovieList/>
    </>
  )
}

export default App
