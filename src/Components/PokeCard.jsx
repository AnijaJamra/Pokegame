
import React, { useContext, useEffect, useState } from 'react'
import PokeContext from '../Contex/PokeContex' 
import { fetchPokemon } from '../Contex/PokeService'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const PokeCard = () => {
  const { Pokemon, dispatch, visibility, score } = useContext(PokeContext)
  const [answer, setAnswer] = useState("")
  const { width, height } = useWindowSize()

  const checkAnswer = (e) => {
    e.preventDefault()

    if (answer.toLowerCase() === Pokemon.name.toLowerCase()) {
      dispatch({ type: "INCREASE_SCORE" })
    } else {
      dispatch({ type: "DECREASE_LIFE" })
    }

    getPokemon()
    setAnswer("")
  }

  const getPokemon = async () => {
    dispatch({ type: "CHANGE_VISIBILITY" })

    setTimeout(() => {
      dispatch({ type: "CHANGE_VISIBILITY" })
    }, 1000)

    const data = await fetchPokemon()

    setTimeout(() => {
      dispatch({
        type: "GET_POKEMON",
        payload: {
          name: data.name,
          imgURL: data.sprites.other.dream_world.front_default
        }
      })
    }, 1500)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  if (!Pokemon) {
    return (
      <h1 className='text-center text-gray-400 text-2xl font-bold'>Loading...</h1>
    )
  }

  if (score === 100) {
    return (
      <>
        <Confetti width={width} height={height} />
        <h1 className='text-center my-4 text-3xl font-bold text-orange-700'>YOU ARE WINNER</h1>
        <img className='h-52' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07ba2f00-7724-405c-b082-d795efc00d81/d5ubqtp-17d0e378-e664-4113-866f-c843aa170995.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3YmEyZjAwLTc3MjQtNDA1Yy1iMDgyLWQ3OTVlZmMwMGQ4MVwvZDV1YnF0cC0xN2QwZTM3OC1lNjY0LTQxMTMtODY2Zi1jODQzYWExNzA5OTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2ROnyHwt7AM7vCX5gp4IU5BE1X_eMpBA1JV9WXlyGNo" alt="" />
        <button onClick={() => window. location.reload()} className='bg-blue-600 hover:bg-blue-700 text-2xl font-bold text-white w-150 rounded-md p-2 text-center cursor-pointer'>PLAY AGAIN</button>
      </>
    )
  }

  return (
    <div className='border border-gray-400 rounded-md p-4 flex justify-center items-center flex-col w-xl'>
      <img className={!visibility ? 'h-70 brightness-0' : 'h-52 pb-2'} src={Pokemon.imgURL} alt="" />
      <form onSubmit={checkAnswer}>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          placeholder='Enter Pokemon Name'
          className='m-4 border-b-2 border-gray-400 w-130 p-2 outline-none'
        />
        <button className='bg-green-700 hover:bg-green-800 cursor-pointer p-1 rounded-sm text-white font-bold text-2xl w-full'>
          Submit Answer
        </button>
      </form>   
    </div>
  )
}

export default PokeCard

