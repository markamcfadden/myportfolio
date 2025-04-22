import styled from "styled-components";

function Biography() {
  return (
    <BioContainer>
      <BioText>
        <p>
          Hi, I’m Mark — a junior software developer passionate about creating
          robust JavaScript applications.
        </p>
        <p>
          I began my career in QA testing, which taught me meticulous attention
          to detail and a drive for reliability. Motivated by that experience, I
          immersed myself in JavaScript, completed an intensive bootcamp, and
          built full‑stack projects with Node.js, React, and PostgreSQL.
        </p>
        <p>
          My competitive poker background sharpened my analytical thinking,
          resilience, and composure under pressure—qualities I apply to
          designing clean, maintainable code and solving complex problems.
        </p>
        <p>
          I thrive in team environments—pairing on code reviews, iterating on
          feedback, and automating workflows to streamline development. A fast
          learner with a growth mindset, I’m dedicated to expanding my technical
          toolkit and delivering impactful solutions.
        </p>
        <p>Let’s build something great together!</p>
      </BioText>
    </BioContainer>
  );
}

export default Biography;

const BioContainer = styled.div`
  padding: 20px;
`;

const BioText = styled.div`
  margin-top: 10px;
  white-space: pre-line;
  line-height: 1.8;
  font-size: 20px;
  max-width: 600px;
  text-align: justify;

  p {
    margin-bottom: 16px;
  }
`;
