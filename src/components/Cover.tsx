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
      className={`${
        show ? "flex" : "hidden"
      } h-dvh justify-center items-center flex-col gap-8 ${
        hide ? "opacity-0" : "opacity-100"
      } transition-opacity duration-[1.2s] ease-[steps(6,_end)]`}
      onTransitionEnd={onClose}
    >
      <div className="animate-main-enter text-white flex flex-col gap-2 items-center">
        <div
          className="glitch font-dotgothic text-sm select-none"
          title="ainokatachi"
        >
          ainokatachi
        </div>
        <div
          className="glitch font-dotgothic text-4xl select-none"
          title="愛の形"
        >
          愛の形
        </div>
      </div>

      <button
        className="border text-neutral-300 border-neutral-300 px-4 pt-1 pb-1.5 text-xs font-dotgothic hover:border-neutral-100 hover:text-neutral-100 opacity-0 animate-[main-enter_1.5s_steps(4,_end)_1s_forwards]"
        onClick={onEnter}
      >
        Enter
      </button>
    </div>
  );
};

export default Cover;
