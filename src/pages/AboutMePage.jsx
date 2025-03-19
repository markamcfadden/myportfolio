import styled from "styled-components";
import Navbar from "../components/Navbar";

function AboutMePage() {
  return (
    <PageContainer>
      <Navbar />
      <p>This is the about me page</p>
    </PageContainer>
  );
}

export default AboutMePage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: grey;
`;
