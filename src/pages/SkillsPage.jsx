import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SkillsPage() {
  return (
    <PageContainer>
      <Navbar />
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
