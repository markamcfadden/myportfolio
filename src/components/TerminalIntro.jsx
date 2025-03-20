import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typed from "typed.js";

function TerminalIntro() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`Hello world.\n\n` + `I'm Mark, welcome to my portfolio.`],
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
  background-color: black;
  color: green;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  margin: 50px auto;
  font-size: 30px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  white-space: pre-line;
`;
