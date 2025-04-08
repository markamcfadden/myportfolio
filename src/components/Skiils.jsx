import styled from "styled-components";
import { useState } from "react";
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
    { category: "", items: [] },
  ];

  const courses = [
    { name: "Northcoders Bootcamp", status: "Completed" },
    { name: "Course 2", status: "In Progress" },
    { name: "Course 3", status: "In Progress" },
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
          <SectionTitle>Courses</SectionTitle>
          <CourseList>
            {courses.map((course) => (
              <CourseItem key={course.name}>
                <strong>{course.name}</strong> — <em>{course.status}</em>
              </CourseItem>
            ))}
          </CourseList>
        </SectionContainer>
      )}
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  padding: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleButtons = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
`;

const ToggleButton = styled.button`
  background-color: black;
  color: white;
  padding: 15px;
  min-width: 80px;
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
`;

const SkillsColumn = styled.div`
  flex: 1;
  min-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

const CourseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CourseItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
`;
