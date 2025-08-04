const PokeReducer =(state, action) => {

     switch (action.type) {

       case "INCREASE_SCORE":
          return {
               ...state,
               score:state.score + 10
               
          }
          case "DECREASE_LIFE":
          return {
               ...state,
               life:state.life - 1
               
          }

          case "GET_POKEMON":
          return {
               ...state,
             Pokemon: action.payload
          }

            case "CHANGE_VISIBILITY":
          return {
               ...state,
             visibility: state.visibility ? false : true
          }



        default:
            return state
     }

}

export default PokeReducer