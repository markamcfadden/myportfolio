import styled from "styled-components";
import myPhoto from "../assets/mark.jpg";

function ProfilePhoto() {
  return <Photo src={myPhoto} alt="A photo of me" />;
}

export default ProfilePhoto;

const Photo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid black;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;
