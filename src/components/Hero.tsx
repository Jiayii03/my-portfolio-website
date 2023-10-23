"use client";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "HELLO, Introducing You to Jay.py",
      "A Dedicated Developer",
      "A Sporty Go-getter",
    ],
    loop: true,
    delaySpeed: 1800,
  });

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#030636" />
      </h1>
    </div>
  );
}

export default Hero;
