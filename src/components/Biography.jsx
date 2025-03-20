import styled from "styled-components";

function Biography() {
  return (
    <BioContainer>
      <BioText>
        {`Before writing code, I was calculating odds and reading opponents at the poker table.

For over a decade, I worked as a professional poker player — a career that sharpened my analytical thinking, honed my decision-making under pressure, and taught me the value of patience and precision.

Over time, what started as a fascination with game theory and probabilities sparked a deeper interest in technology and software.

Now, as a junior software developer, I bring that same strategic mindset to every project — writing clean, scalable code, continuously learning new technologies, and collaborating to create thoughtful digital experiences.

This portfolio is a snapshot of that journey. Explore my projects, learn more about me, or reach out — I’m always excited to connect.`}
      </BioText>
    </BioContainer>
  );
}

export default Biography;

const BioContainer = styled.div`
  background-color: grey;
  padding: 20px;
  width: 80%;
`;

const BioText = styled.p`
  white-space: pre-line;
  line-height: 1.6;
  font-size: 16px;
`;
