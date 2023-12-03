import { Container, ContainerCards, Header } from "./Projects";
import SkillCard from "./SkillCard";
import { styled } from "styled-components";
import BigSkillCard from "./BigSkillCard";

const Skills = () => {
  return (
    <Container>
      <Header>Skills</Header>
      <ContainerSkill>
        <SkillCard text="C++" />
        <SkillCard text="UE" />
        <SkillCard text="Blender" />
        <SkillCard text="JavaScript" />
        <SkillCard text="TypeScript" />

        <SkillCard text="React" />
        <SkillCard text="Next.js" />
        <SkillCard text="HTML" />
        <SkillCard text="CSS" />

        <SkillItem></SkillItem>
      </ContainerSkill>
      <BigContainer>
        <ContainerCards>
          <BigSkillCard
            title="Apps using Next.js"
            description="Experienced in creating websites using Next.js, React and TypeScript"
          />
          <BigSkillCard
            title="2D and 3D game development"
            description="Skilled in writing C++ code and creating environment, scripts in Unreal Engine"
          />
        </ContainerCards>
      </BigContainer>
    </Container>
  );
};

const ContainerSkill = styled.div`
  display: flex;
  gap: 0.6rem;
  padding: 2rem 2rem 0 2rem;

  @media (max-width: 1500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const SkillItem = styled.div`
@media (max-width: 425px) {
  /* Span two columns for the last item on small screens */
  &:last-child {
    grid-column: span 2;
  }
`;

const BigContainer = styled.div`
  display: flex;
`;

export default Skills;
