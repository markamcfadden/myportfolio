import styled from "styled-components";
import { useState } from "react";

function ProjectCard({
  title,
  status,
  description,
  live_link,
  github_repo,
  tech_stack,
  image_url,
}) {
  const [showTech, setShowTech] = useState(false);
  return (
    <CardContainer>
      <CardImage src={image_url} alt={title} />
      <CardTitle>
        {title} <CardStatus>status: {status}</CardStatus>
      </CardTitle>
      <CardBody>
        <CardText>{description}</CardText>
      </CardBody>
      <ButtonContainer>
        {tech_stack && tech_stack.length > 0 && (
          <CardButton onClick={() => setShowTech(true)}>TechStack</CardButton>
        )}
        {github_repo && (
          <CardButton as="a" href={github_repo} target="_blank">
            GitHub
          </CardButton>
        )}{" "}
        {live_link && (
          <CardButton as="a" href={live_link} target="_blank">
            Live Site
          </CardButton>
        )}
      </ButtonContainer>
      {showTech && (
        <TechModal onClick={() => setShowTech(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>🛠 Tech Stack</h3>
            <ul>
              {tech_stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <CloseButton onClick={() => setShowTech(false)}>Close</CloseButton>
          </ModalContent>
        </TechModal>
      )}
    </CardContainer>
  );
}

export default ProjectCard;

const CardContainer = styled.div`
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
`;

const CardTitle = styled.h2`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardStatus = styled.span`
  font-weight: normal;
  font-size: 16px;
`;

const CardBody = styled.div``;

const CardText = styled.p`
  padding: 5px;
  margin-bottom: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 20px;
`;

const CardButton = styled.button`
  background-color: black;
  color: white;
  padding: 15px;
  min-width: 80px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00ff88;
    color: black;
  }
`;

const TechModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  color: #222;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  text-align: center;

  h3 {
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const CloseButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #00ff88;
    color: black;
  }
`;
