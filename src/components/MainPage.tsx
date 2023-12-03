import Projects from "./Projects"
import { styled } from "styled-components"
import Skills from "./Skills"
import Footer from "./Footer"

const MainPage = () => {
  return (
    <Container>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </Container>
  )
}

const Container = styled.div`
  padding: 2rem 8rem;
  margin: 0 auto;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1440px) {
    padding: 2rem 2rem;
  }
`

export default MainPage
