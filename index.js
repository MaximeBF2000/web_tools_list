import React from 'react'
import {render} from "react-dom"
import { StateProvider, useStore } from "./context"
import "./global.css"

import { Header, Filtrer, ToolList, ProposalPopup } from "./components"
import db from "./db"

export default function App() {
  const { proposalPopupIsOpen } = useStore()

  return (
    <div className="app">
      <Header />
      <Filtrer categories={db.categories} />
      {proposalPopupIsOpen && <ProposalPopup />}
      <ToolList tools={db.tools} categories={db.categories} />
    </div>
  )
}

render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.querySelector("#root")
)