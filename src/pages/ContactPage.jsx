import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";

function ContactPage() {
  return (
    <PageContainer>
      <Navbar />
      <ContactContainer>
        <ContactCard />
      </ContactContainer>
      <Footer />
    </PageContainer>
  );
}

export default ContactPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  border: 1px solid red;
`;

const ContactContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin-bottom: 50px;
`;
