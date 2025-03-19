import styled from "styled-components";
import Navbar from "../components/Navbar";

function ProjectsPage() {
  return (
    <PageContainer>
      <Navbar />
      <p>This is the projects page</p>
    </PageContainer>
  );
}

export default ProjectsPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: grey;
`;
