import { styled } from "styled-components";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";

// import { FaItchIo } from "react-icons/fa6";

const Links = () => {
  return (
    <Logo>
      <Icons>
        <a
          className="hovertext"
          href="https://github.com/yudekio"
          target="_blank"
          data-hover="my github"
        >
          {" "}
          <AiFillGithub />
        </a>
        <a
          className="hovertext"
          href="https://www.linkedin.com/in/andriiprokhor"
          target="_blank"
          data-hover="my linkedin"
        >
          <AiFillLinkedin />
        </a>{" "}
        <a
          className="hovertext"
          href="https://www.instagram.com/yudekio"
          target="_blank"
          data-hover="my inst"
        >
          <AiFillInstagram />
        </a>
        {/* <a
          href="https://yudekio.itch.io"
          className="hovertext"
          target="_blank"
          data-hover="itch.io"
        >
          <FaItchIo />
        </a> */}
        <a
          href="mailto:andriiprokhordev@gmail.com"
          className="hovertext"
          data-hover="email"
        >
          <AiFillMail />
        </a>
      </Icons>
    </Logo>
  );
};

const Logo = styled.div``;

const Icons = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
`;

export default Links;
