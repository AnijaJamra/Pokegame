import React, { useContext, useEffect } from 'react'
import Boll from "../assets/boll.png"
import PokeContext from '../Contex/PokeContex'

const ScoreBoard = () => {

const { score, life} = useContext(PokeContext)



useEffect(() => {
   if (score === 100) {
     setTimeout(() => {
      window.location.reload()
     }, 10000) 
   } else if (life <= 0) {
      window.alert("YOU ARE LOSER!!!")
      window.location.reload()
   }
},[score, life])




  return (
     <div>

        <div className='border border-gray-300 m-2 p-2 rounded-sm w-xl  flex justify-between items-center  '>
            <h1 className='text-gray-500 text-xl '>score:{score}</h1>
            <div className='space-x-2 flex justify-end pt-4 '>
              {
               life === 3 ? (<>
            <img className='h-8' src={Boll} alt="" />
            <img className='h-8' src={Boll} alt="" />
            <img className='h-8' src={Boll} alt="" />
               </>) : life === 2 ? (<>
            <img className='h-8' src={Boll} alt="" />
            <img className='h-8' src={Boll} alt="" />
               </>) : (<>
            <img className='h-8' src={Boll} alt="" />
            
               </>)
              }
            </div>
                          
        </div>
       
     </div>
 
  )
}

export default ScoreBoard
