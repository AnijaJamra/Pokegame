import React from 'react'
import PokeCard from './PokeCard'
import ScoreBoard from './ScoreBoard'



const MainContainer = () => {
  return (
    <div className='p-5 flex justify-center items-center flex-col'> 
              <h1 className='font-bold text-3xl pb-4 text-center'>Guess the Pokemon?</h1>
      <ScoreBoard/>
      <PokeCard/>
    </div>
  )
}

export default MainContainer
