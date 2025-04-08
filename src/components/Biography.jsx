import styled from "styled-components";

function Biography() {
  return (
    <BioContainer>
      <BioText>
        {`I found coding later in life, but once I started, it quickly became a genuine passion. After completing an intensive software development bootcamp with Northcoders, I've been fully focused on growing as a developer — drawn to the problem-solving, logic, and constant learning that tech demands.
I love breaking down complex challenges, writing clean, scalable code, and continuously exploring new technologies to sharpen my skills. Right now, I'm building personal projects and expanding my knowledge through self-study while looking for opportunities to contribute, learn, and grow in a collaborative team.

Before transitioning into tech, I spent over a decade as a professional poker player — a career that refined my analytical thinking, decision-making under pressure, and resilience. Later, working as a poker room supervisor, I developed leadership skills and learned how to manage people effectively — experience I'm excited to bring to any team environment.

Thanks for stopping by — feel free to check out my projects or reach out if you'd like to connect.`}
      </BioText>
    </BioContainer>
  );
}

export default Biography;

const BioContainer = styled.div`
  padding: 20px;
`;

const BioText = styled.p`
  white-space: pre-line;
  line-height: 1.6;
  font-size: 18px;
  max-width: 800px;
`;
