import styled from "styled-components";
import { useState } from "react";
import CourseCard from "./CourseCard";
import Flag from "react-world-flags";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiReactrouter,
  SiStyledcomponents,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiJest,
  SiTestinglibrary,
  SiGithub,
  SiGit,
  SiNetlify,
  SiRender,
  SiJirasoftware,
  SiTrello,
  SiFigma,
  SiInsomnia,
} from "react-icons/si";

function Skills() {
  const [activeSection, setActiveSection] = useState("skills");

  const skills = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "Supabase", icon: <SiSupabase color="#3ecf8e" /> },
      ],
    },
    {
      category: "Testing",
      items: [
        { name: "Jest", icon: <SiJest color="#c21325" /> },
        { name: "Supertest", icon: <SiTestinglibrary color="#e33332" /> },
      ],
    },
    {
      category: "Version Control & Deployment",
      items: [
        { name: "GitHub", icon: <SiGithub color="#181717" /> },
        { name: "Git", icon: <SiGit color="#f05032" /> },
        { name: "GitHub Pages", icon: <SiGithub color="#181717" /> },
        { name: "Netlify", icon: <SiNetlify color="#00c7b7" /> },
        { name: "Render", icon: <SiRender color="#46e3b7" /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact color="#61dafb" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
        { name: "React Router", icon: <SiReactrouter color="#ca4245" /> },
        {
          name: "Styled Components",
          icon: <SiStyledcomponents color="#db7093" />,
        },
        { name: "Vite", icon: <SiVite color="#646cff" /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Trello", icon: <SiTrello color="#0079bf" /> },
        { name: "Jira", icon: <SiJirasoftware color="#0052cc" /> },
        { name: "Figma", icon: <SiFigma color="#a259ff" /> },
        { name: "Insomnia", icon: <SiInsomnia color="#4000bf" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#000000" /> },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        {
          name: "Spanish (B2 level)",
          icon: <Flag code="es" style={{ width: "2.5rem", height: "2rem" }} />,
        },
      ],
    },
  ];

  const courses = [
    {
      name: "Software Development Bootcamp in JavaScript",
      provider: "Northcoders",
      description:
        "An intensive bootcamp covering JavaScript fundamentals, database design with PostgreSQL, and building RESTful APIs using Express. Developed responsive front-end applications with React and Next.js. Practiced pair programming, agile workflows, and test-driven development throughout.",
      status: "Completed 14/03/2025",
      certificateLink: "/public/NorthcodersCertificate.pdf",
    },
    {
      name: "Playwright JS/TS Automation Testing from Scratch & Framework",
      provider: "Rahul Shetty, Udemy",
      description:
        "An end-to-end automation course using Playwright with JavaScript. Built frameworks with Cucumber BDD and Mocha, integrating UI and API testing, and running tests in CI/CD with Docker. Gained hands-on experience automating real-world web apps and advanced debugging with Playwright tools.",
      status: "In Progress",
      certificateLink: null,
    },
    {
      name: "The Complete JavaScript Course 2025: From Zero to Expert!",
      provider: "Jonas Schmedtmann, Udemy",
      description:
        "A complete JavaScript Course, mastering modern JavaScript from basics to advanced concepts. Built projects like a bankist app, mapty, and forkify, applying OOP, asynchronous JavaScript, and real-world problem solving.",
      status: "In Progress",
      certificateLink: null,
    },
  ];

  return (
    <Container>
      <ToggleButtons>
        <ToggleButton
          active={activeSection === "skills"}
          onClick={() => setActiveSection("skills")}
        >
          Skills
        </ToggleButton>
        <ToggleButton
          active={activeSection === "courses"}
          onClick={() => setActiveSection("courses")}
        >
          Courses
        </ToggleButton>
      </ToggleButtons>

      {activeSection === "skills" && (
        <SectionContainer>
          <SkillsRow>
            {skills.map((skillCategory, index) => {
              return index % 2 === 0 ? (
                <SkillsColumn key={skillCategory.category}>
                  <SectionTitle>{skillCategory.category}</SectionTitle>
                  <IconGrid>
                    {skillCategory.items.map((skill) => (
                      <SkillItem key={skill.name}>
                        <IconBox>{skill.icon}</IconBox>
                        <SkillName>{skill.name}</SkillName>
                      </SkillItem>
                    ))}
                  </IconGrid>
                </SkillsColumn>
              ) : null;
            })}
            {skills.map((skillCategory, index) => {
              return index % 2 !== 0 ? (
                <SkillsColumn key={skillCategory.category}>
                  <SectionTitle>{skillCategory.category}</SectionTitle>
                  <IconGrid>
                    {skillCategory.items.map((skill) => (
                      <SkillItem key={skill.name}>
                        <IconBox>{skill.icon}</IconBox>
                        <SkillName>{skill.name}</SkillName>
                      </SkillItem>
                    ))}
                  </IconGrid>
                </SkillsColumn>
              ) : null;
            })}
          </SkillsRow>
        </SectionContainer>
      )}
      {activeSection === "courses" && (
        <SectionContainer>
          <CoursesGrid>
            {courses.map((course) => (
              <CourseCard
                key={course.name}
                title={course.name}
                provider={course.provider}
                description={course.description}
                status={course.status}
                certificateLink={course.certificateLink}
              />
            ))}
          </CoursesGrid>
        </SectionContainer>
      )}
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleButtons = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 20px;
`;

const ToggleButton = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  min-width: 140px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00ff88;
    color: black;
  }
`;

const SectionContainer = styled.div``;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the columns on smaller screens */
  }
`;

const SkillsColumn = styled.div`
  flex: 1;
  min-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 100%; /* Take up full width on small screens */
  }
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
  width: 100%;
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

const IconBox = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  width: 60px;
  height: 60px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SkillName = styled.span`
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
`;

const CoursesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
