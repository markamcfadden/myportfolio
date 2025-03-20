import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactCard() {
  return (
    <ContactContainer>
      <Heading>Let's Connect</Heading>
      <Description>
        Whether you'd like to collaborate, chat about tech, or just say hello —
        I'm always open to connecting.
      </Description>
      <ContactInfo>
        <ContactItem href="mcfadden.a.mark@gmail.com">
          <FaEnvelope /> mcfadden.a.mark@gmail.com
        </ContactItem>
        <ContactItem href="https://github.com/markamcfadden" target="_blank">
          <FaGithub /> github.com/markamcfadden
        </ContactItem>
        <ContactItem
          href="https://www.linkedin.com/in/mark-mcfadden-226a821b3/"
          target="_blank"
        >
          <FaLinkedin /> linkedin.com/markmcfadden
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
}

export default ContactCard;

const ContactContainer = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactItem = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;
