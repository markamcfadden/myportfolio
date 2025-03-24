import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TerminalIntro from "../components/TerminalIntro";
import Biography from "../components/Biography";

function AboutMePage() {
  return (
    <PageContainer>
      <Navbar />
      <TerminalIntro />
      <AboutMeContainer>
        <Biography />
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
  align-items: center;
  justify-content: center;
  padding: 25px;
  width: 100%;
  max-width: 1500px;
`;
