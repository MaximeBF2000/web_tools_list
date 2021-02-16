import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  padding: 2rem 5rem;
  padding-bottom: 10rem;

  @media screen and (max-width: 800px) {
    padding: 2rem 1rem;
  }
`

export const CategoriesContainer = styled.div``

export const CategoryTitle = styled.h2`
  margin-bottom: 1rem;
  font-weight: 800;
`

export const ItemNotFound = styled.p`
  color: grey;
  font-size: .9rem;
`

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.a.attrs(() => ({ target: "_blank" }))`
  cursor: pointer;
  display: flex;
  column-gap: 2rem;
  align-items: center;
  box-shadow: 0 2px 15px lightgrey;
  padding: 2rem;
  color: inherit;
  text-decoration: none;
  transition: all .3s;

  &:hover {
    box-shadow: 0 4px 15px #afafaf;
    transform: translateY(-3px);
  }
`

export const Image = styled.img`
  width: clamp(50px, 8vw, 400px);
`

export const Text = styled.div`

`

export const Title = styled.h3`
  margin-bottom: .5rem;
  font-size: 1.3rem;
`

export const Description = styled.p`

`