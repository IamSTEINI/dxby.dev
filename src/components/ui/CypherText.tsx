import React, { useEffect, useState } from "react";

const getRandomChar = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  return chars[Math.floor(Math.random() * chars.length)];
};

const generateRandomString = (length: number) => {
  return Array.from({ length }, getRandomChar).join("");
};

interface CypherProps {
  text: string;
  css?: string;
  revealInterval?: number;
  randomInterval?: number;
}

const Cypher: React.FC<CypherProps> = ({
  text,
  css,
  revealInterval = 100,
  randomInterval = 50,
}) => {
  const [displayedText, setDisplayedText] = useState<string>(
    `${text[0]}${generateRandomString(text.length - 1)}`,
  );
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set([0]),
  );
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  useEffect(() => {
    const length = text.length;
    let randomIndex = 0;
    let revealIndex = 1;

    const timeouts: NodeJS.Timeout[] = [];

    // const updateRandomText = () => {
    //   setDisplayedText((prev) => {
    //     const updated = prev
    //       .split("")
    //       .map((char, i) =>
    //         revealedIndices.has(i) ? text[i] : getRandomChar(),
    //       )
    //       .join("");
    //     return updated;
    //   });

    //   randomIndex += 1;

    //   if (randomIndex < length) {
    //     const timeoutId = setTimeout(updateRandomText, randomInterval);
    //     timeouts.push(timeoutId);
    //   } else {
    //     revealActualText();
    //   }
    // };

    const revealActualText = () => {
      setDisplayedText((prev) => {
        const updated = prev
          .split("")
          .map((char, i) =>
            i === revealIndex
              ? text[i]
              : revealedIndices.has(i)
                ? text[i]
                : char,
          )
          .join("");
        return updated;
      });
      setRevealedIndices((prev) => new Set(prev.add(revealIndex)));
      revealIndex += 1;

      if (revealIndex < length) {
        const timeoutId = setTimeout(revealActualText, revealInterval);
        timeouts.push(timeoutId);
      } else {
        setIsRevealed(true);
      }
    };

    setTimeout(() => {
      revealActualText()
    }, 300);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [text, revealInterval, randomInterval]);

  return <span className={`${css}`}>{displayedText}</span>;
};

export default Cypher;
