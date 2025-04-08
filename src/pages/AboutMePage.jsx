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
          <DownloadLink href="cvlink" download>
            Download My CV
          </DownloadLink>
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
  background-color: white;
`;

const AboutMeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 25px;
  max-width: 1500px;
  gap: 25px;
`;

const LeftSide = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const RightSide = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const DownloadLink = styled.a`
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

  &:hover {
    background-color: #00ff88;
    color: black;
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
