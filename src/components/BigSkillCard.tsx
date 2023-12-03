import { styled } from "styled-components"

interface IBigSkillCard {
  title: string
  description: string
}

const BigSkillCard = ({ title, description }: IBigSkillCard) => {
  return (
    <Card>
      <Header>{title}</Header>
      <p>{description}</p>
    </Card>
  )
}

const Card = styled.div`
  padding: 0.8rem 1.6rem;
  background-color: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.2rem);
  }
`

const Header = styled.div`
  font-weight: bold;
`

export default BigSkillCard
