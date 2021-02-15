export default (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "SET_CATEGORY":
      return { ...state, selectedCategory: payload }
    case "SET_PRICE":
      return { ...state, selectedPrice: payload }
    case "OPEN_PROPOSAL_POPUP":
      return { ...state, proposalPopupIsOpen: !state.proposalPopupIsOpen }
    default:
      return state
  }
}