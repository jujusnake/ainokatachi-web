type Props = {
  show?: boolean;
};

const Cover = ({ show }: Props) => {
  console.log(show);

  return (
    <div className="bg-neutral-900 h-dvh flex justify-center items-center flex-col gap-8">
      <div className="animate-main-enter text-white">
        <div
          className="glitch font-dotgothic text-4xl select-none"
          title="愛の形"
        >
          愛の形
        </div>
      </div>

      <button className="border text-neutral-400 border-neutral-400 px-4 pt-1 pb-1.5 text-xs font-dotgothic hover:border-neutral-200 hover:text-neutral-200 opacity-0 animate-[main-enter_1.5s_ease-in_1s_forwards]">
        Enter
      </button>
    </div>
  );
};

export default Cover;
