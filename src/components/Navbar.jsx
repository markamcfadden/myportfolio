import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <LinkContainer>
        <StyledLink to="/">About Me</StyledLink>
        <StyledLink to="/projects">My Projects</StyledLink>
        <StyledLink to="/contact">Contact Me</StyledLink>
      </LinkContainer>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  max-width: 1600px;
  padding: 40px;
  background-color: #0d0d0d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  padding: 10px 20px;
  color: #e0e0e0;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  &.active {
    font-weight: bold;
    background-color: #00ff88;
    color: #0d0d0d;
  }

  &:hover {
    background-color: #00c76a;
    color: #0d0d0d;
    box-shadow: 0 0 10px #00ff88;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 5px;
  }
`;
