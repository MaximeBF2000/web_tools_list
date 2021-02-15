import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: lightgrey;
  padding: 2rem;
  display: flex;
  justify-content: center;
  column-gap: 5rem;
`

export const Select = styled.select.attrs(() => ({ type: "select" }))`
  cursor: pointer;
  outline: none;
  padding: .5rem 2rem;
  border: none;
`

export const ShowProposalPopupButton = styled.button`
  all: unset;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #00FF65;
  color: white;
  padding: 0 2rem;
  font-size: .85rem;
`