import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import api_img from "../assets/api_mmnews.webp";
import code4change_img from "../assets/code4change_d.jpg";
import mmnews_img from "../assets/mmnews_img.webp";
import gmn_img from "../assets/guess-my-number.png";
import tt_img from "../assets/tartan_tactics.png";

function ProjectList() {
  const myProjects = [
    {
      project_id: 5,
      title: "Tartan Tactics",
      status: "coming soon",
      description:
        "A full-stack Scottish Premiership Fantasy Football Game. Users create custom teams and manage transfers to score points based of events in the real world games. Features include competing in custom leagues vs friends.",
      live_link: "",
      github_repo: "",
      tech_stack: [],
      image_url: tt_img,
    },
    {
      project_id: 6,
      title: "Tartan Tactics Backend",
      status: "in progress",
      description:
        "The backend for a full-stack Scottish Premiership Fantasy Football Game. This API handles user authentication, team management, player selection, scoring, and other key game features. Built with Node.js, Express, and PostgreSQL.",
      live_link: "",
      github_repo: "https://github.com/markamcfadden/tartan_tactics_be",
      tech_stack: ["PostgreSQL", "Express.js", "Node.js", "Jest", "Supertest"],
      image_url: api_img,
    },
    {
      project_id: 2,
      title: "MMNews",
      status: "live",
      description:
        "A mobile-first news platform built with React, React Router, and Styled Components. Users can browse, filter, and submit articles, post comments, and vote — all powered by the MMNews API.",
      live_link: "https://mmnews.netlify.app/",
      github_repo: "https://github.com/markamcfadden/MMNews",
      tech_stack: [
        "react.js",
        "vite",
        "react router",
        "axios",
        "styled components",
      ],
      image_url: mmnews_img,
    },
    {
      project_id: 1,
      title: "MMNews API",
      status: "live",
      description:
        "A RESTful API built with Node.js, Express, and PostgreSQL, enabling users to retrieve and interact with news articles, comments, and user accounts.",
      live_link: "https://mnn-jvu9.onrender.com/api",
      github_repo: "https://github.com/markamcfadden/be-nc-news-project",
      tech_stack: ["postgresQL", "express.js", "node.js", "jest", "supertest"],
      image_url: api_img,
    },
    {
      project_id: 3,
      title: "Code4Change",
      status: "in progress",
      description:
        "A platform hosting open-source projects for social good. Users log in via GitHub OAuth, filter projects by category or skillset, and track contributions. Progress is gamified with XP and leaderboards.",
      live_link: "",
      github_repo: "https://github.com/markamcfadden/code4change",
      tech_stack: [
        "next.js",
        "postgresQL",
        "express.js",
        "password.js",
        "javascript",
        "typescript",
        "cron-jobs",
        "trello",
      ],
      image_url: code4change_img,
    },
    {
      project_id: 4,
      title: "Guess My Number",
      status: "live",
      description:
        "A retro-style number guessing game where players guess a random number between 1 and 1000. The faster you guess, the higher your score!",
      live_link: "https://markamcfadden.github.io/guess-my-number/",
      github_repo: "https://github.com/markamcfadden/guess-my-number",
      tech_stack: ["HTML", "CSS", "JavaScript"],
      image_url: gmn_img,
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
