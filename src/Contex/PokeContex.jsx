import { createContext, useReducer } from "react";
import PokeReducer from "./PokeReducer";

const PokeContext = createContext ()


export const PokeProvider = ({children}) => {

       const initialState = {
        score : 90,
        life: 3,
        Pokemon : null,
        visibility : false

       }

       const [state, dispatch] = useReducer(PokeReducer, initialState)

  return (
       <PokeContext.Provider value={{...state, dispatch}} >
              {children}
       </PokeContext.Provider>
  )


}

export default PokeContext