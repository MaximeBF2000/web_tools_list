import styled from "styled-components"
import backgroundImage from "../../assets/header_bg.png"

export const Container = styled.header`
  width: 100%;
  height: 60vh;
  background-image: url(${() => backgroundImage});
  filter: grayscale(.5);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 1px 5px black;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: .5rem;
`

export const Description = styled.h1`
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 560px;
  text-align: center;
`