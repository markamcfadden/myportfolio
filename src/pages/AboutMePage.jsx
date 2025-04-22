import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TerminalIntro from "../components/TerminalIntro";
import Biography from "../components/Biography";
import ProfilePhoto from "../components/ProfilePhoto";

function AboutMePage() {
  return (
    <PageContainer>
      <Navbar />
      <AboutMeContainer>
        <LeftSide>
          <ProfilePhoto />
          <SocialButton
            href="https://docs.google.com/document/d/1AHh-2f_3-u4WlvhDRtcPlP81jh-xFKQ7FoxItT863wI/edit?usp=sharing"
            target="_blank"
          >
            View My CV
          </SocialButton>
          <SocialButton href="https://github.com/markamcfadden" target="_blank">
            GitHub
          </SocialButton>
          <SocialButton
            href="https://www.linkedin.com/in/mark-mcfadden-226a821b3/"
            target="_blank"
          >
            LinkedIn
          </SocialButton>
        </LeftSide>
        <RightSide>
          <TerminalIntro />
          <Biography />
        </RightSide>
      </AboutMeContainer>
      <Footer />
    </PageContainer>
  );
}

export default AboutMePage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f7f3;
`;

const AboutMeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  max-width: 1500px;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const LeftSide = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    order: 2;
  }
`;

const RightSide = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 100%;
    gap: 20px;
    order: 1;
  }
`;

const SocialButton = styled.a`
  display: flex;
  background-color: black;
  color: white;
  padding: 15px;
  min-width: 160px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;
  justify-content: center;

  &:hover {
    background-color: #00ff88;
    color: black;
  }
`;
