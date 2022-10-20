import { CREATE, UPDATE, DELETE } from "./actions"  
const reducer = (state, action) => {
    switch (action.type) {
      case CREATE: {
        return console.log("estudiante creado");
      }
      case UPDATE: {
        return console.log("estudiante AÑADIDO");
      }
      case DELETE: {
        return console.log("estudiante ELIMINADO");
      }
      default:
        return state;
    }
}
export  default reducer