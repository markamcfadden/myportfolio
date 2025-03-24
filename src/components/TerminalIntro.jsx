import { useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from "typed.js";

function TerminalIntro() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`Hello world. I'm Mark, welcome to my portfolio.`],
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
  color: #00c76a;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 700px;
  font-size: 30px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
`;
