import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <LinkContainer>
        <StyledLink to="/aboutme">About Me</StyledLink>
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
  max-width: 1500px;
  padding: 40px;
  background-color: grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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
  padding: 10px;

  &.active {
    font-weight: bold;
    background-color: green;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 5px;
  }
`;
