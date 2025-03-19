import styled from "styled-components";
import Navbar from "../components/Navbar";

function ContactPage() {
  return (
    <PageContainer>
      <Navbar />
      <p>This is the contacts page</p>
    </PageContainer>
  );
}

export default ContactPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: grey;
`;
