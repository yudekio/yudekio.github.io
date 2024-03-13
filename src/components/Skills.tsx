import { Container, ContainerCards, Header } from "./Projects";
import SkillCard from "./SkillCard";
import { styled } from "styled-components";
import BigSkillCard from "./BigSkillCard";

const Skills = () => {
  return (
    <Container>
      <Header>Skills</Header>
      <ContainerSkill>
        <SkillCard text="JavaScript" />
        <SkillCard text="TypeScript" />
        <SkillCard text="React" />
        <SkillCard text="React Native" />
        <SkillCard text="Vue.js" />
        <SkillCard text="HTML5" />
        <SkillCard text="CSS3" />
        <SkillCard text="Python" />
        <SkillCard text="SQL" />

        <SkillItem></SkillItem>
      </ContainerSkill>
      <BigContainer>
        <ContainerCards>
          <BigSkillCard
            title="Developing web applications"
            description="Created and designed many different websites with frameworks such as React, Next.js, Vue.js. I worked with RESTful API and created programs in React Native. I took courses in C++/SQL at my university."
          />
          <BigSkillCard
            title="Designing user interfaces"
            description="During my university studies, I delved into designing user interfaces, leveraging tools such as Figma, GIMP. I have hands-on experience with front-end development."
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
