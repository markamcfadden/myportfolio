import styled from "styled-components";
import { Link } from "react-router-dom";
import TerminalIntro from "../components/TerminalIntro";

function Homepage() {
  return (
    <PageContainer>
      <TerminalIntro />
      <ButtonContainer>
        <NavButton to="/aboutme">About Me</NavButton>
        <NavButton to="/projects">My Projects</NavButton>
        <NavButton to="/contact">Contact</NavButton>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Homepage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: black;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  gap: 15px;
  align-items: flex-start;
`;

const NavButton = styled(Link)`
  background-color: #00ff00;
  width: 100%;
  color: black;
  font-family: "Courier New", Courier, monospace;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #00ffaa;
  }

  &:active {
    background-color: #00cc00;
  }
`;
