 export const fetchPokemon = async () => {
    const random  = Math.floor(Math.random() * 150 + 1)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    const data = await response.json()
   return data
    
}