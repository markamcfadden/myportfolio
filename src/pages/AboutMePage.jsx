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
      <TerminalIntro />
      <AboutMeContainer>
        <ProfilePhoto />
        <Biography />
        <DownloadLink href="cvlink" download>
          Download My CV
        </DownloadLink>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 100%;
  max-width: 1500px;
`;

const DownloadLink = styled.a`
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
