import Intro from "./components/Intro"
import MainPage from "./components/MainPage"
import styled from "styled-components"

function App() {
  return (
    <>
      <Container>
        <Intro></Intro>
        <MainPage></MainPage>
      </Container>
    </>
  )
}

export default App

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 960px) {
    display: block;
  }
`
