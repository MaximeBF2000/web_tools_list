import React, { Fragment } from "react"
import * as Filtrer from "./styled"
import { useStore } from "../../context"

function MyFiltrer({ categories }) {
  const { dispatch } = useStore()

  const handleCategoryChange = e => {
    dispatch({ type: "SET_CATEGORY", payload: e.target.value })
  }

  const handlePriceChange = e => {
    dispatch({ type: "SET_PRICE", payload: e.target.value })
  }

  const showProposalPopup = () => dispatch({ type: "OPEN_PROPOSAL_POPUP" })

	return (
		<Filtrer.Container>
			<Filtrer.Select onChange={handleCategoryChange}>
        <option value="all">Toutes les catégories</option>
				{categories.map((category, i) => (
          <option value={category.id} key={i}>{category.french}</option>
				))}
			</Filtrer.Select>
      <Filtrer.Select onChange={handlePriceChange}>
        <option value="all">Gratuit ou payant</option>
        <option value="free">Entièrement gratuit</option>
        <option value="freemium">Option gratuite</option>
        <option value="pay">Payant</option>
      </Filtrer.Select>
      <Filtrer.ShowProposalPopupButton onClick={showProposalPopup}>
        Proposer un projet
      </Filtrer.ShowProposalPopupButton>
		</Filtrer.Container>
	)
}

export default MyFiltrer
