import styled from "styled-components";

function Footer() {
  return <FooterContainer></FooterContainer>;
}

export default Footer;

const FooterContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  max-width: 1600px;
  padding: 40px;
  background-color: grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
