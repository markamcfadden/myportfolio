import styled from "styled-components";

function ProjectCard({
  title,
  status,
  description,
  live_link,
  github_repo,
  tech_stack,
  image_url,
}) {
  return (
    <CardContainer>
      <CardImage src={image_url} alt={title} />
      <CardTitle>
        {title} <CardStatus>status: {status}</CardStatus>
      </CardTitle>
      <CardBody>
        <CardText>{description}</CardText>
        <CardText>{tech_stack}</CardText>
        <MetaContainer>
          <StyledLink
            href={live_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MetaBox>{live_link}</MetaBox>
          </StyledLink>
          <MetaBox>
            repository:<StyledLink>{github_repo}</StyledLink>
          </MetaBox>
        </MetaContainer>
      </CardBody>
    </CardContainer>
  );
}

export default ProjectCard;

const CardContainer = styled.div`
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
`;

const CardTitle = styled.h2`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardStatus = styled.span`
  font-weight: normal;
  font-size: 16px;
`;

const CardBody = styled.div``;

const CardText = styled.p``;

const MetaContainer = styled.div``;

const MetaBox = styled.div``;

const StyledLink = styled.a``;
