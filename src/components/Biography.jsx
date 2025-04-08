import styled from "styled-components";

function Biography() {
  return (
    <BioContainer>
      <BioText>
        My path to coding wasn’t traditional, but it’s become a craft I
        genuinely enjoy refining every day. I’ve spent dedicated time studying
        web development, and I’m now focused on sharpening my skills through
        building real-world projects and deepening my understanding of both
        automated and manual testing. I'm actively looking for opportunities to
        apply my knowledge in a professional setting and grow as a developer.
        Let’s connect!
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
  line-height: 1.8;
  font-size: 20px;
  max-width: 600px;
`;
