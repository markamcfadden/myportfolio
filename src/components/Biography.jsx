import styled from "styled-components";

function Biography() {
  return (
    <BioContainer>
      <BioText>
        <p>
          Hi, I’m Mark — a motivated junior software developer with a strong
          interest in automated testing and building reliable web applications.
        </p>
        <p>
          I started out in manual testing, which sparked my curiosity for
          coding. That led me to learn JavaScript, complete an intensive
          bootcamp, and build real-world projects to sharpen my skills. Lately,
          I’ve been diving deeper into automated testing to create more
          efficient solutions.
        </p>
        <p>
          My background in competitive poker has honed my problem-solving,
          strategic thinking, and ability to stay calm under pressure —
          qualities I bring to my development work.
        </p>
        <p>
          I’m focused on continuous learning, growing through hands-on practice,
          and I’m actively seeking opportunities to develop my skills further in
          a professional environment.
        </p>
        <p>Let’s connect!</p>
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
