import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";
import reducer from "./reducer";
export const AppContext = createContext();
const initialState = {
  students: [{ id: 1, name: "Tania", age: 34 }],
};
export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const createStudent = () =>
    dispatch({ type: CREATE, payload: "create from context" });
  const updateStudent = () =>
    dispatch({ type: UPDATE, payload: "update from context" });
  const deleteStudent = () =>
    dispatch({ type: DELETE, payload: "delete from context" });
  
  return(
  <AppContext.Provider value={{
    students:state.students,
    createStudent,
    updateStudent,
    deleteStudent,
    dispatch
  }}>
    {children}
  </AppContext.Provider>);
};
export const useAppContext = () => {
  return useContext(AppContext);
};
