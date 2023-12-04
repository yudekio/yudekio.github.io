import { styled } from "styled-components";

import { BsDisplay } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
interface IProjectCard {
  title: any;
  image: any;
  tag: string;
  description: string;
  year: string;
  demoLink: string;
  githubLink: string;
}

const ProjectCard = (props: IProjectCard) => {
  return (
    <Container>
      <ContainerDesc>
        <Header>{props.title}</Header>
        <ContainerTagYear>
          {" "}
          <span>{props.tag}</span>
          <span> • </span>
          <span>{props.year}</span>
        </ContainerTagYear>

        <p>{props.description}</p>
        <ContainerIcons>
          <a
            className="hovertext"
            data-hover="demo"
            href={props.demoLink}
            target="_blank"
          >
            <BsDisplay />
          </a>
          <a
            className="hovertext"
            data-hover="github"
            href={props.githubLink}
            target="_blank"
          >
            {" "}
            <FiGithub />
          </a>
        </ContainerIcons>
      </ContainerDesc>
      <ImageProject src={props.image} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  border-radius: 0.5rem;
  background-color: var(--glass);
  border: solid 1px var(--glass-border);
  padding: 2rem 1.8rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.2rem);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.2rem;
  }
`;

const ContainerDesc = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.4rem;
  padding-right: 2rem;
  @media (max-width: 425px) {
    order: 1;
    padding-right: 0;
    align-items: center;
  }
`;
const ContainerIcons = styled.div`
  display: flex;
  gap: 0.6rem;
  font-size: 1.8rem;
  margin-top: auto;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 1.4rem;
`;

const ImageProject = styled.img`
  border-radius: 0.5rem;
  height: 14rem;
  object-fit: cover;
  overflow: hidden;
  @media (max-width: 425px) {
    align-items: center;
    justify-content: center;
    place-items: center;
    width: 100%;
  }
`;

const ContainerTagYear = styled.div`
  color: #ffc0cb;
  font-weight: 500;
`;

export default ProjectCard;
