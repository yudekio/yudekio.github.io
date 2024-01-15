import { Container, ContainerCards, Header } from "./Projects";
import SkillCard from "./SkillCard";
import { styled } from "styled-components";
import BigSkillCard from "./BigSkillCard";

const Skills = () => {
  return (
    <Container>
      <Header>Skills</Header>
      <ContainerSkill>
        <SkillCard text="Python" />
        <SkillCard text="TypeScript" />
        <SkillCard text="JavaScript" />
        <SkillCard text="SQL" />
        <SkillCard text="React" />
        <SkillCard text="Node.js" />
        <SkillCard text="Statistic" />
        <SkillCard text="HTML" />
        <SkillCard text="CSS" />
        <SkillCard text="C++" />

        <SkillItem></SkillItem>
      </ContainerSkill>
      <BigContainer>
        <ContainerCards>
          <BigSkillCard
            title="Developing apps using TypeScript and Python"
            description="Created and designed many different websites with frameworks such as React, Next.js, Django. I worked with REST API and created programs in Python. I took courses in C++ at my university.   "
          />
          <BigSkillCard
            title="Data analysis"
            description="During my university studies, I researched and visualized data using tools such as Excel, Power BI, and Python. Also I have experience in SQL/NoSQL databases such as PostgreSQL, MySQL, MongoDB."
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
