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
        <MetaContainer>
          <MetaBox>
            <Label>Tech Stack:</Label>
            <Value>
              {tech_stack.map((tech, index) => (
                <TechTag key={index}>{tech} </TechTag>
              ))}
            </Value>
          </MetaBox>
          <MetaBox>
            <Label>Live Link:</Label>
            <StyledLink
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Value>{live_link.replace(/^https?:\/\//, "")}</Value>
            </StyledLink>
          </MetaBox>
          <MetaBox>
            <Label>Repository:</Label>
            <StyledLink
              href={github_repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Value>Github/{title}</Value>
            </StyledLink>
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

const CardText = styled.p`
  padding: 5px;
  margin-bottom: 5px;
`;

const MetaContainer = styled.div``;

const MetaBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Label = styled.span`
  font-weight: 600;
  color: "#3b82f6";
  margin-right: 3px;
  min-width: 100px;
`;

const Value = styled.span`
  color: "#ffffff";
`;

const StyledLink = styled.a``;

const TechTag = styled.span`
  background-color: #7e22ce;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin: 5px 5px 0 0;
  display: inline-block;
`;
