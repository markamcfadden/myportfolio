import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typed from "typed.js";

function TerminalIntro() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `Hello world.\n\n` +
          `Welome to my portfolio. \n\n` +
          `I'm Mark, a passionate software developer dedicated to learning, improving my skills and building clean, scalable applications. \n\n` +
          `Here, you can read more about me, explore my projects and find my contact information. Feel free to look around and reach out.`,
      ],
      typeSpeed: 45,
      showCursor: false,
      loop: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <TerminalBox>
      <span ref={el}></span>
    </TerminalBox>
  );
}

export default TerminalIntro;

const TerminalBox = styled.div`
  color: #00ff00;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  margin: 50px auto;
  font-size: 30px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  white-space: pre-line;
`;
