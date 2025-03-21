import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import dinoslot_img from "../assets/dinosaurs.webp";
import pokergame_img from "../assets/pokergame.webp";
import api_img from "../assets/api_mmnews.webp";

function ProjectList() {
  const myProjects = [
    {
      project_id: 1,
      title: "MMNews API",
      status: "live",
      description:
        "This API allows users to retrieve and interact with articles, comments, and user data",
      live_link: "https://mnn-jvu9.onrender.com",
      github_repo: "https://github.com/markamcfadden/be-nc-news-project",
      tech_stack: ["postgresQL", "express.js", "node.js", "jest", "supertest"],
      image_url: api_img,
    },
    {
      project_id: 2,
      title: "MMNews",
      status: "live",
      description:
        "A mobile-first news application which allows users to read, comment on, vote for and submit news articles",
      live_link: "https://mmnews.netlify.app/",
      github_repo: "https://github.com/markamcfadden/MMNews",
      tech_stack: ["react.js", "styled components"],
      image_url: "",
    },
    {
      project_id: 3,
      title: "McPoker",
      status: "planning",
      description:
        "An interactive poker game allowing users to play vs friends with a live chat feauture",
      live_link: "https://mcpoker.netlify.app/",
      github_repo: "https://github.com/markamcfadden/McPoker",
      tech_stack: ["react.js", "styled components"],
      image_url: pokergame_img,
    },
    {
      project_id: 4,
      title: "DinosaurSlot",
      status: "in progress",
      description: "A dinosaur themed interactive slot machine game",
      live_link: "https://dinoslot.netlify.app/",
      github_repo: "https://github.com/markamcfadden/dinoslot",
      tech_stack: ["react.js", "styled components"],
      image_url: dinoslot_img,
    },
  ];

  return (
    <ListContainer>
      {myProjects.map((project) => (
        <ProjectCard
          key={project.project_id}
          title={project.title}
          status={project.status}
          description={project.description}
          live_link={project.live_link}
          github_repo={project.github_repo}
          tech_stack={project.tech_stack}
          image_url={project.image_url}
        />
      ))}
    </ListContainer>
  );
}

export default ProjectList;

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 450px));
  justify-content: center;
  padding: 20px;
`;
