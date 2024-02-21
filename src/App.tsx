import { useCallback, useState } from "react";
import "./app.css";
import Cover from "./components/Cover";
import ShapeVisualizer from "./components/ShapeVisualizer";
import Intro from "./components/Intro";
import ArrowSVG from "./assets/arrow.svg";

function App() {
  const [stage, setStage] = useState<"cover" | "intro" | "main">("cover");

  const onCloseCover = useCallback(() => {
    setStage("intro");
  }, []);

  const onCloseIntro = useCallback(() => {
    setStage("main");
  }, []);

  if (stage === "cover") {
    return <Cover show={stage === "cover"} onClose={onCloseCover} />;
  }

  if (stage === "intro") {
    return <Intro show={stage === "intro"} onClose={onCloseIntro} />;
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-dvh opacity-0 animate-[fade-in_1.5s_ease-in_0.3s_forwards]">
        <div className="fixed top-[calc((100vh_-_500px)_/_2)] left-1/2 -translate-x-1/2 text-neutral-300 font-dotgothic flex flex-col items-center gap-2 animate-pulse">
          <div className="text-xl">click!</div>
          <img src={ArrowSVG} className="mr-2 rotate-90" />
        </div>
        <div className="animate-float">
          <ShapeVisualizer />
        </div>
      </div>
    </>
  );
}

export default App;
