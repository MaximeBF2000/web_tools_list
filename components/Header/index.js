import React from 'react'
import * as Header from "./styled"

function MyHeader() {
  return (
    <Header.Container>
      <Header.Title>Liste d'outils / apps utils</Header.Title>
      <Header.Description>
        Trouver les outils les plus utils et adaptés à vos activités pour gagner en productivité, triés par catégories
      </Header.Description>
    </Header.Container>
  )
}

export default MyHeader
