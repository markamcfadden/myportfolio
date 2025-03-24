import styled from "styled-components";
import myPhoto from "../assets/mark.png";

function ProfilePhoto() {
  return <Photo src={myPhoto} alt="A photo of me" />;
}

export default ProfilePhoto;

const Photo = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
