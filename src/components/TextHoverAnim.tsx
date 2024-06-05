import React from "react";

type TextHoverAnimProps = {
  text: string;
};

const TextHoverAnim = ({ text }: TextHoverAnimProps) => {
  const letters = text.split("");

  return (
    <span className="block overflow-hidden">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block relative even:-translate-y-full odd:-translate-y-0 group-hover:even:-translate-y-0 group-hover:odd:-translate-y-full odd:delay-100 transition-all duration-300"
        >
          <span className="block">{letter}</span>
          <span className="block absolute top-full left-0">{letter}</span>
        </span>
      ))}
    </span>
  );
};

export default TextHoverAnim;
