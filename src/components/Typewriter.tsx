import { useEffect, useRef, useState } from "react";

interface TypewriterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: string;
  hideCaret?: boolean;
  delay?: number;
  onFinish?: () => void;
}

const Typewriter = ({ children, className, hideCaret = false, delay = 1500, onFinish, ...props }: TypewriterProps) => {
  const textArr = useRef<string[]>([]);
  const [displayArr, setDisplayArr] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    const splitedText = children.split("");
    textArr.current = splitedText;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayArr((prev) => {
          if (prev.length === textArr.current.length) {
            setIsFinished(true);
            clearInterval(interval);
            return prev;
          } else {
            const nextIdx = prev.length;
            return [...prev, textArr.current[nextIdx]];
          }
        });
      }, 100);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(timeout);
      textArr.current = [];
      setDisplayArr([]);
      setIsFinished(false);
    };
  }, [children]);

  useEffect(() => {
    isFinished && onFinish && onFinish();
  }, [isFinished]);

  return (
    <div {...props} className={`flex gap-1 items-center text-white font-dotgothic text-3xl ${className}`}>
      <div>
        {displayArr.map((letter, idx) => (
          <span key={letter + idx}>{letter}</span>
        ))}
      </div>

      {/* Caret */}
      <div className={`animate-blink w-0.5 h-9 bg-neutral-300 mt-1 ${hideCaret ? "hidden" : "block"}`} />
    </div>
  );
};

export default Typewriter;
