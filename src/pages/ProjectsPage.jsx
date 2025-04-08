import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";

function ProjectsPage() {
  return (
    <PageContainer>
      <Navbar />
      <ProjectsContainer>
        <ProjectList />
      </ProjectsContainer>
      <Footer />
    </PageContainer>
  );
}

export default ProjectsPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f7f3;
`;

const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1600px;
`;
