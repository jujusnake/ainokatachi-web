import { useMemo, useState } from "react";
import ArrowSVG from "../assets/arrow.svg";
import Typewriter from "./Typewriter";

type Props = {
  show?: boolean;
  onClose?: () => void;
};

const Intro = ({ show, onClose }: Props) => {
  const [hide, setHide] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [japaneseDone, setJapaneseDone] = useState<boolean>(false);
  const [readyForNext, setReadyForNext] = useState<boolean>(false);

  const TYPEWRITER_TEXT = useMemo(
    () => [
      { ja: "あなたは恋をしていますか？", en: "Are you in love？" },
      { ja: "あなたの恋の形はなんですか？", en: "What is the shape of your love？" },
    ],
    []
  );

  const onNext = () => {
    if (page === 0) {
      setPage(1);
      setReadyForNext(false);
      setJapaneseDone(false);
    } else {
      setHide(true);
    }
  };

  return (
    <div
      className={`${show ? "flex" : "hidden"} h-dvh justify-center items-center flex-col gap-8 ${
        hide ? "opacity-0" : "opacity-100"
      } transition-opacity duration-[1.2s] ease-in`}
      onTransitionEnd={onClose}
    >
      {/* Typewriter */}
      <Typewriter onFinish={() => setJapaneseDone(true)} hideCaret={japaneseDone}>
        {TYPEWRITER_TEXT[page].ja}
      </Typewriter>
      {japaneseDone && (
        <Typewriter delay={1000} onFinish={() => setReadyForNext(true)}>
          {TYPEWRITER_TEXT[page].en}
        </Typewriter>
      )}

      {/* Next Button */}
      <div
        className={`fixed bottom-5 right-6 ${
          readyForNext ? "opacity-100 delay-300 duration-300 visible" : "opacity-0 duration-0 invisible"
        } transition-[opacity,_visibility] `}
        onTransitionEnd={(e) => e.stopPropagation()}
      >
        <button
          className={`items-center flex gap-3 text-neutral-300 border-neutral-300 px-4 pt-1 pb-1.5 text-xs font-dotgothic hover:border-neutral-100 hover:text-neutral-100 animate-pulse`}
          onClick={onNext}
        >
          <div className="text-xl">click!</div>
          <img src={ArrowSVG} className="pt-0.5" />
        </button>
      </div>
    </div>
  );
};

export default Intro;
