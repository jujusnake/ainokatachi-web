import { useCallback, useState } from "react";

type Props = {
  show?: boolean;
  onClose?: () => void;
};

const Cover = ({ show, onClose }: Props) => {
  const [hide, setHide] = useState<boolean>(false);

  const onEnter = useCallback(() => {
    setHide(true);
  }, [onClose]);

  return (
    <div
      className={`${show ? "flex" : "hidden"} h-dvh justify-center items-center flex-col gap-8 ${
        hide ? "opacity-0" : "opacity-100"
      } transition-opacity duration-[1.2s] ease-[steps(6,_end)]`}
      onTransitionEnd={onClose}
    >
      <div className="flex flex-col items-center gap-2 text-white animate-main-enter">
        <div className="text-sm select-none glitch font-dotgothic" title="the shape of love">
          the shape of love
        </div>
        <div className="text-4xl select-none glitch font-dotgothic" title="愛の形">
          愛の形
        </div>
      </div>

      <button
        className="border text-neutral-300 border-neutral-300 px-4 pt-1 pb-1.5 text-xs font-dotgothic hover:border-neutral-100 hover:text-neutral-100 opacity-0 animate-[fade-in_1.5s_steps(4,_end)_1s_forwards]"
        onClick={onEnter}
      >
        Enter
      </button>
    </div>
  );
};

export default Cover;
