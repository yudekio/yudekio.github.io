import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";

import StreamStarScreen from "../../public/streamstar-screen.png";
import PortfolioScreen from "../../public/portfolio-screen.png";
import YoriScreen from "../../public/yori-screen.png";
import SnowyStachScreen from "../../public/snowystack.png";

const Projects = () => {
  return (
    <Container>
      <Header>Projects</Header>
      <ContainerCards>
        <StreamStarContainer>
          <ProjectCard
            title={
              <StreamStar>
                <svg
                  viewBox="0 0 141 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6646 12.1215L20.0346 6.22168L14.2905 10.6154L8.33679 6.5103L10.7405 13.331L4.99648 17.7247L12.2261 17.5463L14.6298 24.367L16.7904 18.9882"
                    stroke="#F472B6"
                    strokeWidth="2"
                  />
                  <path
                    d="M20.594 21.448L20.968 19.424H23.916L23.674 20.722L24.268 21.448H28.8L29.68 20.7L30.142 18.148L29.548 17.422H23.894L21.782 14.87L22.486 10.8L25.082 8.59996H32.012L34.146 11.152L33.794 13.198H30.846L31.066 11.878L30.472 11.152H26.116L25.258 11.878L24.862 14.144L25.456 14.87H31.11L33.222 17.422L32.43 21.8L29.856 24H22.706L20.594 21.448ZM35.553 21.58L36.631 15.486H34.651L35.091 13.044H37.115L37.731 9.47996H40.591L39.975 13.044H43.319L42.879 15.508H39.535L38.589 20.81L39.227 21.536H41.823L41.383 24H37.577L35.553 21.58ZM45.1904 13.044H47.8744L47.5444 14.87L49.6344 13.044H52.7584L52.3184 15.508H49.8764L47.2364 17.796L46.1584 24H43.2544L45.1904 13.044ZM51.9177 21.58L53.0397 15.156L55.5257 13.044H61.6857L63.7097 15.508L63.0057 19.49H55.1957L54.9537 20.898L55.5257 21.624H59.0897L59.8817 20.942L59.9697 20.37H62.8297L62.5437 22.02L60.2337 24H53.8977L51.9177 21.58ZM60.4537 17.466L60.6957 16.19L60.0797 15.42H56.6697L55.7897 16.19L55.5477 17.466H60.4537ZM64.5899 21.8L65.0079 19.336L67.2299 17.444H72.9279L73.1479 16.058L72.5979 15.376H69.3199L68.5279 16.058L68.4179 16.674H65.5579L65.8439 15.244L68.3959 13.044H74.0279L76.1179 15.596L74.6439 24H72.0259L72.2899 22.438L70.3979 24H66.3939L64.5899 21.8ZM70.5959 21.756L72.4439 20.238L72.5759 19.512H68.4399L67.7359 20.106L67.5379 21.206L67.9999 21.756H70.5959ZM79.1142 13.044H81.7982L81.4682 14.848L83.5802 13.044H86.2642L87.4962 14.562L89.2562 13.044H92.9742L95.0642 15.596L93.5682 24H90.6642L92.0282 16.278L91.4122 15.508H89.5862L88.2222 16.674L86.9242 24H84.1082L85.4722 16.234L84.9002 15.508H83.6682L81.2042 17.62L80.0822 24H77.1782L79.1142 13.044ZM96.0471 21.448L96.4211 19.424H99.3691L99.1271 20.722L99.7211 21.448H104.253L105.133 20.7L105.595 18.148L105.001 17.422H99.3471L97.2351 14.87L97.9391 10.8L100.535 8.59996H107.465L109.599 11.152L109.247 13.198H106.299L106.519 11.878L105.925 11.152H101.569L100.711 11.878L100.315 14.144L100.909 14.87H106.563L108.675 17.422L107.883 21.8L105.309 24H98.1591L96.0471 21.448ZM111.006 21.58L112.084 15.486H110.104L110.544 13.044H112.568L113.184 9.47996H116.044L115.428 13.044H118.772L118.332 15.508H114.988L114.042 20.81L114.68 21.536H117.276L116.836 24H113.03L111.006 21.58ZM118.773 21.8L119.191 19.336L121.413 17.444H127.111L127.331 16.058L126.781 15.376H123.503L122.711 16.058L122.601 16.674H119.741L120.027 15.244L122.579 13.044H128.211L130.301 15.596L128.827 24H126.209L126.473 22.438L124.581 24H120.577L118.773 21.8ZM124.779 21.756L126.627 20.238L126.759 19.512H122.623L121.919 20.106L121.721 21.206L122.183 21.756H124.779ZM133.298 13.044H135.982L135.652 14.87L137.742 13.044H140.866L140.426 15.508H137.984L135.344 17.796L134.266 24H131.362L133.298 13.044Z"
                    fill="#F472B6"
                  />
                </svg>
              </StreamStar>
            }
            tag="website"
            year="2023"
            description="Modern streaming platform with cool design. Using Next.js, TypeScript, MongoDB and Tailwind."
            image={StreamStarScreen}
            demoLink="https://streamstar.vercel.app"
            githubLink="https://github.com/yudekio/streamstar"
          />
        </StreamStarContainer>
        <ProjectCard
          title="Portfolio"
          tag="website"
          year="2023"
          description="My web-portfolio with glass design. Vite, React, TypeScript and styled-components."
          image={PortfolioScreen}
          demoLink="/"
          githubLink="https://github.com/yudekio/streamstar"
        />
        {/* <ProjectCard
          title="Moon Market"
          tag="website"
          year="2023"
          description="Online store with great sorting. Using Vite, React and Tailwind."
          image={MoonMarketScreen}
          demoLink="https://moon-market.netlify.app"
          githubLink="https://github.com/andriiprokhor/moon-market"
        /> */}

        <ProjectCard
          title="Snowy Stack"
          tag="C++ game"
          year="2023"
          description="Game 2D using SFML library. All UI designed with Figma and GIMP."
          image={SnowyStachScreen}
          demoLink="https://github.com/yudekio/snowystack"
          githubLink="https://github.com/yudekio/snowystack"
        />
        <ProjectCard
          title="Yori"
          tag="website"
          year="2023"
          description="Yori 🍥 - recipe catalog. API, SCSS, Parcel, MVC practice."
          image={YoriScreen}
          demoLink="https://yori-recipes.netlify.app"
          githubLink="https://github.com/andriiprokhor/yori"
        />
      </ContainerCards>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const StreamStar = styled.div`
  max-width: 10rem;
  z-index: -1;
  transition: transform 0.3s ease;
`;

export const ContainerCards = styled.div`
  padding: 2rem 0 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const StreamStarContainer = styled.div`
  &:hover ${StreamStar} {
    transform: scale(1.05);
  }
`;

export default Projects;
