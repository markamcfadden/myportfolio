import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skills from "../components/Skiils";

function SkillsPage() {
  return (
    <PageContainer>
      <Navbar />
      <SkillsContainer>
        <Skills />
      </SkillsContainer>
      <Footer />
    </PageContainer>
  );
}

export default SkillsPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: white;
`;

const SkillsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin-bottom: 50px;
`;
