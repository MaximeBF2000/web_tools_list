import React, { createContext, useContext, useReducer } from 'react'
import initialState from "./data"
import reducer from "./reducer"

const AppContext = createContext(initialState)


export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AppContext.Provider>
  )
}

export const useStore = () => useContext(AppContext)