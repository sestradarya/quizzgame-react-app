import React from "react";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Logotype>
      <div className="bounce">
        <span className="letter">B</span>
        <span className="letter">r</span>
        <span className="letter">a</span>
        <span className="letter">i</span>
        <span className="letter">n</span>
        <span className="letter">l</span>
        <span className="letter">y</span>
      </div>
    </Logotype>
  );
};

const Logotype = styled.div`
  flex: 1 1 auto;
  justify-self: center;

  .bounce {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font: normal bold 6rem "Product Sans", sans-serif;
    white-space: nowrap;
  }
  .letter {
    animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) infinite alternate;
    display: inline-block;
    transform: translate3d(0, 0, 0);
    margin-top: 0.5em;
    text-shadow: rgba(0, 0, 0, 0.4) 0 0 0.05em;
    font: normal bold 5rem "Product Sans", sans-serif;
    color: #d8334e;
  }
  .letter:nth-child(1) {
    animation-delay: 0s;
  }
  .letter:nth-child(2) {
    animation-delay: 0.0833333333s;
  }
  .letter:nth-child(3) {
    animation-delay: 0.1666666667s;
  }
  .letter:nth-child(4) {
    animation-delay: 0.25s;
  }
  .letter:nth-child(5) {
    animation-delay: 0.3333333333s;
  }
  .letter:nth-child(6) {
    animation-delay: 0.4166666667s;
  }
  @keyframes bounce {
    0% {
      transform: translate3d(0, 0, 0);
      text-shadow: rgba(0, 0, 0, 0.4) 0 0 0.05em;
    }
    100% {
      transform: translate3d(0, -1em, 0);
      text-shadow: rgba(0, 0, 0, 0.4) 0 1em 0.35em;
    }
  }
`;
