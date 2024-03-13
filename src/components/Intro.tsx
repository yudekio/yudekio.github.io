import "../index.css";
import styled from "styled-components";

import avatar from "../../public/avatar2.png";
import Links from "./Links";

const Intro = () => {
  return (
    <>
      <SideContainer>
        <Avatar src={avatar}></Avatar>
        <NameSurname>Andrii Prokhor</NameSurname>
        <Links></Links>
        <Description>
          Software Engineer
          <br />
          <br />
          andrii.prkhr@gmail.com
        </Description>
      </SideContainer>
    </>
  );
};

export default Intro;

const SideContainer = styled.div`
  position: sticky;
  padding: 1.5rem 3rem 6rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 30%;
  margin: 0 left;
  background-color: var(--glass);
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  border-right: solid 1px var(--glass-border);
  transition: all 0.15s ease;

  @media (max-width: 960px) {
    padding-top: 4rem;
    position: static;
    height: auto;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
  max-width: 420px;
  margin: 0 auto 2rem auto;
`;

const NameSurname = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const Description = styled.p`
  font-size: 1rem;
`;
