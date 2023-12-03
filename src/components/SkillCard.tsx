import { styled } from "styled-components"

interface ISkillCard {
  text: string
}

const SkillCard = ({ text }: ISkillCard) => {
  return <Card>{text}</Card>
}

const Card = styled.div`
  padding: 0.8rem 1.6rem;
  background-color: var(--glass);
  border: 1px solid var(--glass-border);
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.2rem);
  }
`

export default SkillCard
