import styled from "styled-components";
import Navbar from "../components/Navbar";
import Biography from "../components/Biography";

function AboutMePage() {
  return (
    <PageContainer>
      <Navbar />
      <Biography />
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
