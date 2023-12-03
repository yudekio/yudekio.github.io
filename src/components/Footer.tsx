import { styled } from "styled-components"
import Links from "./Links"

const Footer = () => {
  return (
    <Container>
      <Name>@ ANDRII PROKHOR 2023</Name>
      <Links></Links>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.h1`
  font-weight: 700;
`

export default Footer
