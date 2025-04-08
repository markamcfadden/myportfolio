import styled from "styled-components";
import { useState } from "react";

function CourseCard({ title, provider, description, status, certificateLink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardProvider>{provider}</CardProvider>
      <CardDescription>{description}</CardDescription>
      <CardStatus>
        Status: <strong>{status}</strong>
      </CardStatus>
      {certificateLink && (
        <CertificateButton onClick={() => setIsModalOpen(true)}>
          View Certificate
        </CertificateButton>
      )}

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Certificate</h3>
            <iframe
              src={certificateLink}
              title="Certificate"
              width="100%"
              height="400px"
            />
            <CloseButton onClick={() => setIsModalOpen(false)}>
              Close
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Card>
  );
}

export default CourseCard;

const Card = styled.div`
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;
  margin-bottom: 20px;
  min-width: 425px;
  max-width: 900px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

const CardProvider = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const CardStatus = styled.p`
  font-size: 14px;
  margin-top: auto;
  margin-bottom: 10px;
`;

const CertificateButton = styled.button`
  background-color: black;
  color: white;
  padding: 15px;
  min-width: 80px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00ff88;
    color: black;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  width: 600px;
  max-width: 90%;
`;

const CloseButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #00ff88;
    color: black;
  }
`;
