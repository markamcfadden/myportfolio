import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2025 Mark McFadden. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  max-width: 1600px;
  padding: 40px;
  background-color: #0d0d0d;
  color: #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 16px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 18px;
  color: #ffffff;
`;
